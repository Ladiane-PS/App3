import { query } from "../database/sqlite.js";

async function Listar() {
   
    let sql = "select * from doctor order by name";

    const materiais = await query (sql, []);
    return materiais;

}

export default { Listar}
