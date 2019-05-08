const express = require('express');
const app = express();
const Joi = require('joi')

app.use(express.json());
app.listen(3000, () => console.log("Listening to 3000"));

const genres = [
    { id: 1, genreType: 'action' },
    { id: 2, genreType: 'romance' },
    { id: 3, genreType: 'comedy' },
];

//Commit test11
//Rest end point

//testing 
app.get('/', (req, res) => res.send("Testing all ok!!!"));

//getAll
app.get('/api/getAll', (req, res) => res.send(genres));

//getById
app.get('/api/get/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));

    if (!genre)
        return res.status(404).send("No genre wrt to specific id");

    return res.send(genre);
});


//create a genre
app.put('/api/create', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.body.id));

    if (genre)
        return res.status(404).send("Genre with specific id already present");

    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    //fill the object

    console.log(req.body.id + " " + req.body.genreType);

    const newGenre = {
        id: req.body.id,
        genreType: req.body.genreType
    };

    genres.push(newGenre);
    return res.send(newGenre);
});


// update a genre
app.post('/api/update', (req, res) => {
    var genre = genres.find(c => c.id === parseInt(req.body.id));

    if (!genre)
        return res.status(404).send("No genre wrt to specific id");

    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //updating the genreType 
    genre.genreType = req.body.genreType;
    return res.send(genre);
});

//DeleteById
app.delete('/api/delete/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));

    if (!genre)
        return res.status(404).send("No genre wrt to specific id");

    let index = genres.indexOf(genre);
    genres.splice(index);
    return res.send(genre);
});




function validateGenre(genre) {
    const schema = {
        id: Joi.number().positive(),
        genreType: Joi.string().min(3).required()
    };
    return Joi.validate(genre, schema);
}