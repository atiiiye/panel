import React from 'react';

//packages
import { Stack, DefaultButton, Label, TextField, Spinner } from "@fluentui/react";

const Login = () => {

    const style = {
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }

    return (
        <div className="container" style={style}>

            <div style={{
                width: "600px", padding: '2rem', display: "flex", alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                background: "#88cbfa",
                borderRadius: "7px"

            }}>
                <Label> user name</Label>
                <TextField
                    placeholder="User name"
                    type="text"
                />

                <Label>password</Label>
                <TextField
                    type="password"
                    placeholder="Password" />

                <DefaultButton style={{ marginTop: "2rem" }}>Login</DefaultButton>
            </div>
        </div>
    );
}

export default Login;