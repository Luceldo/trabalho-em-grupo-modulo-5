const express = require('express'); // Importação do framework express usado para criar servidores web HTTP.
const router = express.Router(); // Atribuição da função gerenciadora/manipuladora de rotas do express. Ela serve para criar rotas de forma modularizada, assim podemos exportar e manipular nossas rotas no index, por exemplo.
const NoticiasController = require('../controllers/NoticiasController'); // Importação do nosso arquivo controlador para fazer a ligação entre as solicitações das nossas rotas e a exibição das nossas views para o usuário.
const checkAuth = require('../helpers/autenticaUsuario').checkAuth; // Importação do noso módulo de checagem de autenticação do usuário.

//Criação das rotas para manipular nossas views.
router.get('/add', checkAuth, NoticiasController.criarNoticia);
router.post('/add', checkAuth, NoticiasController.criarNoticiaSalvar);
router.post('/remover', checkAuth, NoticiasController.removerNoticia);
router.get('/editar/:id', checkAuth, NoticiasController.atualizarNoticia);
router.post('/editar', checkAuth, NoticiasController.atualizarNoticiaPost);
router.get('/painel', checkAuth, NoticiasController.painel);
router.get('/', NoticiasController.mostrarNoticias);


module.exports = router;// Exportação das rotas criadas.
