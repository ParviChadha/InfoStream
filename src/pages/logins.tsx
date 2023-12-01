import { signInWithGoogle } from "../../server/firebase-config.ts";

function Login() {
    return (
        <div> 

            <h1>{localStorage.getItem("name")}</h1>
            <h1>{localStorage.getItem("email")}</h1>
            <div className="container mt-5">
                <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4">
                    <h2 className="text-center mb-4">Sign In With Google</h2>
                    <button onClick={signInWithGoogle} className="btn btn-dark btn-block">Sign In </button>
                    </div>
                </div>
                </div>
            </div>
        </div>);

}
export default Login;