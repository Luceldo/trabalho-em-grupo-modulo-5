const express = require('express'); //Importação do framework express usado para criar servidores web HTTP.
const router = express.Router(); // Atribuição da função gerenciadora/manipuladora de rotas do express. Ela serve para criar rotas de forma modularizada, assim podemos exportar e manipular nossas rotas no index, por exemplo.
const AutenticacaoController = require('../controllers/AutenticacaoController'); // Importação do nosso arquivo controlador para fazer a ligação entre as solicitações das nossas rotas e a exibição das nossas views para o usuário.


//Criação das rotas para manipular nossas views.
router.get('/entrar', AutenticacaoController.entrar); // Rota para pedir ao nosso arquivo "AutenticacaoController.js" para pegar a página de login criada no views e mostrar ao usuário.
router.post('/entrar', AutenticacaoController.entrarPost); // Rota para pedir ao nosso arquivo "AutenticacaoController.js" para obter os dados do formulário da página de login. 
router.get('/cadastrar', AutenticacaoController.cadastrar); // Rota para pedir ao nosso arquivo "AutenticacaoController.js" para pegar a página de cadastro criada no views e mostrar ao usuário.
router.post('/cadastrar', AutenticacaoController.cadastrarPost); // Rota para pedir ao nosso arquivo "AutenticacaoController.js" para obter os dados do formulário da página de cadastro.
router.get('/sair', AutenticacaoController.sair); // Rota para pedir ao nosso arquivo "AutenticacaoController.js" para deslogar o usuário.


module.exports = router;// Exportação das rotas criadas. 