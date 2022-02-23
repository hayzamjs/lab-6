let regex = /^/;

function deleteError(id) {
    document.getElementById(id).innerHTML = "";
}

function displayError(id, error_field) {
    document.getElementById(id).innerHTML = `<p style="color:red">Please check your ${error_field}!</p>`;
}

/* for of loop to check if fields are less than 1 */
function isEmpty(inputArr) {
    for(const input of inputArr) {  
        if(input.length < 1) {    
            return true;
        }
    }
    return false;
}

function validateName(str) {
    deleteError("name_error");
    regex = /^[a-zA-Z ]+$/;
    if(regex.test(str) === false) {
        displayError("name_error", "name")
        return false;
    }
    return true;
}

function validateOrderDate(str) {
    deleteError("order_error");
    regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
    if(regex.test(str) === false) {
        displayError("order_error", "your order")
        return false;
    }
    return true;
}

function validatePhone(str) {
    deleteError("phone_error");
    regex = /^\([0-9]{2}\)[0-9]{10}$/;
    if(regex.test(str) === false) {
        displayError("phone_error", "your mobile phone number")
        return false;
    }
    return true;
}

function validateCreditCard(str) {
    deleteError("credit_card_number_error");
    regex = /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;
    if(regex.test(str) === false) {
        displayError("credit_card_number_error", "your credit card number")
        return false;
    }
    return true;
}

function validateExpiryDate(str) {
    deleteError("expiry_error");
    regex = /^(0[1-9]|1[1-2])\/(1[7-9]|2[0-7])/;
    if(regex.test(str) === false) {
        displayError("expiry_error", "your expiry date")
        return false;
    }
    return true;
}

function validateCVV(str) {
    deleteError("cvv_error");
    regex = /^\d{3}$/;
    if(regex.test(str) === false) {
        displayError("cvv_error", "your CVV")
        return false;
    }
    return true;
}

function validate() {
    const name = document.getElementById('name').value;
    const order_date = document.getElementById('order_date').value;
    const phone = document.getElementById('phone').value;
    const creditCardNumber = document.getElementById('creditCardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    /* array of fields */
    let inputArr = [name, order_date, phone, creditCardNumber, expiryDate];
    const empty = isEmpty(inputArr);

    if(empty) {
        alert('Please fill out all fields');
        return false;
    }

    const nameValid = validateName(name);
    if(!nameValid) {
        alert('Please enter a valid name');
        return false;
    }

    const orderDateValid = validateOrderDate(order_date);
    if(!orderDateValid) {
        alert('Please enter a valid order date');
        return false;
    }

    const phoneValid = validatePhone(phone);
    if(!phoneValid) {
        alert('Please enter a valid phone number');
        return false;
    }

    const creditCardNumberValid = validateCreditCard(creditCardNumber);
    if(!creditCardNumberValid) {
        alert('Please enter a valid credit card number')
        return false;
    }
    
    const expiryDateValid = validateExpiryDate(expiryDate);
    if(!expiryDateValid) {
        alert('Please enter a valid expiry date');
        return false;
    }

    const cvvValid = validateCVV(cvv);
    if(!cvvValid) {
        alert('Please enter a valid CVV');
        return false;
    }
    return true;
}