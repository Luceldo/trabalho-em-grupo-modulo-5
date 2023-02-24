// Exportação do nosso módulo de checagem de autenticação do usuário. Nele temos uma função que vai verificar se o usuário está logado na página. Do contrário esse usuário será redirecionado para a página de login.
module.exports.checkAuth = function (req, res, next) {
    const userId = req.session.userid
  
    if (!userId) {
      res.redirect('/entrar')
    }
  
    next()
  }