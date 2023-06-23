import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize(
    process.env.NODE_ENV === "production" ?
    process.env.DB_URL:
    'sqlite:./database/partidas.sqlite'
    
    // Antes
    // dialect: 'sqlite',
    // storage: './database/partidas.sqlite'
)

//Comprobar conexión
try{
    await sequelize.authenticate()
    console.warn("[ Conexión coa Base de Datos partidas.sqlite ]");
}   catch (error) {
    console.error("[ Non podo conectar con partidas.sqlite ]");
}

const Game = sequelize.define('Game', {
    Event:{type: DataTypes.STRING},
    Site:{type: DataTypes.STRING},
    Date:{type: DataTypes.STRING},
    Round:{type: DataTypes.STRING},
    White:{type: DataTypes.STRING},
    Black:{type: DataTypes.STRING},
    Result:{type: DataTypes.STRING},
    ECO:{type: DataTypes.STRING},
    PGNGame:{type:DataTypes.STRING}
})

const ECO = sequelize.define('ECO', {
    ECOcode:{type: DataTypes.STRING},
    OpeningName:{type: DataTypes.STRING},
    OpeningPlayed:{type: DataTypes.STRING},
    Ascii:{type: DataTypes.STRING}
})


// await sequelize.sync({ alter:true })
await sequelize.sync()

export {
    ECO,
    Game
}