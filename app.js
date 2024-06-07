const { json, urlencoded } = require('express');
const cors = require('cors');
const express = require('express');
const dbconnect = require('./config');
const ModelUser = require('./usermodel');


const app = express();
const router = express.Router();

app.disable("x-powered-by");

app.use(
  cors()
);
app.options("*", cors());
app.use(json());
app.use(urlencoded({ extended: true }));


router.post("/api", async (req, res) => {
    console.log(req.body);
    const { nombre, edad, email, opinion } = req.body;

    const newOp = new ModelUser({
        nombre,
        edad,
        email,
        opinion
    });

    try {
        await newOp.save();
        res.status(201).json(newOp);
    } catch (error) {
        res.status(500).json({ message: 'Error al guardar', error });
    }
})
router.get("/", async (req, res)=> {
    const respuesta = await ModelUser.find({})
    res.send(respuesta)
})

router.get("/:id", async (req, res) =>{
    const id = req.params.id;
    const respuesta = await ModelUser.findById(id)
    res.send(respuesta);
})

//Actualizar
router.put("/:id", async (req, res) =>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findOneAndUpdate({_id:id}, body)
    res.send(respuesta);
})
//Delete
router.delete("/:id", async (req, res) =>{
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id:id})
    res.send(respuesta);
}) 

app.use(express.json())
app.use(router)
app.listen(3001,() => {
    console.log("El servidor está en el puerto 3001");
})
dbconnect();