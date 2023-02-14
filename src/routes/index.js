const {Router} = require('express');
const { insertComent, updateComent, getAutors, getAutorsAndPublications, getAutorsAndPublicationsById, UpdateAutor, insertAutor, deleteAutor, getAutorsById } = require('../../controllers/blog-controller');
const router = Router();

//router.post('/blog',insertComent);
//router.put('/blog',updateComent);
router.post('/blog',insertAutor)
router.get('/blog',getAutors);
router.get('/blog/:id',getAutorsById);
router.put('/blog', UpdateAutor);
router.delete('/blog/:id', deleteAutor);
router.get('/blog/publicaciones',getAutorsAndPublications);
router.get('/blog/publicaciones/id/:id',getAutorsAndPublicationsById);

module.exports = router; 