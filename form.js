document.getElementById("openModal").onclick = function() {
    document.getElementById("modal").style.display = "flex";
    history.pushState(null, null, 'feedback');  

    // Загрузка значений из LocalStorage
    document.getElementById("fullName").value = localStorage.getItem("fullName") || '';
    document.getElementById("email").value = localStorage.getItem("email") || '';
    document.getElementById("phone").value = localStorage.getItem("phone") || '';
    document.getElementById("organization").value = localStorage.getItem("organization") || '';
    document.getElementById("message").value = localStorage.getItem("message") || '';
};

window.onpopstate = function() {
    document.getElementById("modal").style.display = "none";  
};

document.getElementById("feedbackForm").onsubmit = function(event) {
    event.preventDefault();  
    sendMail.call(this);  
};

function sendMail() {
    let formData = {
        fullName: this.fullName.value,
        email: this.email.value,
        phone: this.phone.value,
        organization: this.organization.value,
        message: this.message.value
    };

    emailjs.send("service_v4uqpud", "template_e3wxg71", formData)
        .then(alert("email.sent"))

    
    localStorage.setItem("fullName", this.fullName.value);
    localStorage.setItem("email", this.email.value);
    localStorage.setItem("phone", this.phone.value);
    localStorage.setItem("organization", this.organization.value);
    localStorage.setItem("message", this.message.value);
}