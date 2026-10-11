let fini = "False";
function Valider() {
    let compteur=0;
    let r1 = document.querySelector('input[name=q1]:checked').value;
    let r2 = document.querySelector('input[name=q2]:checked').value;
    let r3 = document.querySelector('input[name=q3]:checked').value;
    let r4 = document.querySelector('input[name=q4]:checked').value;
    let r5 = document.querySelector('input[name=q5]:checked').value;
    let r6 = document.querySelector('input[name=q6]:checked').value;
    let r7 = document.querySelector('input[name=q7]:checked').value;
    let r8 = document.querySelector('input[name=q8]:checked').value;
    let r9 = document.querySelector('input[name=q9]:checked').value;
    let r10 = document.querySelector('input[name=q10]:checked').value;
    if (r1=='a') {
        compteur++;} 
    if (r2=='b') {
        compteur++;}
    if (r3=='c') {
        compteur++;}
    if (r4=="b") {
        compteur++;}
    if (r5=="a") {
        compteur++;}
    if (r6=="c") {
        compteur++;}
    if (r7=="a") {
        compteur++;}
    if (r8=="c") {
        compteur++;}
    if (r9=="a") {
        compteur++;}
    if (r10=="c") {
        compteur++;}
    document.getElementById('resultat').innerHTML="Vous avez "+compteur+" bonne(s) réponse(s) sur 10";
    fini = "True";
}