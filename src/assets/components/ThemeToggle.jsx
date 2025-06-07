import { useEffect } from "react";

function TheThemeToggle() {
  useEffect(() => {
    const atualizarTema = () => {
      const horaAtual = new Date().getHours();
      let imagem = "";

      if (horaAtual < 12) {
        imagem = './public/images/dia.jpg';
      } else if (horaAtual < 18) {
        imagem = './public/images/tarde.jpg';
      } else {
        imagem = './public/images/noite.jpg';
      }

      // Aplica estilo no body
      document.body.style.backgroundImage = `url(${imagem})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.transition = "background-image 1s ease-in-out";
      document.body.style.minHeight = "100vh";
      document.body.style.margin = 0;
    };

    atualizarTema(); // Aplica o tema ao atualizar o componente
    const intervalo = setInterval(atualizarTema, 60000); // Atualiza a cada 1 minuto

    return () => clearInterval(intervalo); // Limpa quando o componente for removido
  }, []);

  return null;
}

export default TheThemeToggle;
