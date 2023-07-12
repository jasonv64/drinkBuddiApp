import IsRequired from "./isRequired";
import IsEmailValid from "./isEmailValid";

export default function CheckEmail (email) {
    let valid = false;

    if(!IsRequired(email)) {
    showError(email, 'Email cannot be blank.')
    } else if (!IsEmailValid(email)) {
    showError(email, 'Email is not valid.')
    } else {
    showSuccess(email);
    valid = true;
    }
    return valid;
}