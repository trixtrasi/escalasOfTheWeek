import { escalaSemana } from "./escalas.js";

export function povoarTabela() {
    const tabela = document.getElementById("escalasDaSemana");
    tabela.innerHTML = ""; // Limpa a tabela antes de preencher

    escalaSemana.forEach(escala => {
        const linha = document.createElement("tr");

        // Coluna do horário
        let colunas = `<td>${escala.horario}</td>`;

        // Preenche os dias da escala
        escala.dias.forEach(dia => {
            colunas += `<td id="${dia.data}" data-duracao="${dia.duracao}">${dia.nome}</td>`;
        });

        linha.innerHTML = colunas;
        tabela.appendChild(linha);
    });
}
