import { useEffect, useState } from "react";

function Clock(){

    const [hora, setHora] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() =>{
            setHora(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <p className="relogio">{hora.toLocaleTimeString()}</p>
    );
}

export default Clock;