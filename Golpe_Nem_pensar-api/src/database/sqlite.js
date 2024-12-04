import sqlite3 from "sqlite3";

const SQLite = sqlite3.verbose();
// essa função executa o comando de uma forma mais simples , comano paramentro e metódos 
// essa funão vai trabalhar com uma pros vai trabalhar com uma prmessa de que vai me devolver alguma coisa no futuro
//temoa que garantir que vamos espera o comando executar por compleo antes de devolver os dados pr gente, vai me devolver como um reosolve ou reject erro
function query(command, params, method = "all"){
    return new Promise(function (resolve, reject) {
        db[method](command, params, function(error, result){
            if (error)
                reject(error)
            else
                resolve(result);
        });
    });
}


//abrir SQLite.OPEN_READWRITE
const db = new SQLite.Database("./src/database/banco.db", SQLite.OPEN_READWRITE, (err) => {
    if (err)
        return console.log("Erro ao conectar com banco:" + err.message);
});

export { db, query };