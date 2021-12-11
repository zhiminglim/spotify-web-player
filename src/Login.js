import React from 'react';

function Login() {
    console.log("[Login] vercel env = " + process.env.VERCEL_ENV)
    return (
        <div className="App">
            <header className="App-header">
                <a className="btn-spotify" href="/auth/login" >
                    Login with Spotify 
                </a>
            </header>
        </div>
    );
}

export default Login;

