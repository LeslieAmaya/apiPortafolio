const mongoose = require('mongoose');
const dbconnect = () => {
  mongoose.set('strictQuery', true)
  mongoose.connect("mongodb+srv://UsuarioPrueba:UsuarioPrueba@miprimercluster.rix6jne.mongodb.net/PortafolioWeb", {}, (err, res) => {
    if (!err) {
      console.log("Conexión correcta")
    }
    else {
      console.log("Error de conexión");
    }
  })
}


/* async function dbconnect() {
    try {
      await mongoose.connect('mongodb://localhost:27017/ContactosOpiniones', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Conectado a la base de datos');
    } catch (err) {
      console.error('Error al conectar a la base de datos', err);
    }
 } */

module.exports = dbconnect;