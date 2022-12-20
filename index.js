// MENU

let showMenu = document.getElementById('showMenu');
let hideMenu = document.getElementById('hideMenu');
let navLinks = document.getElementById('navLinks');

function showmenu() {
    navLinks.style.display = "block"
    setTimeout(() => {
        navLinks.style.top = "0";
        navLinks.style.opacity = "1";
    }, 200);
}
function hidemenu() {
    navLinks.style.top = "-200%";
    navLinks.style.opacity = "0";
    setTimeout(() => {
        navLinks.style.display = "none"
    }, 500);
}

showMenu.addEventListener('click', showmenu)
hideMenu.addEventListener('click', hidemenu)

// FORM
let form = document.querySelector('form');

function handleClick(e) {
    let validate = true;
    e.preventDefault();
    form.querySelectorAll('input').forEach(element => {
        if(element.style.border === '2px solid #D70040' || element.value === '') {
            validate = false;
            element.parentElement.querySelector('label').style.color = '#D70040'
            element.style.border = '2px solid #D70040'
        } 
    })
    
    if(form.querySelector('textarea').value === '') {
        validate = false
        form.querySelector('textarea').parentElement.querySelector('label').style.color = '#D70040'
        form.querySelector('textarea').style.border = '2px solid #D70040'
    }

    if(validate) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        popUp.style.top = `${window.innerHeight / 2}px`;
        popUp.style.opacity = '1';

        let name = `${document.getElementById('name').value} ${document.getElementById('surname').value}`
        var params = {
            from_name: name,
            email_id: document.getElementById('email').value,
            number: document.getElementById('number').value,
            message: document.getElementById('message').value
        }
        
        emailjs.send('service_b5v50pu', 'template_4g0x9jg', params)
    }
}

function checkValue(e) {
    let currentInput = e.currentTarget
    if(currentInput.value === '') {
        currentInput.parentElement.querySelector('label').style.color = '#D70040'
        currentInput.style.border = '2px solid #D70040';
    } else {
        if(currentInput.value !== '') {
            currentInput.style.border = '2px solid rgb(80, 80, 80)';
            currentInput.parentElement.querySelector('label').style.color = '#2B2B2B'
        }
    }
}

form.querySelectorAll('input').forEach(element => {element.addEventListener('keyup', checkValue)})
form.querySelector('textarea').addEventListener('keyup', checkValue)

form.addEventListener('submit', handleClick)



