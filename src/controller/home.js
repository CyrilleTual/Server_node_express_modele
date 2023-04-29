// on creer le controller qui va gerer la 
// route vers la homepage

export const homeView =(req, res) => {
    // ici préparation du contenu de la reponse

    // puis la réponse est envoyée
    // -> .send peut transmettre du json au front
    // par un fetch pour traitement par React par exemple
    // -> .render peut transmettre un contenu à un layout  etc....
    // si utilisation de ejs par exemple.
    res. status(200)
        // ici on renvoit juste un texte brut au client
        .send( " ici la homepage")
}