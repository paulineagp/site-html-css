

document.getElementById('contactForm').addEventListener('submit', function(event) {
    let isValid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (name.value.trim() === '') {
        isValid = false;
        alert('Por favor, preencha o nome.');
    }

    if (email.value.trim() === '') {
        isValid = false;
        alert('Por favor, preencha o email.');
    } else {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email.value)) {
            isValid = false;
            alert('Por favor, preencha um email válido.');
        }
    }

    if (message.value.trim() === '') {
        isValid = false;
        alert('Por favor, preencha a mensagem.');
    }

    if (!isValid) {
        event.preventDefault();
    }
});


window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const receivedDataDiv = document.getElementById('receivedData');

    if (receivedDataDiv) {
        receivedDataDiv.innerHTML = `
            <p>Nome: ${urlParams.get('name')}</p>
            <p>Email: ${urlParams.get('email')}</p>
            <p>Mensagem: ${urlParams.get('message')}</p>
        `;
    }
};
