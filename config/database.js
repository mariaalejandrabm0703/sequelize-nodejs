require('dotenv').config();

module.exports = {
  
  // Conexión
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "babel",
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "mysql",
  
  // Configurar Seeds
  seederStorage: "sequelize",
  seederStorageTableName: "seeds",

  // Configurar Migraciones
  migrationStorage: "sequelize",
  migrationStorageTableName: "migrations",
  
  define: {
    timestamps: false,
    // Genera claves foraneas 
    underscored: true
  }
}