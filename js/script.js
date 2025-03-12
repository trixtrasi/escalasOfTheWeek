import { povoarTabela } from "./tabelaEscala.js";
import { verificarEscala } from "./escalaManager.js";

document.addEventListener("DOMContentLoaded", function () {
    povoarTabela();
    verificarEscala();
    setInterval(verificarEscala, 60000);
});
