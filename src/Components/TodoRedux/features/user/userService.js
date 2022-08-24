import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import { auth } from '../../../BlogPosts/firebase-config';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const userService = {
  signUp: async (newUser) => {
    const { email, password } = newUser;
    return await createUserWithEmailAndPassword(auth, email, password);
  },
  login: async (user) => {
    const { email, password } = user;
    return signInWithEmailAndPassword(auth, email, password);
  },
  signOut: async () => {
    return await signOut(auth);
  },
  loginWithGoogle: async () => {
    return await signInWithPopup(auth, googleProvider);
  },
  loginWithGithub: async () => {
    try {
      return await signInWithPopup(auth, githubProvider);
    } catch (e) {
      console.log('e', e);
    }
  },
};

export default userService;
