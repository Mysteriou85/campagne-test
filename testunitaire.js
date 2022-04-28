
let panier = [];

function createProduit(nom, prix, poids, couleur, taille) {
    let produit = { nom: nom, prix: prix, poids: poids, couleur: couleur, taille: taille }

    return produit;
}

function ajoutPanier(produit, quantite) {
    panier.push({ produit: produit, quantite: quantite })
    //doit ajouté 'if' pour vérifier si le produit exite déjà et fusionné avec produit identique
}

let tshirt = createProduit('T-shirt', 10, 0.5, 'rouge', 'M');
ajoutPanier(tshirt, 1);

let pull = createProduit('Pull', 15, 1, 'violet', 'XL');
ajoutPanier(pull, 2);

console.log(panier);

//panier = [{produit: produit, quantité: 2}];