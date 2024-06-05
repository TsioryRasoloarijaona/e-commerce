import { message } from "../interface/message";

export async function postData <T>(url : string , body : T) : Promise<message>{
    const response = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })

    const data : Promise<message> = response.json()

    return data;

    
}