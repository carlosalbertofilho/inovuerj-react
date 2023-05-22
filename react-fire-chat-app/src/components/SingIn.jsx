import "./SingIn.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const SignIn = ({ auth }) => {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    return (
        <div className="sing-in">
            <button onClick={signInWithGoogle}>
                <div>
                    <img src="/google.png" alt="Google Login" />
                </div>
                <div>Sing in With Google</div>
            </button>
        </div>
    );
};