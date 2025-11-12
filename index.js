let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","&","*","+",
    "-","_","+","=","~","`","(",")","[","]","{","}","\\","|","\"","\'","<",">",".","/","?","^"]

const firstEl = document.getElementById("firstsgsn")
const secondEl = document.getElementById("secondsgsn")
const txt = document.getElementById("txt")

function generate() {
    passwordOne = generator()
    passwordTwo = generator()
    firstEl.textContent = passwordOne
    secondEl.textContent = passwordTwo
    if (txt.textContent === "") {
        txt.textContent = "Note: click to copy !"
    } else if (firstEl.textContent != "Option one") {
        txt.textContent = " "
    }
}

function generator() {
    let password = ""
    let passwordContent = []
    for (i=0; i<16 ; i++) {
        let n = Math.floor(Math.random() * characters.length) 
        random = characters[n]
        if (passwordContent.includes(random) === false) {
            passwordContent.push(random)
        }
    }
    for (i=0 ; i<passwordContent.length ; i++) {
        password += passwordContent[i]
    }
    return password   
}

function copy() {
    if (firstEl.textContent != "Option one") {
        txt.textContent = "Note: typing it by yourself would help you not forget the password :)"
    }
}