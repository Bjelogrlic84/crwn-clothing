import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SingIn = () => {
    const logGoogleUser = async () => {
        const result = await signInWithGooglePopup();
        console.log(result);    
    }

    return (
        <div>
            <h1>Sing In Page</h1>
            <button onClick={logGoogleUser}>Sing In With Google</button>
        </div>
    );
};

export default SingIn;