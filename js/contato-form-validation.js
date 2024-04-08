document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
      e.preventDefault(); // Impede o envio do formulário
      
      // Resetar mensagens de erro
      document.querySelectorAll('.error-message').forEach((elem) => elem.remove());

      // Validação
      let isValid = true;

      // Nome
      const name = document.getElementById('name');
      if (!name.value.trim()) {
          showError(name, 'Por favor, insira seu nome.');
          isValid = false;
      }

      // Email
      const email = document.getElementById('email');
      if (!email.value.trim() || !validateEmail(email.value)) {
          showError(email, 'Por favor, insira um e-mail válido.');
          isValid = false;
      }

      // Telefone
      const telefone = document.getElementById('telefone');
      if (!telefone.value.trim()) {
          showError(telefone, 'Por favor, insira seu telefone.');
          isValid = false;
      }

      // Data e Hora do Test-Drive
      const dataTest = document.getElementById('data-test');
      if (!dataTest.value.trim()) {
          showError(dataTest, 'Por favor, selecione a data e horário para o test-drive.');
          isValid = false;
      }

      // Envio do formulário se válido
      if (isValid) {
          form.submit();
      }
  });

  // Função para mostrar mensagem de erro
  function showError(input, message) {
      const div = document.createElement('div');
      div.textContent = message;
      div.className = 'error-message'; // Adicione estilos para esta classe em seu CSS
      div.style.color = 'red';
      input.parentNode.insertBefore(div, input.nextSibling);
  }

  // Função para validar email
  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
  }
});