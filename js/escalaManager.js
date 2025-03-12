export function formatarHora(data) {
    if (!data) return "Sem escala";
    const dia = data.getDate().toString().padStart(2, '0') + "/" + data.getMonth().toString().padStart(2, '0');
    const horas = data.getHours().toString().padStart(2, '0');
    const minutos = data.getMinutes().toString().padStart(2, '0');

    return `${dia} - ${horas}:${minutos}`;
}

export function atualizarEscala(idTempo, idEscalado, dataHora, escalado) {
    document.getElementById(idTempo).textContent = formatarHora(dataHora);
    document.getElementById(idEscalado).textContent = escalado || "Sem Escalado";
}

export function verificarEscala() {
    const agora = new Date();
    const colunas = document.querySelectorAll("td[id]");
    let proximaEscala = null;
    let escalaAtualEncontrada = false;
    let ativarAlarme = false;

    colunas.forEach(coluna => {
        const dataHoraEscala = new Date(coluna.id);
        const duracaoMinutos = parseInt(coluna.getAttribute("data-duracao"));
        const fimEscala = new Date(dataHoraEscala.getTime() + duracaoMinutos * 60000);
        const escalado = coluna.textContent;
        const tempoRestante = dataHoraEscala - agora;

        // ESCALA ATUAL
        if (!escalaAtualEncontrada && agora >= dataHoraEscala && agora < fimEscala) {
            atualizarEscala("escalaAtualTempo", "escalaAtualEscalado", dataHoraEscala, escalado);
            escalaAtualEncontrada = true;
        }

        // PRÓXIMA ESCALA
        if (dataHoraEscala > agora && (!proximaEscala || dataHoraEscala < proximaEscala.dataHoraEscala)) {
            proximaEscala = { dataHoraEscala, escalado };

            // Ativar alarme 2 minutos antes da escala
            if (tempoRestante <= 2 * 60000 && tempoRestante > 1 * 60000) {
                ativarAlarme = true;
            }
        }
    });

    if (!escalaAtualEncontrada) {
        atualizarEscala("escalaAtualTempo", "escalaAtualEscalado", null, null);
    }

    if (proximaEscala) {
        atualizarEscala("escalaProximaTempo", "escalaProximaEscalado", proximaEscala.dataHoraEscala, proximaEscala.escalado);
    } else {
        atualizarEscala("escalaProximaTempo", "escalaProximaEscalado", null, null);
    }

    if (ativarAlarme) {
        document.getElementById("warning").play();
    }
}
