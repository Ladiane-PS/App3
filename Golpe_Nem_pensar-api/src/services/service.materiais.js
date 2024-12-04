// a diferença que não vou passar dados de requisição como req e res
// async aguardar , não sabemos quanto tempo irá demorar para responder 
import repositoryMateriais from "../repositories/repository.materiais.js";

async function Listar() {

    const materiais = await repositoryMateriais.Listar();

    return materiais;
}

export default { Listar}
