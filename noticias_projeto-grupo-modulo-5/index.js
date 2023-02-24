const express = require('express'); // Importação do framework express usado para criar servidores web HTTP. 
const exphbs = require('express-handlebars'); // Importação do módulo express-handlebars. 
const session = require('express-session'); // Importação do módulo express-session para criar uma sessão middleware.
const FileStore = require('session-file-store')(session); // 
const flash = require('express-flash'); // Importação do módulo express-flash que expõe os métodos getter e setter para uma mensagem flash do formulário.
const moment = require('moment'); // Importação do módulo moment que altera formatação dos dados de data.

//Criação de uma instância do express.
const app = express(); 

const database = require('./database/db_noticias'); // Importação do banco de dados.

//Importação dos nossos modelos. 
const Noticia = require('./models/Noticia');
const Usuario = require('./models/Usuario');

//Importação das nossas rotas. 
const noticiasRoutes = require('./routes/noticiasRoutes');
const autenticacaoRoutes = require('./routes/autenticacaoRoutes');

//Importação dos nossos controllers.
const NoticiasController = require('./controllers/NoticiasController');
const AutenticacaoController = require('./controllers/AutenticacaoController');


// Adicionando as handlebars views na nossa aplicação.
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(flash());// configurar as mensagens de status do sistema flash messages.
app.use(express.static('public')); // dizendo que a pasta public contém os assets.
app.use(express.urlencoded({extended: true,})); // receber resposta do body.
app.use(express.json());


app.engine('handlebars', exphbs({
  defaultLayout: 'main', 
  helpers: {
      formatDate: (date) => {
          return moment(date).format('DD/MM/YYYY')
      }
  }
}))

//Diz onde o as sessões vão ser salvas.
app.use(
  session({
    name: 'session',
    secret: 's3gr3d0',
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: function () {},
      path: require('path').join(require('os').tmpdir(), './sessions'),
    }),
    cookie: {
      secure: false,
      maxAge: 3600000,
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
    },
  }),
)


// Envia a sessão para a resposta.
app.use((req, res, next) => {
  
  if (req.session.userid) {
    res.locals.session = req.session;
  }

  next();
});

app.use('/noticias', noticiasRoutes);
app.use('/', autenticacaoRoutes);

app.get('/', NoticiasController.mostrarNoticias);


app.get('/', (req, res) =>{
  res.render('noticias/home')
});

app.get('/painel', (req, res) =>{
  res.render('noticias/painel')
});

app.post('/painel/noticias/add', (req, res) => {
  res.redirect('noticias/painel')
});

database
  .sync()
  .then(() => {
    app.listen(3000);
    console.log("Servidor iniciado na porta 3000.")
  })
  .catch((err) => console.log(err));
