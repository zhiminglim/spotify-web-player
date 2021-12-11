import React from 'react';

function Login() {
    return (
        <div className="App">
            <header className="App-header">
                <a className="btn-spotify" href="/auth/login" >
                    Login with Spotify 
                </a>
                <a className="btn-spotify" href="/test" >
                    Test API
                </a>
            </header>
        </div>
    );
}

export default Login;

