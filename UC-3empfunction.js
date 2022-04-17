const IS_Part_Time=1;
const IS_Full_Time=2;
const Part_Time_Hrs=4;
const Full_Time_Hrs=8;
const Wage_Per_Hr=20;

function getWorkingHrs(empcheck)
{
    switch(empcheck)
    {
        case IS_Part_Time:
            return Part_Time_Hrs;
        case IS_Full_Time:
            return Full_Time_Hrs;
        default:
            return 0;
    }
}

let empCheck =Math.floor(Math.random() *10 ) % 3;
let empHrs =getWorkingHrs(empCheck);
let empWage = empHrs * Wage_Per_Hr;
console.log("Emp Wage : "+empWage);