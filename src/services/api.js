async function getData(){
    const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    const response = await fetch(url)
    if(!response.ok)
    {
        throw new Error (`Response status ${response.status}`)
    }
    const data = await response.json()
    let promises =[]
     for(const  obj of data.results )
    {
        const res = await fetch(obj.url)
       if(!res.ok)
    {
        throw new Error (`Response status ${response.status}`)
    }
    promises.push(res.json()) 
    }
   const Data = await Promise.all(promises)
 
}