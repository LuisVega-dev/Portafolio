const formulario = document.getElementById('form-contact');
const span_block = document.querySelector('.span_disable')

formulario.addEventListener('click', () => {
    const mail_to = document.getElementById('email').value;
    const mail_not_content = document.getElementById('email');
    if (mail_to == '') {
        mail_not_content.classList.add('not_content');
        mail_not_content.classList.remove('int-text');
    }else{
        mail_not_content.classList.remove('not_content');
        mail_not_content.classList.add('int-text');
    }
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const name_form = document.getElementById('name').value;
    const lastname_form = document.getElementById('lastname').value;
    const email_form = document.getElementById('email').value;
    const phone_form = document.getElementById('telefono').value;
    const msg_form = document.getElementById('msg-input').value;
    if (name_form != '' & lastname_form != '' & email_form != '' & phone_form != '' & msg_form != '') {
        span_block.innerHTML = `Gracias por enviarme un mensaje ${name_form} ${lastname_form}, pronto me pondre en contacto contigo mediante tu correo ${email_form} 💛.`
    }return;
});

