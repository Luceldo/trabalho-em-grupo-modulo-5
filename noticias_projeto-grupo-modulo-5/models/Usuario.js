const { DataTypes } = require('sequelize'); // Importação dos tipos de dados existentes no sequelize para podermos criar as tabelas do nosso banco de dados.

const database = require('../database/db_noticias'); // Importação do banco de dados.

// Criação da tabela "Usuario" por meio do método "define.
const Usuario = database.define('Usuario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Usuario; // Exportação do módulo "Usuario" para que possamos utilizá-lo em outras partes da nossa aplicação. O arquivo "Usuario.js" é considerado um módulo porque o Node.js trata cada arquivo em um projeto Node como um módulo que pode exportar valores e funções do arquivo. 
