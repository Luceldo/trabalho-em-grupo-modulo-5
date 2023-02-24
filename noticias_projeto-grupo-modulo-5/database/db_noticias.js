const { Sequelize } = require('sequelize'); //Importação do módulo sequelize utilizando require('sequelize'). O Sequelize serve para abstrair os comandos de operações de SQL e fazer com que possamos usar a linguagem de programação javascript para nos conectarmos e operarmos o banco de dados.


//Criação de uma nova instância do Sequelize usando o seu construtor, que possui a seguinte sintaxe: new Sequelize(database, [username=null], [password=null], [options={}].
const sequelize = new Sequelize('noticias', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})


// Utilização da função "authenticate" por meio das declarações Try/Catch para verificar se a conexão com o nosso banco de dados foi estabelecida.
try {
  sequelize.authenticate()
  console.log('Conectamos com o Sequelize!')
} catch (error) {
  console.error('Não foi possível conectar:', error)
}

module.exports = sequelize; //Exportação do módulo sequelize para que possamos utilizá-lo em outras partes da nossa aplicação.
