import { signInWithGoogle } from "../../server/firebase-config.ts";

function Login() {
    return <div> 
            <button onClick={signInWithGoogle}>Sign in With Google </button>
            <h1>{localStorage.getItem("name")}</h1>
            <h1>{localStorage.getItem("email")}</h1>
        </div>

}

export default Login;