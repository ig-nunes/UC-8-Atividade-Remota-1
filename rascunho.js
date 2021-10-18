/*

Breve explicação do código:

Foi utilizado o pacote readline-sync para que houvesse interação do programa com o usuário. Para baixar esse módulo,
abra o terminal na pasta onde está o arquivo que utilizará o módulo e execute o comando "npm install readline-sync", para mais
informações, acesse https://www.npmjs.com/package/readline-sync;
(Obs.: é necessário a presença do módulo para o funcionameto do código);

Algumas variáveis utilizadas:

- pecas: é a variável que recebe os dados da peca que o usuário cadastra;
- pecasn: representa as pecas que já estão cadastradas na caixa;
- listadepecas: representa a caixa com as pecas;


let readlineSync = require('readline-sync');

let nomePeca = readlineSync.question('aqui sua pergunta no console ');

*/


let exit = false, exit2 = false, exit3 = false, exit4 = false, listadepecas = [];
let peca, peca1, peca2, peca3, quant = [];

peca = {
    nome: undefined,
    peso: undefined,
}

peca1 = {
    nome: undefined,
    peso: undefined,
}

peca2 = {
    nome: undefined,
    peso: undefined,
}

peca3 = {
    nome: undefined,
    peso: undefined,
}

console.log("Bem-vindo ao sistema de cadastro de peças!");

while(exit == false){
    
    exit = false, exit2 = false, exit3 = false, exit4 = false;

    let decisao = require('readline-sync');

    let dec = decisao.question('Escolha entre: \n- Informacoes de pecas (1) \n- Cadastrar pecas (2) \n');

    switch (dec){
        case "1":
            console.log(listadepecas);
            
            while (exit4 == false){

                let saida = require('readline-sync');

                let saida1 = saida.question('Escolha entre: \n- ir para informacoes e cadastros de pecas (1) \n- sair (2)\n ');

                if (saida1 == "1"){

                    exit4 = true;

                } else if (saida1 == "2"){

                    exit4 = true;
                    exit = true;
                    
                } else {
                    console.log("Dados invalidos");
                }

            }

            break;

        case "2":

            if (quant < 10){
                
                while (exit2 == false){

                    let nome = require('readline-sync');

                    let nomepeca = nome.question('Coloque o nome da peca: \n');

                    if (nomepeca.length >= 3) {

                        peca.nome = nomepeca;
                        exit2 = true;
                        

                    } else {
                        console.log("nome invalido, inserir nome com pelo menos 3 caracteres");

                    }
                }

                while (exit3 ==false) {

                    let peso = require('readline-sync');

                    let pesopeca = peso.question('Coloque o peso da peca: \n');

                    if (pesopeca > 100){
                        
                        peca.peso = pesopeca;
                        listadepecas.push(peca.nome);

                        console.log("A peca foi cadastrada com sucesso! \n Dados da caixa atualizada:");
                        console.log(listadepecas);
                        exit3 = true;

                        while (exit4 == false){

                            let saida = require('readline-sync');
            
                            let saida1 = saida.question('Escolha entre: \n- ir para informacoes e cadastros de pecas (1) \n- sair (2)?\n ');
            
                            if (saida1 == "1"){
            
                                exit4 = true;
            
                            } else if (saida1 == "2"){
            
                                exit4 = true;
                                exit = true;
                                
                            } else {
                                console.log("Dados invalidos");
                            }
            
                        }

                    } else{
                        console.log("Essa peca não pode ser cadastrada! O peso precisa ser superior a 100 gramas!");
                        exit3 = true;
                    }

                }
                
            } else {
                console.log("Caixa ja esta com a capacidade maxima!");
            }

            break;
    
        default:
            console.log("Algum erro ocorreu!");

    }
}
 
console.log("Obrigado por usar o sistema de cadastros de pecas!");
