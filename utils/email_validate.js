///[emailValidate] will check if the provided email is a valid email or not
function emailValidate(email ){
    if(!email){
        return false;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(email)){
        return false;
    }
    return true;
}
export default emailValidate;