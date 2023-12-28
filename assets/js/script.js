
const form = document.getElementById('subscribeForm');
let successMsg = document.getElementById('successMsg');
let subscriptionBox = document.getElementById('subscBox');

let emailInput = document.getElementById('email-box')
let errorText = document.getElementById('errorInfo')

const email = emailInput.value;


form.addEventListener('submit', (e) => {
    e.preventDefault(); //PREVENT DEFAULT FORM SUBMISSION



    //ERROR MESSAGES PART  document.getElementById('')

    // let emailInput = document.getElementById('email-box')
    // let errorText = document.getElementById('errorInfo')

    // const email = emailInput.value;
    document.getElementById('userEmail').innerText = email;


    if (!validateEmail(email))  {
        errorText.innerText = 'Valid email required';
        emailInput.style.borderColor = 'red'
        emailInput.style.backgroundColor = '#ffefed'
        emailInput.style.color = 'red'


    } else {


        setTimeout(function() {
            showSuccessMsg();
        }, 1300) 
    }


    
})


const dismissBtn = document.getElementById('dismissBtn') 

    dismissBtn.addEventListener('click', () => {
        if (successMsg.style.display === 'block' && subscriptionBox.style.display === 'none') {
            successMsg.style.display = 'none';
            subscriptionBox.style.display = 'flex';
        }
        else {
            successMsg.style.display = 'block';
        }

        form.reset();
    })



//PRESET FUNCTIONS

function validateEmail(email) {
    const emailPattern = /\S+@\S+\.\S+/;

    return emailPattern.test(email);
}


function showSuccessMsg() {
    // let successMsg = document.getElementById('successMsg');
    // let subscriptionBox = document.getElementById('subscBox');

    successMsg.style.display = 'block';

    if (successMsg.style.display = 'block') {
        subscriptionBox.style.display = 'none'
    }
    else {
        successMsg.style.display = 'block';
    }
}





            //SMTP JS 


function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sodipofunso2@gmail.com",
        Password: "Funso2005",
        To : email.value,
        From :"SFK",
        Subject : "Confirmation Message",
        Body :  "Hi 👋" + userEmail.value + ","
        + "<br> "
        + "<br> This is testing confirmation message(email) created by " + "SFK" 
        + "<br> It's just a mini project he is working on 😇."
        + "<br> "
        + "<br> Meanwhile you can follow him on " + "X" + "and" + "Instagram"  
        + "<br> "
        + "<br> Thanks for confirming 😊"
        
    }).then(
        message => alert("Message Sent Successfully")
    );
}