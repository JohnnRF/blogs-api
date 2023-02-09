const {Router} = require('express');
const { insertComent, updateComent, getAutors, getAutorsAndPublications, getAutorsAndPublicationsById, UpdateAutor, insertAutor, deleteAutor } = require('../../controllers/blog-controller');
const router = Router();

//router.post('/blog',insertComent);
//router.put('/blog',updateComent);
router.post('/blog',insertAutor)
router.get('/blog',getAutors);
router.put('/blog', UpdateAutor);
router.delete('/blog', deleteAutor);
router.get('/blog/publicaciones',getAutorsAndPublications);
router.get('/blog/publicaciones/id/:id',getAutorsAndPublicationsById);

module.exports = router; 