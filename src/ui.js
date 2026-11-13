
 // =============================================================
// script.js — Mon Dex
// =============================================================
// Les données viennent de data.js (la constante `creatures`).
// Écrivez votre code ici, fonctionnalité par fonctionnalité.
// Une carte GitHub Projects et au moins un commit par fonctionnalité.


// -------------------------------------------------------------
// 1. AFFICHAGE
// Supprimez les cartes écrites à la main dans index.html et
// construisez la grille à partir du tableau `creatures`.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 2. DÉTAIL
// Un clic sur une carte ouvre le panneau de détail :
// image, description, et statistiques affichées en barres.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 3. RECHERCHE
// La liste se met à jour pendant la saisie d'un nom
// (sans tenir compte des majuscules).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 4. FILTRE
// Les boutons de type n'affichent que les créatures de ce type ;
// « Tous » réinitialise le filtre.
// La recherche et le filtre fonctionnent ENSEMBLE.
// -------------------------------------------------------------


// -------------------------------------------------------------
// BONUS : LocalStorage, Fetch API, tri, comparaison
// -------------------------------------------------------------

const grid = document.getElementById("grid");
const searchInput = document.getElementById("search-input");
let selectedType = "Tous";
export function displayCreatures(list) {
    const grid = document.getElementById("grid");
    let i = 0;
    let cards = "";
    while (i < list.length) {
        const creature = list[i];
        const total =
            creature.stats.hp +
            creature.stats.attack +
            creature.stats.defence;
 cards += `
        <article
  data-creature-id="${creature.id}"
     class="flex flex-col gap-3 rounded-card bg-white p-3 pb-4 cursor-pointer">
     <div class="relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
     <img src="${creature.image}"   alt="${creature.name}"
         class="h-28 w-28 object-contain">
            <span class="absolute left-3 top-2 font-mono text-sm text-muted">
     ${creature.id}
      </span>
      </div>
       <div class="flex items-center justify-between gap-2">
     <h3 class="font-display text-xl font-semibold">
      ${creature.name}
       </h3>
        <span class="rounded-full bg-brand-light px-3 py-1 text-sm font-bold text-ink">
         ${creature.type}
       </span>
     </div>
     <p class="text-sm text-muted">
      Niveau ${creature.level} · Total ${total}
     </p>
   </article>       `;
        i++;
    }
    grid.innerHTML = cards;
}
// Search and type filter
export function filterCreatures(creatures,selectedType) {
    let i = 0;
    //empty array for storing that match the search
    let results = [];
    // checking every creature
    while (i < creatures.length) {
        const creature = creatures[i];
        if (
            (selectedType === "Tous" || creature.type === selectedType)
        ) {
            results.push(creature);
        }
        i++;
    }
    displayCreatures(results);
}






// Get the details panel elements
//We select all these elements because we need to  update them when someone clicks a creature.
export function setupDetails(creatures) {
        const detailImage = document.getElementById("detail-image");
    const detailName = document.getElementById("detail-name");
const detailType = document.getElementById("detail-type");
        const detailDescription = document.getElementById("detail-description");

        const detailHp = document.getElementById("detail-hp");
    const detailAttack = document.getElementById("detail-attack");
        const detailDefence = document.getElementById("detail-defence");

    const detailHpBar = document.getElementById("detail-hp-bar");
    const detailAttackBar = document.getElementById("detail-attack-bar");
const detailDefenceBar = document.getElementById("detail-defence-bar");

// Cherche une créature dans le tableau à partir de son id
 function findCreature(creatures,id) {
    let j = 0;
    while (j < creatures.length) {
        if (creatures[j].id === id) {
            return creatures[j];
        }
        j++;
    }
    return null;
}
// Listen for clicks inside the grid
grid.addEventListener("click", function(event) {

    // Find the card that was clicked
    const card = event.target.closest("article");

    // If the click was not inside a card, stop
    if (card === null) {
        return;
    }

    // Get the creature ID from the card
    const creatureId = card.dataset.creatureId;

    // Find the creature in the array
    const selectedCreature = findCreature(creatures,creatureId);

    // Stop if the creature was not found
    if (selectedCreature === null) {
        return;
    }

    // Update the image and text
    detailImage.src = selectedCreature.image;    
        detailImage.alt = selectedCreature.name;

  detailName.textContent = selectedCreature.name;
         detailType.textContent = selectedCreature.type;
    detailDescription.textContent = selectedCreature.description;

    // Update the stat numbers
    detailHp.textContent = selectedCreature.stats.hp;
       detailAttack.textContent = selectedCreature.stats.attack;
            detailDefence.textContent = selectedCreature.stats.defence;

    // Update the stat bars
    detailHpBar.style.width =Math.min(selectedCreature.stats.hp, 200) / 200 * 100 + "%";
        detailAttackBar.style.width =Math.min(selectedCreature.stats.attack, 200) / 200 * 100 + "%";
      detailDefenceBar.style.width = Math.min(selectedCreature.stats.defence, 200) / 200 * 100 + "%";

});

 } 