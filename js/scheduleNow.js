document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pega os valores do formulário
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var service = document.getElementById('service').value;

    // Cria um objeto de agendamento
    var appointment = {
        name: name,
        date: date,
        time: time,
        service: service
    };

    // Verifica se está criando um novo agendamento ou atualizando um existente
    var id = this.dataset.id;
    if (!id) {
        // criando um novo agendamento, então geramos um ID único
        id = 'appointment-' + Date.now();
    }

    // Salva o agendamento no localStorage
    localStorage.setItem(id, JSON.stringify(appointment));

    // Limpa o formulário e remove o ID do agendamento do dataset do formulário
    event.target.reset();
    delete this.dataset.id;

    // Mostra uma mensagem de sucesso
    alert('Agendamento feito com sucesso!');

    // Atualiza a tabela de agendamentos
    loadAppointments();
});

function loadAppointments() {
    var appointmentsTableBody = document.querySelector('#appointments-table tbody');

    // Limpa a tabela
    appointmentsTableBody.innerHTML = '';

    // Carrega os agendamentos do localStorage
    for (var i = 0; i < localStorage.length; i++) {
        var id = localStorage.key(i);
        var appointment = JSON.parse(localStorage.getItem(id));

        // Cria uma nova linha na tabela para o agendamento
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${appointment.name}</td>
            <td>${appointment.date}</td>
            <td>${appointment.time}</td>
            <td>${appointment.service}</td>
            <td>
                <button class="btn btn-secondary mr-2" onclick="editAppointment('${id}')">Editar</button>
                <button class="btn btn-danger" onclick="deleteAppointment('${id}')">Excluir</button>
            </td>
        `;
        appointmentsTableBody.appendChild(row);
    }
}

function editAppointment(id) {
    var appointment = JSON.parse(localStorage.getItem(id));

    // Carrega os dados do agendamento no formulário
    document.getElementById('name').value = appointment.name;
    document.getElementById('date').value = appointment.date;
    document.getElementById('time').value = appointment.time;
    document.getElementById('service').value = appointment.service;

    // Salva o ID do agendamento para que possamos atualizá-lo quando o formulário for enviado
    document.getElementById('appointment-form').dataset.id = id;
}

function deleteAppointment(id) {
    // Deleta o agendamento do localStorage
    localStorage.removeItem(id);

    // Atualiza a tabela de agendamentos
    loadAppointments();
}

// Carrega os agendamentos quando a página é carregada
document.addEventListener('DOMContentLoaded', loadAppointments);
