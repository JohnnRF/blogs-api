const {db} = require('../cnn')

const insertComent = async (req, res) =>{
    const {pub_id, aut_id, com_descripcion} = req.query;
    const response = await db.one(`INSERT INTO public.comentario(pub_id, aut_id, com_descripcion) VALUES ($1, $2, $3) returning *;`,[pub_id,aut_id,com_descripcion]);

    res.json(response);
}

const updateComent = async (req, res) => {
    const {com_descripcion, com_id} = req.query;
    const response = await db.one(`UPDATE public.comentario
	                                SET  com_descripcion=$1
	                                WHERE com_id=$2 returning *;`, [com_descripcion,com_id]);
    res.json(response);
 }

 const insertAutor = async (req, res) =>{
    const {aut_usuario, aut_nombre} = req.body;
    const response = await db.one(`INSERT INTO public.autor(aut_usuario, aut_nombre) VALUES ($1, $2) returning *;`, [aut_usuario, aut_nombre]);
    
    res.json(response);
 }

 const getAutors = async (req, res) => {
    const response = await db.any(`SELECT * FROM autor;`)
    res.json(response);

}

const getAutorsById = async (req, res) => {
    const id=req.params.id;
    const response = await db.any(`SELECT * FROM autor WHERE aut_id=$1`, [id])
    res.json(response);

}

const UpdateAutor = async (req, resp) =>{
    const {aut_usuario, aut_nombre, aut_id} = req.body;
    const response = await db.query(`UPDATE public.autor SET aut_usuario=$1, aut_nombre=$2 WHERE aut_id = $3`, [aut_usuario, aut_nombre, aut_id]);

    resp.json(response);
}

const deleteAutor = async (req, resp) => {
    const aut_id= req.params.id;
    const response = await db.query(`DELETE FROM public.autor
	WHERE aut_id=$1`, [aut_id]);

    resp.json(response);
}

const getAutorsAndPublications = async (req, res) => {
    //const id=req.params.id;
    const response = await db.query(`SELECT a.aut_usuario, a.aut_nombre, p.pub_titulo, p.pub_descripcion
	                                    FROM public.publicacion p, public.autor a WHERE p.aut_id=a.aut_id;`);
    res.json(response);
}

const getAutorsAndPublicationsById = async (req, res) => {
    const pub_id=req.params.id;
    const response = await db.query(`SELECT p.pub_id, p.pub_titulo, a.aut_usuario, c.com_descripcion
	                                    FROM public.publicacion p, public.autor a, public.comentario c 
	                                    WHERE c.aut_id = a.aut_id and c.pub_id = p.pub_id and p.pub_id =$1::int;`,[pub_id]);
    res.json(response);
}



module.exports = {
    insertComent,
    updateComent,
    insertAutor,
    getAutors,
    UpdateAutor,
    deleteAutor,
    getAutorsAndPublications,
    getAutorsAndPublicationsById,
    getAutorsById
}