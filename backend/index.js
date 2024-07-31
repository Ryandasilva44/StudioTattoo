const express = require("express");
const cors = require("cors");

const userRoutes = require("./router/users");

const app = express();
const port = process.env.PORT || 3001;

// mongoose.connect("mongodb://localhost/27017", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

app.use(cors());

app.use(express.json());

app.use("/api/registers", userRoutes);

app.get('/', (req, res) =>{
  res.send('Bem-vind à API')
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
