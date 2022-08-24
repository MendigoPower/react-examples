import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,  } from "firebase/auth"
import { auth } from "../../firebase-config";

const userService = {
    signUp: async (newUser) => {
        const { email, password } = newUser;
        return await  createUserWithEmailAndPassword(auth, email, password);
    },
    login: async (user) => {
        const { email, password } = user;
        return signInWithEmailAndPassword(auth, email, password );
    },
    signOut: async () => {
        return signOut(auth);
    }
};

export default userService; 