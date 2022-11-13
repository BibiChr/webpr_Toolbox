// // const e = {revenue: 10000, bonus: null};
// //
// // document.getElementById('revenue').setAttribute('value', e.revenue);
// //
// // const factor = document.getElementById('factor_');
// //
// // function bonusCalculation(x) {
// //     return x.revenue * 10;
// // }
// //
// // factor.onchange = document.getElementById('bonus').setAttribute('value', eval(bonusCalculation(e)));
// //
// // document.getElementById('bonus').setAttribute('value', '0');
// //
// // // bonusCalculation(e);
// // // document.writeln(String(e.bonus === e.revenue * factor_));
//
//
// // function bonusCalculation(x) {
// //     x.bonus = x.revenue * eval(factor.value);
// //     return x.revenue * factor.value;
// // }
//
const e = {revenue: 10000, bonus: null};
document.getElementById('revenue').setAttribute('value', "revenue:  " + e.revenue);
const factor = document.getElementById('factor_');
// const bonusCalculation = Function('e' , 'e.bonus = e.revenue *  + factor.value');
function bonusCalculation(x) {
    x.bonus = x.revenue * eval(factor.value);
}
factor.onchange = () => {
    bonusCalculation(e);
    document.getElementById('bonus')
        .setAttribute('value', "bonus:  " + e.bonus);
    // document.writeln(String(e.bonus === e.revenue * factor.value));
}

//
// // const bonusCalculation = Function('x','factor', 'return '+ x.bonus = x.revenue * factor.value);
//

// const x = 10;
//
// const createFunction1 =
//     Function('x', "return x;");
//
//
// document.writeln("" + createFunction1(20));