const express = require('express');
const router = express.Router();
const posts = require('../postsData');




/// REST api REpresentational state Transfere (da cercare e di base come si scrivono gli api)




// operazioni di lettura e utilizziamo GET
// INDEX operazione dove leggiamo tutti i dati ---> read
router.get('/', (req, res) => {
    res.json({
        conteggio: posts.length,
        posts: posts,
        images: posts.map(post => post.immagine)
    });
});
// SHOW operazione di lettura di un solo elemento ---> read

router.get('/:id', (req, res) => {
    const postsId = req.params.id; // Manteniamo l'ID come stringa
    const resultPost = posts.find(post => String(post.id) === postsId);

    if (!resultPost) {
        return res.status(404).json({ errore: "Post non trovato" });
    }

    res.json({ resultPost });
});


// create =>aggiornare i dati con un nuovo elemento // utilliziamo POST
router.post("/", (req, res) => {
    res.json("creaiamo un nuovo post")
})



// aggiornare un elemento esistente ---> update // utilizziamo PUT o PATCH (aggiorna un singolo elemento)

// UPDATE
router.put("/:id", (req, res) => {

    res.json("aggiunge i dati di uno specifico elemento")
})


// modify
router.patch("/:id", (req, res) => {
    res.json("modifichiamo solo elementi selezionati")
})



// rimuovere un elemento ---> delete // utilizziamo DELETE
// remove
router.delete("/:id", (req, res) => {
    res.json("eliminiamo un elemento")
})

// app.delete("/bacheca/:id", (req, res) =>{})








module.exports = router;
