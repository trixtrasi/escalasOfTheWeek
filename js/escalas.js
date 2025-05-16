//não é necessário mexer aqui. move along. Só se quiser alterar o horario
export const horarios = {
    0: [{ inicio: "09:00", duracao: 20 }],
    1: [{ inicio: "12:00", duracao: 30 }],
    2: [{ inicio: "12:30", duracao: 30 }],
    3: [{ inicio: "15:00", duracao: 20 }],
        //adicionando mais horarios
    //4: [{ inicio: "19:00", duracao: 60 }]
};
//ajustar as datas e os escalados pra cada horário. O horario é referente ao objeto dos horarios
export const escalas = [
    {
        diaSemana: "Segunda-Feira",
        data: "2025-05-19",
        escalas: [
            { hora: 0, nome: "Cardoso" },
            { hora: 1, nome: "John" },
            { hora: 2, nome: "Odirlei" },
            { hora: 3, nome: "Alessio" },
            ]
    },
    {
        diaSemana: "Terça-Feira",
        data: "2025-05-20",
        escalas: [
            { hora: 0, nome: "John" },
            { hora: 1, nome: "Cardoso" },
            { hora: 2, nome: "Romulo" },
            { hora: 3, nome: "Romulo" }
        ]
    },
    {
        diaSemana: "Quarta-Feira",
        data: "2025-05-21",
        escalas: [
            { hora: 0, nome: "Cardoso" },
            { hora: 1, nome: "John" },
            { hora: 2, nome: "Alessio" },
            { hora: 3, nome: "Odirlei" },
        ]
    },
    {
        diaSemana: "Quinta-Feira",
        data: "2025-05-22",
        escalas: [
            { hora: 0, nome: "John" },
            { hora: 1, nome: "Cardoso" },
            { hora: 2, nome: "Romulo" },
            { hora: 3, nome: "Alessio" }

        ]
    },
    {
        diaSemana: "Sexta-Feira",
        data: "2025-05-23",
        escalas: [
            { hora: 0, nome: "Cardoso" },
            { hora: 1, nome: "John" },
            { hora: 2, nome: "Odirlei" },
            { hora: 3, nome: "Romulo" }
        ]
    }
];
