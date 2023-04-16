import React from 'react'
import { Helmet } from 'react-helmet-async';

// login page is already put in Disallow in robots.txt file


function Login() {
    return (
        <>
            <Helmet>
                <title>Login</title>
                <meta name="description" content="Login to view your account." />
                <link rel="canonical" href="/login" />
            </Helmet>

            <p>Login</p>
        </>
    )
}

export default Login