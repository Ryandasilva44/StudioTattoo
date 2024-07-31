const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Todos os campos são obrigatório" });
    }

    console.log(`Usuário registrado: Nome=${name}, Email=${email}`);
    res.status(201).json({ message: "Usuário cadastrado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao cadastrar o usuário" });
  }
});

module.exports = router;
