function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    const bmi = weight / ((height / 100) ** 2);

    const bmiResult = document.getElementById('bmi-result');
    bmiResult.textContent = `Your BMI: ${bmi.toFixed(2)}`;
}

const bmiForm = document.getElementById('bmi-form');
bmiForm.addEventListener('submit', function(event) {
    event.preventDefault();
    calculateBMI(); 
});

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = new FormData(contactForm);

    const emailBody = `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nMessage: ${formData.get('message')}`;

    console.log(emailBody);
    alert('Your message has been sent!'); 
    contactForm.reset(); 
});

function toggleVisibility(id) {
    var element = document.getElementById(id);
    var otherElementId = id === 'bmi-calculator' ? 'contact' : 'bmi-calculator';
    var otherElement = document.getElementById(otherElementId);
    
    if (element.style.display === "none") {
        element.style.display = "block";
        otherElement.style.display = "none"; // Hide the other section
    } else {
        element.style.display = "none";
    }
}

