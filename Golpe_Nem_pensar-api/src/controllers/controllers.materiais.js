//criar rotinas que vão ser chamadas
// awai aguardar o tempo de requisição , toda vez que a uso em ua funão preciso colocar o async
import serviceMateriais from "../services/service.materiais.js";
async function Listar(req, res) {

    const materiais = await serviceMateriais.Listar();

    res.status(200).json(materiais);

}

export default { Listar}
