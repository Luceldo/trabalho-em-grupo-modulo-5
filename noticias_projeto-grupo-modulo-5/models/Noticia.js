const { DataTypes } = require('sequelize'); // Importação dos tipos de dados existentes no sequelize para podermos criar as tabelas do nosso banco de dados.

const database = require('../database/db_noticias'); // Importação do banco de dados.

const Usuario = require('../models/Usuario'); //Importação do model "Usuario".

// Criação da tabela "Noticia" por meio do método "define.
const Noticia = database.define('Noticia', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subtitulo:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  noticia: {
    type: DataTypes.STRING,
    allowNull: false,
  }

});


// Definição dos relacionamentos das tabelas do nosso banco de dados.
Noticia.belongsTo(Usuario, { foreignKey: { allowNull: false } });
Usuario.hasMany(Noticia,  { foreignKey: { allowNull: false } });


module.exports = Noticia; // Exportação do módulo "Notícia" para que possamos utilizá-lo em outras partes da nossa aplicação. O arquivo "Noticia.js" é considerado um módulo porque o Node.js trata cada arquivo em um projeto Node como um módulo que pode exportar valores e funções do arquivo. 

