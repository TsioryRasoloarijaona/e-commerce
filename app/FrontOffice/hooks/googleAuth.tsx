"use client";
import { useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { auth } from "../../storage/config";
import { Button } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {create} from "zustand"

interface User {
  displayName: string;
  photoURL: string | StaticImport;
  email: string;
}

interface userState {
  name: string ;
  email: string ;
  updateName: (name: string) => void;
  updateEmail: (email: string) => void;
}

export const usePersonStore = create<userState>((set) => ({
  name: '',
  email: '',
  updateName: (name : string ) => set(() => ({ name : name })),
  updateEmail: (email : string ) => set(() => ({ email: email })),
}))


export default function GoogleAuth() {
  const {  updateName, updateEmail } = usePersonStore((state) => ({
    updateName: state.updateName,
    updateEmail: state.updateEmail,
  }));

  const provider = new GoogleAuthProvider();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        if (user) {
         updateName(user.displayName || '')
         updateEmail(user.email || '')
        }
      })
      .catch((error) => {
        error.code;
        error.message;
        error.customData.email;
        GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <Button width={"fit-content"} onClick={signIn} rounded={"full"}>
      <FcGoogle className="mr-3 text-xl" /> Google information
    </Button>
  );
}
