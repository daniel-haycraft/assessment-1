let password = "Csaldddd21!"
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/


if (password.length >= 20 || password.length < 10 || specialChars.test(password)===false) {
    console.log("password incorrect")
}else if ((/[0-9]/.test(password)) && /[A-Z]/.test(password) && /[a-z]/.test(password)){
    console.log("password is correct today...")
}else{
    console.log("password incorrect")
}

// as soon as i realized i could do more than one conditional in side i put the incorrects on top because i feel as if they should be caught first
// i wanted to see if there were number so i found a built in conditional /[]/.test(str)
//you can use it with numbers and alphabet!
// and if all else fails it goes to password in correct 


