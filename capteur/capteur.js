let fini = "False";
function Valider() {
    let compteur=0; //Déclarations des variables
    let r1 = document.getElementById('q1').value; //récupère la valeur par son id
    let r2 = document.querySelector('input[name=q2]:checked').value; //récupère la valeur du bouton radio validé
    let r3 = document.querySelector('input[name=q3]:checked').value;
    let r4 = document.querySelector('input[name=q4]:checked').value;
    let r5 = document.getElementById('q5').value;
    if (r1=='1000' || r1=='1000 lux') {
        compteur++;} //Test des réponses et comptage des points
    if (r2=='a') {
        compteur++;}
    if (r3=='c') {
        compteur++;}
    if (r4=="a") {
        compteur++;}
    if (r5=="Grove" || r5=="grove") {
        compteur++;}
    document.getElementById('resultats').innerHTML="Vous avez "+compteur+" bonne(s) réponse(s) sur 5";
    fini = "True";
}
function Montrer() {
    if (fini=="True") {
        document.getElementById('reponses').innerHTML="1000 lux; 540 nm; 3;3 à 5 Vcc; 20 à 30ms; Grove"; } 
}