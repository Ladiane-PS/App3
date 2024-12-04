import jwt from "jsonwebtoken";

const secretToken = "lady123";

function CreateToken(id_user) {
    const token = jwt.sign({id_user}, secretToken, {
        expiresIn: 9999999
    });
    
    return token;

}
function ValidateToken(req, res, next) {
    const authToken = req.headers.authorization; // "Bearer 000000000" p nos so importa  token o número vamos desprezar o bearean e o espaço 
    
    if (!authToken)
        return res.status(401).json({error: "Token não informado"});
    const [bearer, token] = authToken.split(" "); // está fazendo isso "Bearer"  "00000000"
    
    jwt.verify(token, secretToken, (err, tokenDecoded) => {

        if (err)
            return res.status(401).json({error: "Token inválido"});
        req.id_user = tokenDecoded.id_user;

        next();  //isso aqui que dizer validei o token pode seguir adiante 

    });
}


export default {CreateToken, ValidateToken};


// split dividir em duas string 
//expiresIn: 9999999  esse valor bem grande pois nesse caso não vamos trabalhar com token de inspiração
//O token possui segurança integrada para garantir que não seja alterado durante a transmissão. 
//Isso é feito utilizando uma palavra secreta (Secret), que permite verificar se o token foi manipulado. 
//Caso alguém intercepte o token e tente alterá-lo, o sistema consegue identificar a modificação e invalidar o token. Essa verificação protege os dados e garante a integridade do processo.






