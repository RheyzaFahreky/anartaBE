import {Sequelize} from "sequelize"

const db = new Sequelize('anarta','root','',{
    host : "localhost",
    dialect : "mysql"
})

export default db