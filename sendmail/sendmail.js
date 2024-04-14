// 初始化EmailJS
emailjs.init('service_gm5otf4');

// 發送電子郵件
const form = document.getElementById('newsletter-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // 防止表單提交

    emailjs.sendForm('service_gm5otf4', 'template_pbgq77c', '#newsletter-form')
        .then(response => console.log('Email sent successfully!', response.status, response.text))
        .catch(error => console.log('Failed to send email:', error));
});