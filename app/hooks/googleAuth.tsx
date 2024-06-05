import { useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../storage/config";
interface Customer {
  displayName: string;
  photoURL: string | undefined;
  email: string;
}

export default function GoogleAuth() {
  const [user, setUser] = useState<Customer | null>(null);
  const provider = new GoogleAuthProvider();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        if (user) {
          setUser({
            displayName: user.displayName || "",
            photoURL: user.photoURL || undefined,
            email: user.email || "",
          });
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la connexion avec Google :", error);
      });
  };
  
  return {
    user,
   signIn
  }
}
