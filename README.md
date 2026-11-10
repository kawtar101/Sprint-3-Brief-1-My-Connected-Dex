# Mon Dex — Encyclopédie interactive Pokémon

## Univers choisi

**Pokémon** : des créatures avec des types, des stades d'évolution et des statistiques (PV, Attaque, Défense).

## Démo en ligne

🔗 [Voir le Dex sur GitHub Pages](https://[ton-pseudo].github.io/[nom-du-repo]/)

## Description

Projet réalisé dans le cadre de la formation Développeur web et web mobile (Sprint 2 — Brief 1).
Une page Tailwind statique a été transformée en encyclopédie interactive, utilisable sur ordinateur et sur téléphone.

## Fonctionnalités

- **Affichage** : la grille de cartes est générée en JavaScript à partir du tableau `creatures` (`data.js`).
- **Détail** : un clic sur une carte affiche l'image, la description et les statistiques en barres.
- **Recherche** : la liste se met à jour pendant la saisie, sans tenir compte des majuscules.
- **Filtre par type** : les boutons filtrent la grille, « Tous » réinitialise. La recherche et le filtre fonctionnent ensemble.
- **Créer une créature** : formulaire validé par expressions régulières, avec message d'erreur sous chaque champ.
- **Mon équipe** : boutons « Ajouter à l'équipe » et « Retirer », gérés par délégation d'événements.
- **Règles de l'équipe** : 6 créatures maximum, pas de doublon, messages clairs et compteur (x/6).

## Technologies

- HTML5
- Tailwind CSS
- JavaScript (modules ES6)

## Lancer le projet en local

```bash
# 1. Cloner le dépôt
git clone https://github.com/[ton-pseudo]/[nom-du-repo].git
cd [nom-du-repo]

# 2. Installer les dépendances
npm install

# 3. Générer le CSS Tailwind
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

Ouvre ensuite `index.html` avec **Live Server** (VS Code). Un double-clic sur le fichier ne fonctionne pas, car le projet utilise `import` (modules JavaScript).

## Structure du projet

```
.
├── index.html
├── script.js
├── data.js
├── tailwind.config.js
├── src/
│   └── input.css
├── dist/
│   └── output.css
└── README.md
```

## Sources des images

Les images des Pokémon viennent de la base de données publique :
[PokeAPI Sprites](https://github.com/PokeAPI/sprites)

## Validation du formulaire : tests des expressions régulières

Chaque champ est vérifié avec une expression régulière. Le message s'affiche sous le champ quand l'utilisateur le quitte, et le formulaire n'est pas envoyé tant qu'un champ est invalide.

| Champ | Expression régulière | Exemples valides | Exemples invalides |
| --- | --- | --- | --- |
| Numéro | `/^#\d{3}$/` | `#001`, `#150` | `001`, `#12` |
| Nom | `/^[A-Za-zÀ-ÿ '-]{2,30}$/` | `Pikachu`, `Mime Jr` | `A`, `Pika123` |
| Type | `/^(Feu\|Eau\|Plante\|Électrik\|Glace\|Ténèbres\|Fée)$/` | `Feu`, `Fée` | `Roche`, `feu` |
| Niveau | `/^[A-Za-zÀ-ÿ0-9 ]{2,30}$/` | `Base`, `Niveau 1` | `A`, `Base!` |
| Statistique | `/^\d{1,3}$/` | `45`, `999` | `1000`, `abc` |
| Image | `/^https:\/\/\S+$/` | `https://site.com/a.png` | `http://site.com/a.png`, `image.png` |
| Description | `/^[\s\S]{10,200}$/` | `Une courte description.` | `Trop court` (moins de 10 caractères) |

## Gestion de projet

- Dépôt GitHub avec des commits réguliers et des messages clairs.
- Tableau GitHub Projects : [lien vers ton tableau](https://github.com/users/[ton-pseudo]/projects/[numero])

## Auteur

**[Kawtar Asrarfi]** — Formation Développeur web et web mobile.