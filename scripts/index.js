// P = a (r / n)
// a = loan amount 
// r = interest rate
// n = # of payments per year

function p1(monthIR, loanAmount) {
    return monthIR * loanAmount;
}

function p2(monthIR, payPerYear) {
    return 1 - (1 + monthIR) ** -payPerYear;
}

function calc(monthIR, loanAmount, payPerYear) {
    let result = 0;
    let part1 = p1(monthIR, loanAmount)
    let part2 = p2(monthIR, payPerYear)
    result = part1 / part2
    return result
     
}