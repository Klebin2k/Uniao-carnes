//botão interativo whattsapp
 function openWhatsApp() {
    const phone = "5511975858240";
    const message = encodeURIComponent("Olá! Vim pelo site e gostaria de um orçamento.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    }

    // chat interativo whattsapp

    
  function handleKey(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}


  function toggleChat() {
  const chatBox = document.getElementById('chat-box');
  chatBox.style.display = (chatBox.style.display === 'none' || chatBox.style.display === '') ? 'flex' : 'none';
}


  function sendMessage() {
  const input = document.getElementById('userInput');
  const msg = input.value.trim();
  if (!msg) return;

  const chatBody = document.getElementById('chat-body');

  const userDiv = document.createElement('div');
  userDiv.className = 'user-message';
  userDiv.textContent = msg;
  chatBody.appendChild(userDiv);

  setTimeout(() => {
    const botDiv = document.createElement('div');
    botDiv.className = 'bot-message';
    botDiv.textContent = "Obrigado pela sua mensagem! Em breve entraremos em contato.";
    chatBody.appendChild(botDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 1000);

  input.value = '';
  chatBody.scrollTop = chatBody.scrollHeight;
} // <--- ESTA CHAVE ESTAVA FALTANDO AQUI

function sendToWhatsApp() {
  const chatBody = document.getElementById('chat-body');
  const messages = chatBody.querySelectorAll('.user-message, .bot-message');

  let messageText = '*Conversa com União Carnes*%0A%0A';

  messages.forEach(msg => {
    if (msg.classList.contains('user-message')) {
      messageText += `👤 Cliente: ${msg.textContent}%0A`;
    } else {
      messageText += `🤖 Atendente: ${msg.textContent}%0A`;
    }
  });

  const phone = "5511975858240";
  const finalURL = `https://wa.me/${phone}?text=${messageText}`;
  window.open(finalURL, '_blank');
}

//menu responsivo


  const toggleBtn = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-list a');

  toggleBtn.addEventListener('click', () => {
    navList.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
    });
  });



 
