import React, { useState } from "react";
import { CModal, CButton, CModalTitle, CModalBody, CModalHeader } from '@coreui/react';
import '../model12.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from "jwt-decode";
interface ISignInProps {
    showModal2: boolean;
    setShowModal2: React.Dispatch<React.SetStateAction<boolean>>;
    tackimg:any
    setToken:any
}

interface Iobj {
    email: string;
    password: string;
}

const SignIn: React.FC<ISignInProps> = ({ showModal2, setShowModal2,tackimg,setToken }) => {
   
    const initialState = {
        email: "",
        password: ""
    };
    const [state, setState] = useState<Iobj>(initialState);
    const [error, setError] = useState<{ email?: string; password?: string }>({});

    const validation = (obj: Iobj) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const errors: { email?: string; password?: string } = {};

        if (!obj.email) {
            errors.email = "Email is required";
        } else if (!regex.test(obj.email)) {
            errors.email = "Invalid email";
        }
        if (!obj.password) {
            errors.password = "Password is required";
        }

        return errors;
    };

    const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const registerapi = () => {
        const errors = validation(state);
        setError(errors);

        if (Object.keys(errors).length === 0) {
            console.log("No errors, calling register");
            // Perform your login action here
        }
    };
  const [na,setna]=useState<string |any>();
  const [pic,setpic]=useState<string |any>();


    const handlelogout=()=>{
        localStorage.removeItem("jwtToken");
        // setToken("")
     
    }
    return (
        <>
            <CModal
                visible={showModal2}
                onClose={() => setShowModal2(!showModal2)}
                aria-labelledby="VerticallyCenteredExample"
              className="model1"
            >
                <CModalHeader closeButton>
                    <CModalTitle id="VerticallyCenteredExample">Login</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <form>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                            <input
                                type="email"
                                id="form3Example3cg"
                                name="email"
                                value={state.email}
                                className="form-control form-control-lg"
                                onChange={handleOnchange}
                            />
                            {error.email && <p style={{ color: "red" }}>{error.email}</p>}
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example4cg">Password</label>
                            <input
                                type="password"
                                id="form3Example4cg"
                                name="password"
                                value={state.password}
                                className="form-control form-control-lg"
                                onChange={handleOnchange}
                            />
                            {error.password && <p style={{ color: "red" }}>{error.password}</p>}
                        </div>
                        <div className="d-flex justify-content-center">
                            <button
                                type="button"
                                style={{ width: "100%" }}
                                className="btn btn-success btn-block btn-md gradient-custom-4 text-body"
                                onClick={registerapi}
                            >
                                Login
                            </button>
                        </div>
                        <p className="text-center text-muted mt-5 mb-0">
                            Have already an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a>
                        </p>
                        <div className="goglelogin">
                        <GoogleOAuthProvider clientId="950772161863-tl5r6spnh64c8kia25urqpqafkrtqvo0.apps.googleusercontent.com">
                                                                <div className="goglelogin">
                                                                <GoogleLogin
                                                                onSuccess={(credentialResponse:any)=>{
                                                                    console.log("$$$",credentialResponse);
                                                                    const decodedToken: any = (jwtDecode as any)(credentialResponse.credential);
                            
                                                                     const { name, picture } = decodedToken;
                                                                     localStorage.setItem("jwtToken", credentialResponse.credential);
                                                                    setna(name);
                                                                    setToken(credentialResponse.credential)
                                                                    setpic(picture);
                                                                    console.log("Name:", name);
                                                                    tackimg(picture,name);
                                                                    console.log("Picture:", picture);
                                                                }}
                                                                onError={() => {
                                                                    console.log('Login Failed');
                                                                }}
                                                                />
                                                                </div>
                                                              
                            
                            </GoogleOAuthProvider>
                        </div>
                        
{pic &&<img src={pic} className="img-fluid" style={{ borderRadius: "50%" }} alt="User Profile" />}
<button
                className="out btn btn-danger border-rounded-5 fw-bold text-light " 
                onClick={()=>handlelogout}
            >
                LogOut
            </button>
                    </form>
                    
              
                </CModalBody>
            </CModal>
        </>
    );
};

export default SignIn;
