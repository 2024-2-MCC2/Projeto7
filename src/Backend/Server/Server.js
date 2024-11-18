// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Configuração do Express
const app = express();
const port = 5000;

// Configuração do middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/formulario', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch(err => {
  console.log('Erro ao conectar ao MongoDB', err);
});

// Definir o esquema do banco de dados
const contatoSchema = new mongoose.Schema({
  nome: String,
  email: String,
  telefone: String,
  mensagem: String,
});

const Contato = mongoose.model('Contato', contatoSchema);

// Rota para salvar o formulário
app.post('/enviar-contato', async (req, res) => {
  const { nome, email, telefone, mensagem } = req.body;

  const novoContato = new Contato({
    nome,
    email,
    telefone,
    mensagem,
  });

  try {
    await novoContato.save();
    res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao salvar a mensagem' });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
