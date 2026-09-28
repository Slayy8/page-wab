function Valider() {
    var compteur=0; //Déclarations des variables
    var r1 = document.getElementById('q1').value; //récupère la valeur par son id
    var r2 = document.querySelector('input[name=q2]:checked').value; //récupère la valeur du bouton radio validé
    var r3 = document.querySelector('input[name=q3]:checked').value;
    var r4 = document.querySelector('input[name=q4]:checked').value;
    var r5 = document.getElementById('q5').value;
    if (r1=='2026') 
        compteur++; //Test des réponses et comptage des points
    if (r2=='a') 
        compteur++;
    if (r3=='c') 
        compteur++;
    if (r4=="b")
        compteur++;
    if (r5=="septembre")
        compteur++;
    document.getElementById('resultats').innerHTML="Vous avez "+compteur+" bonne(s) réponse(s) sur 5";
    Reponse()
}
function Reponse() {
    document.getElementById('reponses').innerHTML="2026; Dive; Nicoleau; Pile; septembre";
}