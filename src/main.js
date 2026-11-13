import { getData , Loaddata, saveData} from "./services/api.js";
import{displayCreatures,filterCreatures} from "./ui.js"

let creatures = [];
let selectedType = "Tous";
let offset = 0;

async function init(){
 const savedCREATURES = Loaddata();
if(savedCREATURES && saveData.length > 0 ){
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
//if the request  fails the offset doesnt increase so you can retry the same page