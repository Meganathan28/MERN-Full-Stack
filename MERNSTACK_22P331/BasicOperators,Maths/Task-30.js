let a=5;
let b=6;
let c=7;
let d=8;
let e=9;
let f=2;
let g=3;
let result1=(e+d);//17
let result2=(e+d)*c;//119 the brackets performs first and after asteriods(*)
let result3=(e+d)*c-b;//113 the brackets performs first and after asteriods(*) and after subtraction.
let result4=(e+d)*c-b/a;//117.8 the brackets performs first and after asteriods(*) and division(/) both have same precendence and after the subtraction performs.
alert(result1);
alert(result2);
alert(result3);
alert(result4);
let result5=f**g*a;//40
alert(result5);
//1.bracket and next power takes place
//2.Astreis(*) and Division(/) and modulo(%)
//3.Add(+) and Sub(-)