import React, { useEffect, useState } from 'react';
import './empt.css';
import Apiservices from '../../../Apisevices/Apiservices';
import Model from '../../model/Modal';
import Contentoftable from '../.././Contentoftable';
import {Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
export interface Idata {
    id: number;
    name: string;
    username: string;
    email: string;
}

const EmpTable: React.FC = () => {
    useEffect(() => {
        AOS.init({
          duration: 1300, // Change the animation duration as needed
        // Whether animation should only happen once
        });
      }, []);
    const [state, setState] = useState<Idata[]>([]);
    const [show,setShow]=useState<boolean>(false)
   const handlenewEmp=()=>{
 
     setShow(!show)
     console.log("calling for model open " +  show)
   }


   const[response,setResponse]=useState<string>('')
   const handleDeleteAll = () => {
   
   
    try{
   
        Apiservices.DeleteData()
        .then((res) => {
            // Assuming res.data is a string
            setResponse(res.data);
        })
        .catch((error) => {
            // If error.response.data is a string, you can set it to the response
            setResponse(error.response?.data || "An error occurred");
        });

    }
    catch(error){
        console.log(error+"k"
            )
    }
  
};
const handleDeletBYId=(id:number)=>{
    setShow(!show);
    Apiservices.Updatedata(id)
    .then((res) => {
        // Assuming res.data is a string
        setResponse(res.data);

        if(res.status===200){
               Apiservices.getData()
            .then((ress) => {
                setState(ress.data);
            })
        }
    })
    .catch((error) => {
        // If error.response.data is a string, you can set it to the response
        setResponse(error.response?.data || "An error occurred");
    });

}

    useEffect(() => {
        Apiservices.getData()
            .then((ress) => {
                setState(ress.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div className="emp container-sm table table-bordered mb-5" style={{ marginTop: "5%", marginBottom: "8%" }}>
                <h1 data-aos="flip-right">All Employee Data </h1>
                <div data-aos="fade-right" className='d-flex  justify-content-inline-block'> <button className="add1 btn btn-success mb-1 " onClick={handlenewEmp}>Add New Employee</button>
                <button className="deleteAllbtn btn btn-danger mb-1"onClick={handleDeleteAll} data-aos="fade-left">Delete All Employee</button></div>
               
               
                <div className="table-responsive">
                    <table className="table table-striped table-bordered"data-aos="flip-right">
                        <thead className="head" ata-aos="flip-left">
                            <tr className="table table-active ">
                                <th className="ps-3">Id</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.map((rec) => {
                                return (
                                    <tr key={rec.id}>
                                        <td>{rec.id}</td>
                                        <td>
                                    <Link to={`/UserDetails/${rec.id}/${rec.name}`} className='text-decoration-none'>{rec.name}</Link></td>
                                        <td>{rec.username}</td>
                                        <td>{rec.email}</td>
                                        <td>
                                            <button className="btn btn-primary ms-2" onClick={()=>handleDeletBYId(rec.id)}>Update</button>
                                            <button className="btn btn-danger ms-2">Delete</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            {show && (<Model signalforOpenorClose={show}/>)}
          <div className='mb-5'>
            <Contentoftable 

         color={"yellowgreen"}
          title={"About Employee Table"}
           content={"An employee management system (EMS) is a vital tool for businesses to efficiently organize, monitor, and optimize their workforce.Designed to streamline various aspects of employee administration, an EMS typically encompasses a range of functionalities tailored to meet the needs of modern workplaces. Here's an overview of the key components and benefits of an employee management system"}
      />
      </div>
        </>
    );
};

export default EmpTable;
