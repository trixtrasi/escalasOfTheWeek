document.addEventListener("DOMContentLoaded", function () {
    function formatarHora(data) {
        if (data === null) return "Sem escala";
        let horasBunitin = (data.getHours() < 10 ? '0' : '') + data.getHours();
        let minutosBunitin = (data.getMinutes() < 10 ? '0' : '') + data.getMinutes();

        return horasBunitin + ":" + minutosBunitin;
    }

    function atualizarEscala(idTempo, idEscalado, dataHora, escalado) {
        document.getElementById(idTempo).textContent = formatarHora(dataHora);
        document.getElementById(idEscalado).textContent = escalado;
    }

    function verificarEscala() {
        const agora = new Date();
        const colunas = document.querySelectorAll("td[id]");
        let proximaEscala = null;
        let escalaAtualEncontrada = false;
        let achtung = false;

        colunas.forEach(coluna => {
            const dataHoraEscala = new Date(coluna.id);
            const duracaoMinutos = parseInt(coluna.getAttribute("data-duracao")) || 20; // Padrão: 20 min
            const fimEscala = new Date(dataHoraEscala.getTime() + duracaoMinutos * 60000);
            const escalado = coluna.textContent;

            // ESCALA ATUAL
            if (!escalaAtualEncontrada && agora >= dataHoraEscala && agora < fimEscala) {
                atualizarEscala("escalaAtualTempo", "escalaAtualEscalado", dataHoraEscala, escalado);
                escalaAtualEncontrada = true;
            }

            // PRÓXIMA ESCALA
            if (dataHoraEscala > agora && (!proximaEscala || dataHoraEscala < proximaEscala.dataHoraEscala)) {
                proximaEscala = { dataHoraEscala, escalado };
                // Cálculo do tempo restante até a próxima escala
                const tempoRestante = dataHoraEscala - agora;

                // CONFIGURA O ALARME SE ESTIVER FALTANDO 2 MINUTOS
                if (tempoRestante <= 2 * 60000 && tempoRestante > 1 * 60000) {
                    achtung = true;
                }
            }
        });
        //DISPARA O ALARME DUAS VEZES ANTES DA ESCALA
        if (achtung) {
            document.getElementById("warning").play();
        }

        //ATUALIZA A ESCALA ATUAL
        if (!escalaAtualEncontrada) {
            atualizarEscala("escalaAtualTempo", "escalaAtualEscalado", null, null);
        }

        //ATUALIZA A PRÓXIMA ESCALA
        if (proximaEscala) {
            atualizarEscala("escalaProximaTempo", "escalaProximaEscalado", proximaEscala.dataHoraEscala, proximaEscala.escalado);
        } else {
            atualizarEscala("escalaProximaTempo", "escalaProximaEscalado", null, null);
        }
    }

    // Verifica a cada minuto
    setInterval(verificarEscala, 60000);
    // Executa imediatamente ao carregar a página
    verificarEscala();
});
