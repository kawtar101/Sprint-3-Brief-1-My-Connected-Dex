export async function getData(offset = 0){
    const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
    const response = await fetch(url)
   
    if(!response.ok)
    {
        throw new Error (`Response status ${response.status}`)
    }
    const data = await response.json()
    //it transformrs the list of 20 URLS into a list of 20 promises
    const promises =data.results.map(async(pokemon) => {
const res = await fetch(pokemon.url)
 if(!res.ok)
    {
        throw new Error (`Response status ${res.status}`)
    }
return res.json()
    })

    // let promises =[]
    //  for(const  obj of data.results )
    // {
    //     const res = await fetch(obj.url)
    //    if(!res.ok)
    // {
    //     throw new Error (`Response status ${res.status}`)
    // }
    // promises.push(res.json()) 
    // }
   const Data = await Promise.all(promises) 
   //it trasformes the 20 detailed API objects into 20 simple objects 
   const transformdata =Data.map(object => transformobj(object))
//    localStorage.setItem("pokemonAPI",JSON.stringify(transformdata))
//    console.log(transformdata)
   return transformdata

}

function transformobj(obj){
    return {
        id:obj.id,
        name:obj.name,
        type: obj.types[0].type.name,
        // level:obj.base_experience,
        stats: {  hp: obj.stats[0].base_stat,
             attack: obj.stats[1].base_stat,
             defence: obj.stats[2].base_stat

          },
       
        image:obj.sprites.other["official-artwork"].front_default,
        // description: ""
    }
   
}
export function Loaddata()
{
    return JSON.parse(localStorage.getItem("pokemonAPI")) 
} 
export function saveData(creatures){
    localStorage.setItem("pokemonAPI",JSON.stringify(creatures))
}
export async function searchCreature(name){
    const url =`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase().trim()}`;
    const response = await fetch(url)
    if (!response.ok){
        throw new Error(`pokemon nt found : ${name}`)

    }
    const data = await response.json()
    //converts the API response into the object structure your project already uses
    console.log (data.map(obj=>transformobj(obj)))
}