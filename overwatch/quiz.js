// Bonnes réponses : une lettre par question (q1 à q10)
const bonnesReponses = {
    q1: "a",
    q2: "b",
    q3: "c",
    q4: "b",
    q5: "a",
    q6: "c",
    q7: "a",
    q8: "c",
    q9: "a",
    q10: "c"
};

const bouton = document.getElementById("valider");
const resultat = document.getElementById("resultat");

// Calcule le score quand on clique sur le bouton
function corriger() {
    let score = 0;
    let repondues = 0;
    const total = Object.keys(bonnesReponses).length;

    // On parcourt chaque question
    for (const question in bonnesReponses) {
        // On cherche le bouton radio coché pour cette question
        const choix = document.querySelector('input[name="' + question + '"]:checked');

        if (choix !== null) {
            repondues++;
            if (choix.value === bonnesReponses[question]) {
                score++;
            }
        }
    }

    // On vérifie que tout est rempli avant d'afficher le score
    if (repondues < total) {
        resultat.textContent = "Il reste " + (total - repondues) + " question(s) sans réponse.";
        return;
    }

    resultat.textContent = "Votre score : " + score + " / " + total;
}

bouton.addEventListener("click", corriger);
