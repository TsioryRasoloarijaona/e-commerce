

export async function getData<T>(url : string) : Promise<T>{
    const res = await fetch(url,{cache : 'no-store'})
    if(!res.ok){
        throw new Error("failed to fetch data");
    }

    const data : T =await res.json()
    return data;
}