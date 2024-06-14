'use server'
import { Alert } from "@chakra-ui/react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export interface Admin {
    username: FormDataEntryValue | null;
    password: FormDataEntryValue | null;
  } 
 
 async function PostAdmin<T>(url: string, body: T): Promise<string>  {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data : Promise<string> = response.text()

  return data ;

}

export async function Login (formData : FormData) {
   
    const admin : Admin = {
        username : formData.get("username"),
        password : formData.get("password")
    }
    const response: string = await PostAdmin("https://e-car.onrender.com/token", admin);
    if(response !== ''){
      const expires = Date.now() + 3600 * 1000
      cookies().set('session' , response , {expires})
      redirect('/Admin/dashboard/main')
    }else{
       redirect('Admin/auth/login')
    }

}


 

  
