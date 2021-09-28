import React, { useState } from 'react';

//packages
import { Stack, DefaultButton, Label, TextField, Spinner } from "@fluentui/react";

//components
import Header from './Header'

//services
import { LoginApi } from './../Services/authServices'

const Login = () => {

    const [Email, setEmail] = useState("eve.holt@reqres.in")
    const [Password, setPassword] = useState("cityslicka")

    const style = {
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }

    const styleInput = {
        background: "#f1f1f1",
        borderRadius: "9px",
        marginBottom: "2rem",
        height: "40px",
        width: "300px"
    }

    const styleLabel = {
        marginBottom: "1rem",
        width: "310px"

    }

    const buttonStyle = {
        marginTop: "2rem", background: "#0078D4", color: "#f1f1f1", border: "0", width: "310px",
        height: "40px",
    }


    const loginService = async () => {
        try {

            const { data } = await LoginApi()
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container" style={style}>
            <Header />
            <div style={{
                width: "600px",
                padding: '2rem',
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                background: "#DAEBF7",
                borderRadius: "7px"
            }}>
                <Label style={styleLabel}>Email</Label>
                <TextField
                    placeholder="Email"
                    type="text"
                    borderless
                    styles={styleInput}
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Label style={styleLabel}>Password</Label>
                <TextField
                    type="password"
                    placeholder="Password"
                    borderless
                    styles={styleInput}
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <DefaultButton style={buttonStyle}>LOGIN</DefaultButton>
            </div>
        </div>
    );
}

export default Login;