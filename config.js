const mongoose = require('mongoose');
const dbconnect = () => {
  mongoose.set('strictQuery', true)
  mongoose.connect("mongodb://127.0.0.1:27017/PortafolioWeb", {}, (err, res) => {
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