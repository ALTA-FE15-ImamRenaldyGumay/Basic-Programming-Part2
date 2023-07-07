console.log("Palindrome")
function palindrome(kata : string) : boolean {
    let kataTerbalik = ""

    for (let i = kata.length - 1 ; i >= 0 ; i--) {
        kataTerbalik += kata[i]
    }

    if (kataTerbalik === kata) {
        return true
    }else{
        return false
    }
}

console.log(palindrome("katak"))
