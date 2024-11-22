function sendToWhatsApp(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Construct the WhatsApp message
    const whatsappMessage = `Hi, my name is ${name} and my email is ${email}. Here's my message: ${message}`;
    // Encode the message to be used in a URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Construct the WhatsApp URL with your number included
    const whatsappURL = `https://wa.me/919571428843?text=${encodedMessage}`;

    // Open the WhatsApp URL in a new tab
    window.open(whatsappURL, '_blank');
}

