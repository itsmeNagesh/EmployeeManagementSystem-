import React, { useState,useEffect } from 'react';
import './pofo.css'
import {
    CModal,
  
    CModalBody,
  
    CModalFooter
    
} from "@coreui/react";

import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { RxCross2 } from "react-icons/rx";
interface Iprop{
    name:string,
    url:String | any
    handlelogout:any
}

const Logindata:React.FC<Iprop>=({name,url,handlelogout})=>{
    const [visible, setVisible] = useState<boolean>(true)
 
const [token,setToken]=useState<string | null>(localStorage.getItem('jwtToken'));
useEffect(()=>{
  
  const res= localStorage?.getItem("jwtToken");

  console.log(res)
  setToken(res)
  
},[token])
  return (
    <>
    <div className="model">
    {/* <CButton onClick={() => setVisible(!visible)}>Launch demo modal</CButton> */}
    <CModal
    className="modal-right" 
     onClose={() => setVisible(false)}
      visible={visible}
    
      aria-labelledby="LiveDemoExampleLabel"
    >
   
      
      <CModalBody>
        <div className="im d-flex justify-content-space-between">
        <img src={url} className="img-fluid" style={{ borderRadius: "90%" }} alt="User Profile"  /> 
         <RxCross2  className='cross' onClick={() => setVisible(false)} />

        </div>
    

         <h1>Hello!<br/>{name}</h1>
                      <GoogleOAuthProvider clientId="950772161863-tl5r6spnh64c8kia25urqpqafkrtqvo0.apps.googleusercontent.com">
                        <div className='d-flex justify-content-space-between'>
                        <GoogleLogin
                                                                onSuccess={(credentialResponse:any)=>{
                                                                    console.log("$$$",credentialResponse);
                                                                
                                                                }}
                                                                onError={() => {
                                                                    console.log('Login Failed');
                                                                }}
                                                                />
                                                                 <button
                className="out btn btn-danger border-rounded-5 fw-bold text-light " 
                onClick={()=>handlelogout()}
            >
                LogOut
            </button>
            
          </div>
                                                  

                                </GoogleOAuthProvider>
                              
      </CModalBody>
      <CModalFooter>
     
      </CModalFooter>
    </CModal>
    </div>
    </>
  )
}

export default Logindata