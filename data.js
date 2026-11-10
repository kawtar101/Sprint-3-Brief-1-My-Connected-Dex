// =============================================================
// data.js — les créatures de VOTRE univers
// =============================================================
// TODO : remplissez ce tableau avec au moins 12 créatures
// (Pokémon, Digimon ou Yu-Gi-Oh!), en respectant ce format :
//
// {
//   id: "#001",                                   // "#" suivi de 3 chiffres
//   name: "Exemple",                              // texte
//   type: "Feu",                                  // une valeur d'une liste fixe
//   level: "Base",                                // texte
//   stats: { hp: 45, attack: 49, defence: 49 },   // 3 nombres de 0 à 999
//   image: "https://example.com/001.png",         // lien https vers une image
//   description: "Une courte description."        // 10 à 200 caractères
// }
//
// Pensez à citer la source de vos images dans le README.
 export const creatures = [
    {
        id: "#001",
        name: "Bulbizarre",
        type: "Plante",
        level: "Base",
        stats: { hp: 45, attack: 49, defence: 49 },
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        description: "Bulbizarre porte une graine sur son dos, qui grandit avec lui grâce à l'énergie qu'il reçoit."
    },
    {
        id: "#004",
        name: "Salamèche",
        type: "Feu",
        level: "Base",
        stats: { hp: 39, attack: 52, defence: 43 },
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        description: "Salamèche est un Pokémon de type Feu dont la flamme au bout de la queue reflète son énergie."
    },
    {
        id: "#007",
        name: "Carapuce",
        type: "Eau",
        level: "Base",
        stats: { hp: 44, attack: 48, defence: 65 },
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        description: "Carapuce se protège avec sa carapace et peut projeter de puissants jets d'eau."
    },
    {
        id: "#025",
        name: "Pikachu",
        type: "Électrik",
        level: "Base",
        stats: { hp: 35, attack: 55, defence: 40 },
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        description: "Pikachu stocke de l'électricité dans ses joues et peut envoyer des décharges électriques."
    },
    {
        id: "#037",
        name: "Goupix",
        type: "Feu",
        level: "Base",
        stats: { hp: 38, attack: 41, defence: 40 },
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
        description: "Goupix naît avec une queue blanche qui se divise en plusieurs queues en grandissant."
    },
    {
        id: "#043",
        name: "Mystherbe",
        type: "Plante",
        level: "Base",
        stats: { hp: 45, attack: 50, defence: 55 },
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
        description: "Mystherbe sort surtout la nuit et utilise ses feuilles pour absorber la lumière de la lune."
    },
    {
        id: "#054",
        name: "Psykokwak",
        type: "Eau",
        level: "Base",
        stats: { hp: 50, attack: 52, defence: 48 },
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
        description: "Psykokwak souffre souvent de maux de tête qui peuvent déclencher ses pouvoirs psychiques."
    },
    {
        id: "#058",
        name: "Caninos",
        type: "Feu",
        level: "Base",
        stats: { hp: 55, attack: 70, defence: 45 },
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
        description: "Caninos est loyal et courageux ; il utilise son odorat développé pour reconnaître les odeurs."
    },
    {
        id: "#039",
        name: "Rondoudou",
        type: "Fée",
        level: "Base",
        stats: { hp: 115, attack: 45, defence: 20 },
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
        description: "Rondoudou chante une mélodie douce qui peut endormir les personnes et les autres Pokémon."
    },
    {
        id: "#131",
        name: "Lokhlass",
        type: "Eau",
        level: "Base",
        stats: { hp: 130, attack: 85, defence: 80 },
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
        description: "Lokhlass est un Pokémon calme qui transporte volontiers les voyageurs sur l'eau."
    },
    {
        id: "#144",
        name: "Artikodin",
        type: "Glace",
        level: "Légendaire",
        stats: { hp: 90, attack: 85, defence: 100 },
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
        description: "Artikodin est un Pokémon légendaire associé au froid et aux vents glacés."
    },
    {
        id: "#197",
        name: "Noctali",
        type: "Ténèbres",
        level: "Évolution",
        stats: { hp: 95, attack: 65, defence: 110 },
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
        description: "Noctali se protège grâce à ses anneaux lumineux et se montre particulièrement actif la nuit."
    }
];

