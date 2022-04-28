
let panier = [];

export function createarticle(nom, prix, poids, couleur, taille) {
    let article = { id: `${nom}_${taille}_${couleur}`, nom: nom, prix: prix, poids: poids, couleur: couleur, taille: taille }

    return article;
}

export function ajoutPanier(produit, quantite) {
    panier.push({ produit: produit, quantite: quantite })
    //A FAIRE : doit ajouté 'if' pour vérifier si le produit exite déjà et fusionné avec produit identique
    // console.log(panier.includes(produit));

    // const sameVerif = article.id;

    // if (sameVerif = article.id) {
    //     console.log('=====> ça passe ici')
    // }
}

export function prixTotal(panier) {
    let totalPrix = 0;
    let totalPrixTCC = 0;

    console.log(panier);

    panier.forEach(article => {
        //calcul prix article * quantité
        totalPrix += article.produit.prix * article.quantite
        //calcul frais de port
        totalPrix = totalPrix * (article.produit.poids * 1.2)
    })
    //ajout TVA 20%
    totalPrixTCC= totalPrix * 1.2;
    console.log(`Prix total : ${totalPrixTCC}`)
}

let tshirt = createarticle('T-shirt', 10, 0.5, 'rouge', 'M');
ajoutPanier(tshirt, 1);

let pull = createarticle('Pull', 15, 1, 'violet', 'XL');
ajoutPanier(pull, 2);

prixTotal(panier)

//console.log(panier);

