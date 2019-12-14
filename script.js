//On commence par déclarer les variables (long et chiant)
var personnes = ["Tiago", "Geoffrey", "Jonathan", "Joffrey", "Marco", "Hugo", "Timothy", "Jean", "Lena", "Steeve", "Soufiane", "Lloyd", "Samuel", "Amaury", "Luciano", "Stéphane", "Yassine B", "Kevin", "Pierre", "Esteban", "Angélique", "Najwa", "Corentin", "Christine", "Emmanuel", "Magali", "Yassine S", "Adam", "Cyrille"];
var personnesNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
var personnesPosistion = [
    [30, 100],
    [130, 100],
    [30, 240],
    [130, 240],
    [30, 320],
    [130, 320],
    [230, 320],
    [30, 460],
    [130, 460],
    [230, 460],
    [30, 540],
    [130, 540],
    [30, 680],
    [130, 680],
    [230, 610],
    [340, 210],
    [440, 210],
    [340, 350],
    [440, 350],
    [340, 430],
    [440, 430],
    [340, 570],
    [440, 570],
    [260, 500],
    [340, 650],
    [440, 650],
    [340, 790],
    [440, 790],
    [260, 720]
];
var tables = [
    [20, 20, 500, 900], //local
    [20, 120, 200, 100], //table 1 haut-gauche
    [20, 340, 250, 100], //table 2 milieu-gauche
    [20, 560, 200, 100], //table 3 bas-gauche
    [320, 230, 200, 100], //table 4 haut-droite
    [320, 450, 200, 100], //table 5 milieu-droite
    [320, 670, 200, 100] //table 6 bas-droite
];

//ajouter la fonction draw sur le bouton
document.getElementById("btn").addEventListener("click", draw);

//on apel notre fonction draw (youpie)
draw();


function draw() {
    var canvas = document.getElementById('local');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        //Dessiner un gros carré blanc (pour un éventuel reset)
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, 540, 940);
        //Dessiner les tables et le local
        for (var i = 0; i < tables.length; i++) {
            ctx.rect(tables[i][0], tables[i][1], tables[i][2], tables[i][3]);
        }
        //mettre les lignes en bleu et repasser 5 fois dessus a cause de cette put*** de transparence qui sort de null part
        ctx.strokeStyle = "#245060";
        for (var i = 0; i < 5; i++) {
            ctx.stroke();
        }
        //police de text, le serif c'est nul
        ctx.font = '12px sans-serif';
        //mélanger les numéros des personnes
        shuffleArray(personnesNum);
        //dessiner les noms des personnes
        ctx.fillStyle = "#000000";
        for (var i = 0; i < personnesNum.length; i++) {
            ctx.fillText(personnes[personnesNum[i]], personnesPosistion[i][0], personnesPosistion[i][1]);
        }
    }
}
//Fonction pour mélanger les arrays, merci à https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}