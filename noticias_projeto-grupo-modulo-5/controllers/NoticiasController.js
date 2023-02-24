
const Noticia = require('../models/Noticia'); // Importação do nosso modelo "Noticia".
const Usuario = require('../models/Usuario'); // Importação do nosso modelo "Usuario".

const { Op } = require('sequelize'); // Importação dos operadores do módulo sequelize para realizarmos requisições no banco de dados.

// Exportação da class "NoticiasController" para podermos utilizá-la nas rotas CRUD que criamos na pasta "routes".
module.exports = class NoticiasController {
  static async painel(req, res) {
    const usuarioId = req.session.userid

    const usuario = await Usuario.findOne({
      where: {
        id: usuarioId,
      },
      include: Noticia,
      plain: true,
    })

    const noticias = usuario.Noticia.map((result) => result.dataValues)

    let SemNoticias = true

    if (noticias.length > 0) {
      SemNoticias = false
    }

    console.log(noticias)
    console.log(SemNoticias)

    res.render('noticias/painel', { noticias, SemNoticias })
  }


  //Método "get" para criar Notícias.
  static criarNoticia(req, res) {
    res.render('noticias/criar')
  }

  //Método "post" para criar Notícias.
  static criarNoticiaSalvar(req, res) {
    const noticia = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      noticia: req.body.noticia,
      UsuarioId: req.session.userid,
    }

    Noticia.create(noticia)
      .then(() => {
        req.flash('message', 'Notícia criada com sucesso!')
        req.session.save(() => {
          res.redirect('/noticias/painel')
        })
      })
      .catch((err) => console.log())
  }

  // Método "get" para exibir as notícias.
  static mostrarNoticias(req, res) {
    console.log(req.query)

    // Checar se o usuário está buscando alguma notícia.
    let busca = ''

    if (req.query.busca) {
      busca = req.query.busca
    }

    // Ordenar resultados da busca.
    let ordem = 'DESC'

    if (req.query.ordem === 'old') {
      ordem = 'ASC'
    } else {
      ordem = 'DESC'
    }

    Noticia.findAll({
      include: Usuario,
      where: {
        titulo: { [Op.like]: `%${busca}%` },
      },
      order: [['createdAt', ordem]],
    })
      .then((data) => {
        let quantidadeNoticias = data.length

        if (quantidadeNoticias === 0) {
          quantidadeNoticias = false
        }

        const noticias = data.map((result) => result.get({ plain: true }))

        res.render('noticias/home', { noticias, quantidadeNoticias, busca })
      })
      .catch((err) => console.log(err))
  }

  
  // Método "post" para excluir notícias.
  static removerNoticia(req, res) {
    const id = req.body.id

    Noticia.destroy({ where: { id: id } })
      .then(() => {
        req.flash('message', 'Notícia removida com sucesso!')
        req.session.save(() => {
          res.redirect('/noticias/painel')
        })
      })
      .catch((err) => console.log())
  }


  // Método "get" para editar notícias.
  static atualizarNoticia(req, res) {
    const id = req.params.id

    Noticia.findOne({ where: { id: id }, raw: true })
      .then((noticia) => {
        res.render('noticias/editar', { noticia })
      })
      .catch((err) => console.log())
  }


  // Método "post" para editar notícias.
  static atualizarNoticiaPost(req, res) {
    const id = req.body.id

    const noticia = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      noticia: req.body.noticia,
      
    }

    Noticia.update(noticia, { where: { id: id } })
      .then(() => {
        req.flash('message', 'Notícia atualizada com sucesso!')
        req.session.save(() => {
          res.redirect('/noticias/painel')
        })
      })
      .catch((err) => console.log())
  }

  
}