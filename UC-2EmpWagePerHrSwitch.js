const IS_PartTime=1;
const IS_FullTime=2;
const PartTime_Hrs=4;
const FullTime_Hrs=8;
const Wage_per_Hr=20;
let empHrs=0;
let empCheck = Math.floor(Math.random() *10 )%3;
switch(empCheck)
{
    case IS_PartTime:
        empHrs=PartTime_Hrs;
        break;
    case IS_FullTime:
        empHrs=FullTime_Hrs;
        break;
    default:
        empHrs=0;
}
let empWage= empHrs*Wage_per_Hr;
console.log("Hours : " +empHrs + " Wage : "+empWage);    