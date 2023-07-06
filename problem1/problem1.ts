console.log("Program Konversi Nilai")
function studentScore(score : number): string{
    if(score >= 80 || score == 100){
        return "A"
    }else if (score >= 65 || score == 79){
        return "B+"
    }else if (score >= 50 || score == 64){
        return "B"
    }else if (score >= 35 || score == 49){
        return "C"
    }else{
        return "D"
    }
}
let score = 34
console.log("nilai kamu adalah = "+studentScore(score))