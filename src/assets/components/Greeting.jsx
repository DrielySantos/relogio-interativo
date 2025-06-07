import { useEffect, useState } from "react";

function Greeting(){

    const [saudacao, setSaudacao] = useState('');

    useEffect(() => {
        const horaAtual = new Date().getHours();

        if( horaAtual < 12){
            setSaudacao('Bom dia');
        } else if (horaAtual < 18){
            setSaudacao('Boa tarde');
        }else {
            setSaudacao('Boa noite');
        }
    }, [])

    return(
            <h1 className="titulo">Olá, {saudacao}!</h1>
    );
}

export default Greeting;