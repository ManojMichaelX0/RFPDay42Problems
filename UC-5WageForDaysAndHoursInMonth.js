const Is_Part_Time=1;
const IS_Full_Time=2;
const Part_time_Hrs=4;
const Full_Time_Hrs=8;
const Wage_Per_Hr=20;
const Num_of_Working_Days=20;
const Max_Hrs_in_Month=160;
function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case Is_Part_Time:
            return Part_time_Hrs;
        case IS_Full_Time:
            return Full_Time_Hrs;
        default:
            return 0;
    }
}
let totalEmpHrs=0;
let totalWorkingDays=0;
while(totalEmpHrs <=Max_Hrs_in_Month && totalWorkingDays<Num_of_Working_Days)
{
    totalWorkingDays++;
    let empCheck =Math.floor(Math.random() * 10)%3;
    totalEmpHrs += getWorkingHours(empCheck);
} 
let empWage = totalEmpHrs * Wage_Per_Hr;
console.log("UC 5 Total Working Days : "+totalWorkingDays+ " Total Hrs : "+totalEmpHrs+" Emp Wage : "+empWage);
