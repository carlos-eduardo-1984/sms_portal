let agenda = JSON.parse(localStorage.getItem("agenda") || "[]");

async function enviarSMS(telefone, mensagem) {
    try {
        const response = await fetch(
            "http://192.168.1.120:8080/send-sms",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    phoneNumber: telefone,
                    message: mensagem
                })
            }
        );

        const resultado = await response.text();
        console.log("SMS enviado:", resultado);

    } catch (erro) {
        console.error("Erro ao enviar SMS:", erro);
    }
}

function salvarAgendamento() {
    const item = {
        empresa: empresa.value,
        cliente: cliente.value,
        telefone: telefone.value,
        email: email.value,
        servico: servico.value,
        horario: horario.value,
        duracao: duracao.value,
        obs: obs.value,
        lembrete1h: false,
        lembreteDia: false
    };

    agenda.push(item);
    localStorage.setItem("agenda", JSON.stringify(agenda));
    render();
}

function render() {
    lista.innerHTML = agenda.map(a => `
        <div class="card">
            <b>${a.cliente}</b><br>
            ${a.servico}<br>
            ${a.horario}<br>
            ${a.telefone}
        </div>
    `).join('');
}

render();

async function verificarLembretes() {

    const agora = new Date();

    for (const a of agenda) {

        const h = new Date(a.horario);
        const diff = (h - agora) / 60000;

        // SMS 1 hora antes
        if (diff < 60.5 && diff > 59.5 && !a.lembrete1h) {

            await enviarSMS(
                a.telefone,
                `Olá ${a.cliente}, seu ${a.servico} está agendado para daqui a 1 hora.`
            );

            a.lembrete1h = true;
        }

        // SMS no dia
        if (
            agora.toDateString() === h.toDateString() &&
            !a.lembreteDia
        ) {

            await enviarSMS(
                a.telefone,
                `Olá ${a.cliente}, lembramos que seu atendimento é hoje às ${new Date(a.horario).toLocaleTimeString()}.`
            );

            a.lembreteDia = true;
        }
    }

    localStorage.setItem("agenda", JSON.stringify(agenda));
}

setInterval(verificarLembretes, 60000);
