
const Usuario = require('../models/Usuario'); // Importação do nosso modelo "users".
const bcrypt = require('bcryptjs'); // Importação da biblioteca "bcryptjs". O bcryptjs é uma biblioteca para encriptação de dados. 


//Exportação da class "AutenticacaoController" para podermos utilizá-la nas rotas CRUD que criamos na pasta "routes".
module.exports = class AutenticacaoController {
    static entrar(req, res) {
        res.render('autenticacao/entrar') // O método entrar apresenta como resposta a renderização da página entrar que foi criada na pasta "views".
    }

    static async entrarPost(req, res) {
        const { email, senha } = req.body // Analisa o login do usuário e o torna disponível por meio da propriedade req.body.


    //Procura o email do usuário no banco de dados para verificar se já está cadastrado ou não.
    const usuario = await Usuario.findOne({ where: { email: email } })

    if (!usuario) {
      res.render('autenticacao/entrar', {
        message: 'Usuário não encontrado!',
      })

      return
    }

    // Verificação da senha registrada no banco de dados.
    const senhasIguais = bcrypt.compareSync(senha, usuario.senha)

    if (!senhasIguais) {
      res.render('autenticacao/entrar', {
        message: 'Senha inválida!',
      })

      return
    }



    // Autenticação do usuário.
    req.session.userid = usuario.id

    req.flash('message', 'Login realizado com sucesso!')

    req.session.save(() => {
      res.redirect('/')
    })
  }




  static cadastrar(req, res) { 
    res.render('autenticacao/cadastrar') // O método cadastrar apresenta como resposta a renderização da página de cadastro que foi criada na pasta "views". */
  }

  static async cadastrarPost(req, res) {
    const { nome, email, senha, confirmaSenha } = req.body // Analisa o cadastro do usuário e o torna disponível por meio da propriedade req.body.

    // Validação das senhas cadastradas, se conferem.
    if (senha != confirmaSenha) {
      req.flash('message', 'As senhas não conferem!')
      res.render('autenticacao/cadastrar')

      return
    }



    // Validação de email.
    const EmailExiste = await Usuario.findOne({ where: { email: email } })

    if (EmailExiste) {
      req.flash('message', 'O e-mail já está em uso!')
      res.render('autenticacao/cadastrar')

      return
    }



    // Criptogração da senha que será armazenada criptografada no banco de dados de cadastro.
    const salt = bcrypt.genSaltSync(10);
    const senhaCriptografada = bcrypt.hashSync(senha, salt);

    const usuario = {
      nome,
      email,
      senha: senhaCriptografada,
    }



    // Cadastro do novo usuário no banco de dados.
    Usuario.create(usuario)
      .then((usuario) => {
       
        req.session.userid = usuario.id // Inicializa a sessão.

        req.flash('message', 'Cadastro realizado com sucesso!')

        // Salva a sessão de volta no armazenamento, substituindo o conteúdo do armazenamento pelo conteúdo da memória. 
        req.session.save(() => {
          res.redirect('/')
        })
      })
      .catch((err) => console.log(err))
  }


  // Desloga o usuário. A sessão é destruida e a req.session desativada.
  static sair(req, res) {
    req.session.destroy()
    res.redirect('/entrar')
  }
}


