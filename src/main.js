import { getData , Loaddata, saveData,searchCreature } from "./services/api.js";
import{displayCreatures,filterCreatures} from "./ui.js"

let creatures = [];
let selectedType = "Tous";
let offset = 0;
searchCreature("pika")
async function init(){
 const savedCREATURES = Loaddata();
if(savedCREATURES && savedCREATURES.length > 0 ){
    creatures = savedCREATURES
    offset  = creatures.length
}
else {
    creatures = await getData(0)
    offset = 20
    saveData(creatures)
}
 displayCreatures(creatures)
}
init()
    

// filter search

const filters = document.getElementById("filters");


filters.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        selectedType = event.target.dataset.type;
        filterCreatures(creatures,selectedType);
    }
});

const loadMoreBtn = document.getElementById("load-more")
loadMoreBtn.addEventListener("click",async function(){
    loadMoreBtn.disabled = true;
    try{
        //fetches the next 20 pokemon
        const newCreatures = await getData(offset)
        //combines the old pokemon with the new pokemon
        creatures = creatures.concat(newCreatures)
        offset += 20
        saveData(creatures)
        filterCreatures(creatures,selectedType)
    }catch(error){
        console.error(error)
    }finally{
    loadMoreBtn.disabled = false
    }
})
//  ^^^^if the request  fails the offset doesnt increase so you can retry the same page^^
const searchinputc= document.getElementById("search-input")

searchinputc.addEventListener("keydown",async function(event){
    if (event.key ==="Enter"){
          console.log("ENTER PRESSED");
        const name = searchinputc.value
try{
    //requests the pokemon from the api
    const creature = await searchCreature(name)
    //we do [creature ] instead of creature bcz displaycreture expects an array even if that array contains only one pokemon
    displayCreatures([creature])
}
catch(error){
    console.error(error)
    alert("pokemon not found")
}
    }
})
