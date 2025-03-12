import { escalas } from "./escalas.js";
import { horarios } from "./escalas.js";

export function povoarTabela() {
    const thead = document.getElementById("escalasTHead");
    const tbody = document.getElementById("escalasTbody");


    thead.innerHTML = ""; // Limpa antes de preencher
    tbody.innerHTML = "";

    const linhaHead = document.createElement("tr");

    // Cabeçalho com "Horários"
    let colunasHead = `<th>Horários</th>`;

    escalas.forEach(diaEscala => {
        let dateHead = new Date(diaEscala.data);
        let dd_mm = dateHead.getDate().toString().padStart(2, '0') + "/" + dateHead.getMonth().toString().padStart(2, '0');

        colunasHead += `<th>${diaEscala.diaSemana}<br><small>${dd_mm}</small></th>`;
    });

    linhaHead.innerHTML = colunasHead;
    thead.appendChild(linhaHead);

    //Quantidade de objetos de horários dinamicos
    const totalHorarios = Object.keys(horarios).length;
    // Gerando linhas com os horários e nomes
    for (let i = 0; i < totalHorarios; i++) { 
        const linhaBody = document.createElement("tr");

        // Pegando o horário e duração corretamente do objeto `horarios`
        const horarioInfo = horarios[i]?.[0];

        let colunasBody = `<td>${horarioInfo.inicio}<br><small> ${horarioInfo.duracao}min</small></td>`; // Coluna de horário

        escalas.forEach(diaEscala => {
            const escala = diaEscala.escalas.find(e => e.hora === i)?? 'Sem escalado';
            colunasBody += `<td id="${diaEscala.data}T${horarioInfo.inicio}" data-duracao="${horarioInfo.duracao}">${escala.nome ?? 'Sem escalado'}</td>`;
        });

        linhaBody.innerHTML = colunasBody;
        tbody.appendChild(linhaBody);
    }
}
