/*

Breve explicação do código:

Foi utilizado o pacote readline-sync para que houvesse interação do programa com o usuário. Para baixar esse módulo,
abra o terminal na pasta onde está o arquivo que utilizará o módulo e execute o comando "npm install readline-sync", para mais
informações, acesse https://www.npmjs.com/package/readline-sync;
(Obs.: é necessário a presença do módulo para o funcionameto do código);
(Obs.2: As entradas de usuários não podem possuir alguns caracteres especiais, como letras com acentos, "ç", entre outros...);

Algumas variáveis utilizadas:

- pecas: é a variável que recebe os dados da peca que o usuário cadastra;
- pecasn: representa as pecas que já estão cadastradas na caixa;
- listadepecas: representa a caixa com as pecas;


Os Pesos das peças estão em miligramas;


*/


let exit = false, exit2 = false, exit3 = false, exit4 = false;
let peca, peca1, peca2, peca3, peca4, peca5, peca6, peca7, peca8, listadepecas = [];

peca = {
    nome: undefined,
    peso: undefined,
}

peca1 = {
    nome: "Caixa de Câmbio",
    peso: "850",
}

peca2 = {
    nome: "Escapamento",
    peso: "3200",
}

peca3 = {
    nome: "Homocinética",
    peso: "1400",
}

peca4 = {
    nome: "Velas",
    peso: "350",
}

peca5 = {
    nome: "Correais",
    peso: "200",
}

peca6 = {
    nome: "Filtros",
    peso: "500",
}

peca7 = {
    nome: "Alarme",
    peso: "900",
}

peca8 = {
    nome: "Motor",
    peso: "25000",
}

listadepecas = [peca1, peca2, peca3, peca4, peca5, peca6, peca7, peca8];

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

            if (listadepecas.length < 10){
                
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
                        listadepecas.push(peca);

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
            }

            break;
    
        default:
            console.log("Algum erro ocorreu!");

    }
}
 
console.log("Obrigado por usar o sistema de cadastros de pecas!");
