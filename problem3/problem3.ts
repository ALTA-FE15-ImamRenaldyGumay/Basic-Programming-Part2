console.log("Bilangan Prima")
function primaNumber(nilai : number) : boolean{
    let apakahPrima = true
    for (var i = nilai-1; i> 1; i--){
        if(nilai % i === 0){
            apakahPrima = false
        }
    }
    return apakahPrima
}
console.log(primaNumber(7))