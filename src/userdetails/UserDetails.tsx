import React from 'react';
import { useParams,Link } from 'react-router-dom';
import './userd.css'
interface Ipram{
    id:number,
    name:string
}
const UserDetails: React.FC = () => {
    const{id,name}=useParams<Ipram | any >();
    return (
        <>
            <div className="container-fluid" style={{ height:"80vh",backgroundColor:"yellowgreen"}}>
                <div className="row mt-5" >
                    <div className="colr col-md-12 d-flex justify-content-center align-items-center mt-5 mt-5">
                    <h1>Hello&nbsp;   {name}<br/> Id :{id}<br/><Link to="/EmpTable" className='btn btn-primary'>GO BACK</Link></h1>
                   
                    </div>
                   
            
                </div>
               
            </div>
     
        </>
    );
};

export default UserDetails;
