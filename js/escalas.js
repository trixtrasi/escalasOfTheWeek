//não é necessário mexer aqui. move along. Só se quiser alterar o horario
export const horarios = {
    0: [{ inicio: "08:00", duracao: 20 }],
    1: [{ inicio: "12:00", duracao: 30 }],
    2: [{ inicio: "12:30", duracao: 30 }],
    3: [{ inicio: "15:00", duracao: 20 }],
    4: [{ inicio: "18:00", duracao: 20 }],
    //adicionando mais horarios
    //4: [{ inicio: "19:00", duracao: 60 }]
};
//ajustar as datas e os escalados pra cada horário. O horario é referente ao objeto dos horarios
export const escalas = [
    {
        diaSemana: "Segunda-Feira",
        data: "2025-03-10",
        escalas: [
            { hora: 0, nome: "Alferes Lucas" },
            { hora: 1, nome: "Sargento Mariana" },
            { hora: 2, nome: "Cabo Carlos" },
            { hora: 3, nome: "Tenente Sofia" }
        ]
    },
    {
        diaSemana: "Terça-Feira",
        data: "2025-03-11",
        escalas: [
            { hora: 0, nome: "Capitão Pedro" },
            { hora: 1, nome: "Major Rita" },
            { hora: 2, nome: "Coronel João" },
            { hora: 3, nome: "General Beatriz" }
        ]
    },
    {
        diaSemana: "Quarta-Feira",
        data: "2025-03-12",
        escalas: [
            { hora: 0, nome: "Comodoro Gustavo" },
            { hora: 1, nome: "Alferes Fernanda" },
            { hora: 2, nome: "Alferes Lucas" },
            { hora: 3, nome: "Web Master Alessio" },
            { hora: 4, nome: "Fernando do RH" }
        ]
    },
    {
        diaSemana: "Quinta-Feira",
        data: "2025-03-13",
        escalas: [
            { hora: 0, nome: "Tenente Gojira" },
            { hora: 1, nome: "Major Fernando" },
            { hora: 2, nome: "Alferes Rangel" },
            { hora: 3, nome: "Web Master Alessio" }

        ]
    },
    {
        diaSemana: "Sexta-Feira",
        data: "2025-03-14",
        escalas: [
            { hora: 0, nome: "General Ricardo" },
            { hora: 1, nome: "Sargento Juliana" },
            { hora: 2, nome: "Cabo Rangel" },
            { hora: 3, nome: "Web Master Alessio" }
        ]
    }
];
