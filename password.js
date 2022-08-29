
let password = "CharlesIsacutepuppy1!"
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/


if (password.length > 35 || password.length < 10 || specialChars.test(password) < 1) {
    console.log("password incorrect1")
}else if (/[0-9]/.test(password) && /[A-Z]/.test(password) && /[a-z]/.test(password)){
    console.log("password is correct today...")
}else{
    console.log("password incorrect2")
}

// i wanted to see if there were number in my password variable so i found a built in conditional /[]/.test(str)
//you can use it with numbers and alphabet!
// and if all else fails it goes to password incorrect 
// i used || in the first if because if any of them were incorrect it would print incorrect 
// and for the corrects i put the && because they all need to be true to be correct
// /[]/.test(str) already checks for truth 

