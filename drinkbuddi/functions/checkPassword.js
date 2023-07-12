import IsRequired from "./isRequired";

export default function CheckPassword (password) {
    let valid = false;

    if(!IsRequired(password)) {
    showError(password, 'Password cannot be blank.');
    } else {
    showSuccess(password);
    valid = true;
    }
    return valid;
}