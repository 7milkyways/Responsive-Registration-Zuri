const inputArea = document.querySelectorAll(".input_area");
const inputField = document.querySelectorAll("#input_field");
const errorIcon = document.querySelectorAll(".error_icon");
const errorText = document.querySelectorAll(".error_text");
const errorEmail = document.querySelector(".error_email");
const formBtn = document.querySelector(".form_btn");
const formSubmit = document.querySelector(".form_submit");

const validEmail = /@gmail.com/;

let allValid = false;

formBtn.addEventListener("click", ()=>{
    
            for (let i = 0; i < inputField.length; i++) {

                if (inputField[i].value.length == 0) {
                    inputArea[i].classList.add("border_error");
                    errorText[i].classList.add("show_error")
                    errorIcon[i].classList.add("show_error");
                    allValid = false;
                }
                else if (inputField[0].value.length == 0) {
                    inputArea[0].classList.add("border_error");
                    errorText[0].classList.add("show_error")
                    errorIcon[0].classList.add("show_error");
                    allValid = false;
                }
                else if (inputField[1].value.length == 0) {
                    inputArea[1].classList.add("border_error");
                    errorText[1].classList.add("show_error")
                    errorIcon[1].classList.add("show_error");
                    allValid = false;
                }
                else if (inputField[2].value.length == 0) {
                    inputArea[2].classList.add("border_error");
                    errorText[2].classList.add("show_error")
                    errorIcon[2].classList.add("show_error");
                    allValid = false;
                }
                else if (validEmail.test(inputField[2].value) == false) {
                    inputArea[2].classList.add("border_error");
                    errorEmail.classList.add("show_error")
                    errorIcon[2].classList.add("show_error");
                    allValid = false;
                }
                else{
                    inputArea[i].classList.remove("border_error");
                    errorText[i].classList.remove("show_error")
                    errorIcon[i].classList.remove("show_error");
                    allValid = true;
                }
                    
            }

            if (allValid) {
                formSubmit.click();
            }

})