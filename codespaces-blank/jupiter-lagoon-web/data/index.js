/*
Web application attempt v1.1 by JupiterLagoon / Saharah Johnson 2025

*/

const newsLetter = document.querySelector('form');
const button = document.querySelector('button');

newsLetter.addEventListener('submit',

    function submitForm() {
        window.alert('Your form has been submitted!');
        
        //this.formAction = window.open("index.html")
    }
); 

const nameField = document.querySelector('#name');

window.addEventListener('load',
    
    function nameFocus() {
        if (nameField) {
            nameField.focus();
        }
    }
);