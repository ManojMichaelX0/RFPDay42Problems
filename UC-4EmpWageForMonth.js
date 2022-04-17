const Is_Part_Time=1;
const IS_Full_Time=2;
const Part_time_Hrs=4;
const Full_Time_Hrs=8;
const Wage_Per_Hr=20;
const Num_of_Working_Days=20;
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
for(let day =0;day<Num_of_Working_Days;day++)
{
    let empCheck =Math.floor(Math.random() * 10)%3;
    totalEmpHrs += getWorkingHours(empCheck);
} 
let empWage = totalEmpHrs * Wage_Per_Hr;
console.log("UC 4 = Total Hrs :"+totalEmpHrs+" EmpcWage : "+empWage);
