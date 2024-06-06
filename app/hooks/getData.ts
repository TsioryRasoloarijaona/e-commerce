

export async function getData<T>(url : string , tag : string ) : Promise<T>{
    const res = await fetch(url, {next : {tags : [tag]} , cache : 'no-cache'})
    if(!res.ok){
        throw new Error("failed to fetch data");
    }

    const data : T =await res.json()
    return data;
}