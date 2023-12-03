import { signInWithGoogle , signOut} from "../../server/firebase-config.ts";
import React, { useEffect, useState} from "react";

type User = {
    name: string;
    email: string;
} | null;
function Login() {
    const [user, setUser] = useState<User>(null);

    useEffect(() => {
        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
        if (name && email) {
            setUser({name, email});
        }
    }, []); 

    const handleLoginClick = () => {
        signInWithGoogle();
        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
        if (name && email) {
            setUser({name, email});
        };
    };

    const handleLogoutClick = async () => {
        await signOut();
        setUser(null);
        localStorage.removeItem('name');
        localStorage.removeItem('email');
    };
    return (
        <div> 
            <h1>Login Page</h1>
            {user ? (
                <div>
                    <p className="text-center mb-4">Welcome, {user.name}</p>
                    <button onClick={handleLogoutClick}>Sign Out</button>
                </div>
            ) : (
                <div className="container mt-5">
                    <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                        <h2 className="text-center mb-4">Sign In With Google</h2>
                        <button onClick={handleLoginClick} className="btn btn-dark btn-block">Sign In </button>
                        </div>
                    </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Login;