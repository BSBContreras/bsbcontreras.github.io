const nameElement = document.getElementById('name');
const whatsappElement = document.getElementById('whatsapp');

const formElement = document.getElementById('form-contact');
formElement.onsubmit = contact;

const contactElementLink = document.getElementById('contact-link');
contactElementLink.onclick = (e) => {
  e.preventDefault()
  nameElement.focus();
}

function contact(e) {
  e.preventDefault();

  const name = nameElement.value;
  const whatsapp = whatsappElement.value;

  console.log({name,whatsapp});
}