

function calcLoan(monthIR, loanAmount, payPerYear) {
    let P = loanAmount
    let r = monthIR / 100
    let n = payPerYear
    const result = P * ((r *((1 + r) ** n)) / (((1 + r) ** n) - 1))
    const interestCalcBtn = result
    return interestCalcBtn
     
}



function rCalcNow(rR, rI, rY) {
    let rII = rI / 100
    const p1 = rR * ((1 + (rII / 365)) ** (365 * rY))
    return p1
}

console.log(rCalcNow(5000, 4, 7))