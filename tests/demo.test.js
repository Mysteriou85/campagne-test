import should from 'should';
import { createarticle } from "../testunitaire.js";
import { ajoutPanier } from "../testunitaire.js";
import { prixTotal } from "../testunitaire.js";

describe("===> Voir si cela créé un article",
    function() {
        it("Devrait afficher l'article créé",
    function() {
        debugger
        let vetTest = createarticle('V-test', 10, 0.5, 'rouge', 'M');
        console.log(vetTest);
    });
});

describe("===> ...",
    function() {
        it("Cela devrai ajouté l'article au panier",
    function() {
        debugger
        let panier = [];
        let vetTest = createarticle('V-test', 10, 0.5, 'rouge', 'M');
        ajoutPanier(vetTest, 1);
        console.log(panier);
    });
});

describe("===> ...",
    function() {
        it("Cela devrait calculé le prix total",
    function() {
        debugger
        //let panier = [];
        let vetTest = createarticle('V-test', 10, 0.5, 'rouge', 'M');
        ajoutPanier(vetTest, 1);
        prixTotal(panier)
    });
});