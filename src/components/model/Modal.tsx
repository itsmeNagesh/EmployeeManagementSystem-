import React, { useState } from 'react';
import {
    CModal,
    CButton,
    CModalTitle,
    CModalBody,
    CModalHeader,
    CForm,
    CFormLabel,
    CFormInput,
    CFormText
} from "@coreui/react";
import Apiservices from '../../Apisevices/Apiservices';
import './model.css'

interface IState {
    emp_FirstName: string;
    emp_LastName: string;
    emp_EmailId: string;
}
interface Iprops{
    signalforOpenorClose:boolean;
}

const Modal: React.FC<Iprops> = ({signalforOpenorClose}) => {
    const [visible, setVisible] = useState<boolean>(signalforOpenorClose);
    const [state, setState] = useState<IState>({
        emp_FirstName: "",
        emp_LastName: "",
        emp_EmailId: ""
    });
    const [error, setError] = useState<{ emp_FirstName?: string; emp_LastName?: string; emp_EmailId?: string }>({});

    const validation = (obj: IState) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const error: { emp_FirstName?: string; emp_LastName?: string; emp_EmailId?: string } = {};

        if (!obj.emp_FirstName) {
            error.emp_FirstName = "Name is required";
        }
        if (!obj.emp_LastName) {
            error.emp_LastName = "Last Name is required";
        }
        if (!obj.emp_EmailId) {
            error.emp_EmailId = "Email is required";
        } else if (!regex.test(obj.emp_EmailId)) {
            error.emp_EmailId = "Email is invalid";
        }
        return error;
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const SaveEmp = () => {
        const errors = validation(state);
        setError(errors);

        if (Object.keys(errors).length === 0) {
            const dataToSend = JSON.stringify(state);

        // Call the static method from the service class to make the POST request
        Apiservices.postEmp(dataToSend)
            .then(response => {
                // Handle success response
                console.log("Post request successful", response);
            })
            .catch(error => {
                // Handle error
                console.error("Error making post request", error);
            });
        }
    }

    return (
        <>
            <CModal
                className="model1 "
                alignment="center"
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="VerticallyCenteredExample"
            >
                <CModalHeader>
                    <CModalTitle id="VerticallyCenteredExample">
                        Enter Details of New Employee
                    </CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm className="form-control">
                        <div className="mb-3">
                            <CFormLabel htmlFor="name">First Name</CFormLabel>
                            <CFormInput
                                type="text"
                                id="name"
                                name="emp_FirstName"
                                value={state.emp_FirstName}
                                placeholder=""
                                aria-describedby="text"
                                onChange={handleOnChange}
                                required
                            />
                            {error && error.emp_FirstName && <span style={{ color: "red" }}>{error.emp_FirstName}</span>}
                            <CFormText id="emp_EmailIdlHelp"></CFormText>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleInputPassword1">Last Name</CFormLabel>
                            <CFormInput
                                type="text"
                                placeholder="Last Name.."
                                name="emp_LastName"
                                onChange={handleOnChange}
                                value={state.emp_LastName}
                                required
                            />
                            {error && error.emp_LastName && <span style={{ color: "red" }}>{error.emp_LastName}</span>}
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleInputPassword1">Email</CFormLabel>
                            <CFormInput
                                type="email"
                                aria-describedby="emp_EmailIdlHelp"
                                name="emp_EmailId"
                                value={state.emp_EmailId}
                                onChange={handleOnChange}
                                required
                            />
                            {error && error.emp_EmailId && <span style={{ color: "red" }}>{error.emp_EmailId}</span>}
                        </div>

                        <CButton color="secondary" style={{ display: "inline-block" }} onClick={() => (setVisible(!visible), setError({}))}>
                            Close
                        </CButton>
                        <CButton
                            color="primary"
                            onClick={SaveEmp}
                            className="kk"
                        >
                            Save
                        </CButton>
                    </CForm>
                </CModalBody>
            </CModal>
        </>
    );
}

export default Modal;
