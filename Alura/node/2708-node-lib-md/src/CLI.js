import chalk from "chalk";
import fs from "fs";
import listaValidada from "./https-validacao.js";
import pegaArquivo from "./index.js";
const caminho = process.argv;

async function imprimeLista(valida,resultado,identificador =''){
    
    if (valida){
        console.log(
            chalk.yellow('Lista validada'),
            chalk.black.bgWhite(identificador)
            ,await listaValidada(resultado));    
        }else{ 
            console.log(
                chalk.yellow('Lista de Links'),
            chalk.black.bgWhite(identificador)
            ,resultado);
    }
    
}


async function processaTexto(argumentos) {
    const caminho = argumentos[2]
    const valida = argumentos[3] ==="valida";
    
    try{
        fs.lstatSync(caminho);
    }catch(erro){
        if(erro.code === 'ENOENT'){
            console.log('Arquivo ou diretório não existente')
            return
        }

    }



    if (fs.lstatSync(caminho).isFile()) {
        const Resultado = await pegaArquivo(caminho)
        imprimeLista(valida,Resultado)
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
            imprimeLista(valida,lista,nomeDeArquivo)
        })
    }
}

processaTexto(caminho)
