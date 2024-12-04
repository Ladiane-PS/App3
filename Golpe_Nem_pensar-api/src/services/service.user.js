// Tratamento da senha 
import bcrypt from "bcrypt"; // Importa a biblioteca bcrypt para criptografar senhas
import repositorUser from "../repositories/repository.user.js"; // Importa o módulo responsável por interagir com o banco de dados de usuários
import jwt from "../token.js";

async function Inserir(name, email, password) { // Define uma função assíncrona para inserir um novo usuário

  // Cria um hash seguro da senha usando o algoritmo bcrypt com 10 rodadas
     const hashPassword = await bcrypt.hash(password, 10); 
  // Insere o usuário no banco de dados, armazenando a senha em formato hash
     const user = await repositorUser.Inserir(name, email, hashPassword); 

     user.token = jwt.CreateToken(user.id_user);
  
     return user;
}
// Função para autenticação de Login
async function Login(email, password) { 
       
    const user = await repositorUser.ListarByEmail(email); // primeiro verificar se existem algum usuário com esse e-mail
   
    if (user.length == 0) {// Retorna um array vazio se nenhum usuário for encontrado
        return[];
    }   
    else {
        if (await bcrypt.compare(password, user.password)) {
            delete user.password;    //ele vai devolver o paasword que está minha hash
            
            user.token = jwt.CreateToken(user.id_user);
            
            return user;
        } else
            return [];
    }
    return user;
}

export default { Inserir, Login } // Exporta a função Inserir para que possa ser utilizada em outros módulos