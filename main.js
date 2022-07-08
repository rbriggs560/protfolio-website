const form = document.getElementById("form");
/* Get the user fullname */
const fullName = document.getElementById("full-name");
/* Get the user email */
const emailAddress = document.getElementById("email");
/* Get the user subject*/
const theSubject = document.getElementById("userSubject");
/* Get the user message*/
const userMessage = document.getElementById("message");
/* Get the user message*/
const userInformation = document.getElementById("user-info");


form.addEventListener("submit", event => {
    event.preventDefault()
    const name = fullName.value; 
    const email = emailAddress.value;
    const subject = theSubject.value;
    const message = userMessage.value;
    console.log(`The user name is ${name}`)
    console.log(`The user email is ${email}`)
    console.log(`The subject is ${subject}`)
    console.log(`The user message is ${message}`)

})






