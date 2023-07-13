import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SingIn = () => {
    const logGoogleUser = async () => {
        const result = await signInWithGooglePopup();
        console.log(result);    
    }

    return (
        <div>
            <h1>Sing In Page</h1>
            <button onClick={logGoogleUser}>Sing In With Google</button>
            <SignUpForm />
        </div>
    );
};

export default SingIn;