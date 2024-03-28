document.getElementById('yesButton').addEventListener('click', function() {
    respond('yes');
});

document.getElementById('noButton').addEventListener('click', function() {
    respond('no');
});

// function respond(response) {
//     const messageElement = document.getElementById('message');
//     const email = "rylandolifant.rylie@gmail.com";
//     const subject = "Response to Date";

//     if (response === 'yes') {
//         messageElement.textContent = "Awesome! Looking forward to seeing you 😊❤️";
//     } else if (response === 'no') {
//         messageElement.textContent = "Ouch! Rejection hurts, but life goes on! 💔";
//     }

//     // Send email notification
//     fetch(`send_email.php?email=${email}&subject=${subject}&response=${response}`)
//         .then(response => console.log("Email notification sent"))
//         .catch(error => console.error("Error sending email notification"));
    
    // Disable the buttons after selection
    // document.getElementById('yesButton').disabled = true;
    // document.getElementById('noButton').disabled = true;
}
