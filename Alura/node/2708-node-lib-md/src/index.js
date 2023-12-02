//metodo de importação de libs
//const chalk = require('chalk');

import fs from 'fs'
import chalk from 'chalk';
import { error } from 'console';
import { REFUSED } from 'dns';


function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)]
    const Resultado = capturas.map(captura=> ({[captura[1]]: captura[2]}))
    return Resultado.length !== 0 ? Resultado :"Não há Links no arquivos" ;
}


function tratarErro(erro){
    console.log(erro)
    throw new Error(chalk.red(erro.code,'Não há arquivo no dirietorio'));
}

//assync / await
async function pegaArquivo(caminhoArquivo){
    try{
        const encoding = 'utf-8'
        const texto = await fs.promises.readFile(caminhoArquivo,encoding)
        return extraiLinks(texto);
    }catch(erro){
        tratarErro(erro)
    }
}



export default pegaArquivo;
