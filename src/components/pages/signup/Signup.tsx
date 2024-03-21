import React, { useEffect, useState } from "react";
import {
  CModal,
  CButton,
  CModalTitle,
  CModalBody,
  CModalHeader,
} from "@coreui/react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import "../model12.css";
interface Ijwt {
    credential:string |any
  }
  
interface ISignupProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Iobj {
  name: string;
  email: string;
  password: string;
}

const Signup: React.FC<ISignupProps> = ({ showModal, setShowModal }) => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const [state, setState] = useState<Iobj>(initialState);
  const [error, setError] = useState<{
    name?: string;
    email?: string;
    password?: string;
  }>({});

  const validation = (obj: Iobj) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const errors: { name?: string; email?: string; password?: string } = {};

    if (!obj.name) {
      errors.name = "Name is required";
    }
    if (!obj.email) {
      errors.email = "Email is required";
    } else if (!regex.test(obj.email)) {
      errors.email = "Email is invalid";
    }
    if (!obj.password) {
      errors.password = "Password is required";
    } else if (obj.password.length < 3) {
      errors.password = "Password should be at least 3 characters";
    } else if (obj.password.length > 12) {
      errors.password = "Password should be less than 12 characters";
    }

    return errors;
  };

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
//   useEffect(() => {
//     const token =
//       "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZmOTc3N2E2ODU5MDc3OThlZjc5NDA2MmMwMGI2NWQ2NmMyNDBiMWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5NTA3NzIxNjE4NjMtdGw1cjZzcG5oNjRjOGtpYTI1dXJxcHFhZmtydHF2bzAuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5NTA3NzIxNjE4NjMtdGw1cjZzcG5oNjRjOGtpYTI1dXJxcHFhZmtydHF2bzAuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTQ5MzE4Njc5MDQyNDEzNTA4MzciLCJlbWFpbCI6Im5hZ2VzaDkxNTU1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3MDkxMjMxNzMsIm5hbWUiOiJuYWdlc2ggbW91cnlhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0lSTjJpbnVFOWY4YjdnMGdtMVhDaTRCSDMxeFJZd0hYNlNPZ25nVFNMdTR3PXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6Im5hZ2VzaCIsImZhbWlseV9uYW1lIjoibW91cnlhIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE3MDkxMjM0NzMsImV4cCI6MTcwOTEyNzA3MywianRpIjoiNzAxYmJjZGFkZTUzMmJiZmQ2ZTMxNzAyMTRlMWY5YjQ0N2NhYTg2YiJ9.TmaGOqd0PWWER_cGPDyWefO966bm_4Xm-yu0QW1FQRmWJEer9OfEskMnnUMlWx9Vcwa3rbYwwwdtYBqk8YS91tTdSjNgaag1_xFUMMwaPY9RqnmzovXIB0Hz8UeqoBHesDEKoQ5umk2zZxbWIrl-y6FEZw9pZ5Ms805ul7d0niyBChwAA8B2xrBdyDy6cK82eSoLmLFc6gtAPS4b4_wWFq5LB6njaMiDFbtlNCoooyW_aTP4hKPTihwuzNb-blLhou2voejX5LvpA5FJIlzx1ySN2_c_0iTtk6wa9EexnAmW_KGOvL2BDtoqY-9bcAAXaIQBuY4Qnl6vqOb2wUhBdA";
//     if (token) {
//       const decoded: any = jwt_decode(token);
//       const { name, picture: imageUrl } = decoded;
//       setUser({ name, imageUrl });
//     }
//   }, []);

  const registerapi = () => {
    const errors = validation(state);
    setError(errors);

    if (Object.keys(errors).length === 0) {
      console.log("No errors, calling register");
      // Perform your registration action here
    }
  };
  console.log(showModal + "444444444");
  const [user, setUser] = useState<{ name: string; imageUrl: string } | null>(
    null
  );

  return (
    <>
      <CModal
        visible={showModal}
        onClose={() => setShowModal(!showModal)}
        aria-labelledby="VerticallyCenteredExample"
        className="model1"
      >
        <CModalHeader closeButton>
          <CModalTitle id="VerticallyCenteredExample">
            Create Account
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <form>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example1cg">
                Your Name
              </label>
              <input
                type="text"
                id="form3Example1cg"
                className="form-control form-control-lg"
                name="name"
                value={state.name}
                onChange={handleOnchange}
              />
              {error.name && <p style={{ color: "red" }}>{error.name}</p>}
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example3cg">
                Your Email
              </label>
              <input
                type="email"
                id="form3Example3cg"
                className="form-control form-control-lg"
                name="email"
                value={state.email}
                onChange={handleOnchange}
              />
              {error.email && <p style={{ color: "red" }}>{error.email}</p>}
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example4cg">
                Password
              </label>
              <input
                type="password"
                id="form3Example4cg"
                className="form-control form-control-lg"
                name="password"
                value={state.password}
                onChange={handleOnchange}
              />
              {error.password && (
                <p style={{ color: "red" }}>{error.password}</p>
              )}
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                style={{ width: "100%" }}
                className="btn btn-success btn-block btn-md gradient-custom-4 text-body"
                onClick={registerapi}
              >
                Register
              </button>
            </div>
            <p className="text-center text-muted mt-5 mb-0">
              Have already an account?{" "}
              <a href="#!" className="fw-bold text-body">
                <u>Login here</u>
              </a>
            </p>
            <div>
              <GoogleOAuthProvider clientId="950772161863-tl5r6spnh64c8kia25urqpqafkrtqvo0.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log("response", credentialResponse);
                    // const decoded: any = jwt_decode(credentialResponse.credential) as Ijwt;

              
                    // const { name, picture: imageUrl } = decoded;
                    // setUser({ name, imageUrl });
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </GoogleOAuthProvider>
              
            </div>
          </form>
        </CModalBody>
      </CModal>
    </>
  );
};
 
export default Signup;
