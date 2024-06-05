const User = require("../usermodel");
exports.registerContact = async (req, res) => {
    
    const userData = req.body;
    const newContact = new User({
        nombre: userData.nombre,
        edad: userData.edad,
        email: userData.email,
        opinion: userData.opinion
    });
    await newContact
        .save()
        .then((data) => res.json(data)) //responde con los datos en caso de que se elimine
        .catch((error) => res.json({ message: error })); //nos devuelve el error en caso de que lo hubiera
};
