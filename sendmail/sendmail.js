function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_gm5otf4";
    const templateID = "template_pbgq77c"

    emailjs.send(serviceID,templateID,params)
    .then((res) =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message send successfully")
    })
    .catch((err) => console.log(err));
}