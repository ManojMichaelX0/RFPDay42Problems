 //UC 6 /arrays 
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
function calcDailyWage(empHrs)
{
    return empHrs*Wage_Per_Hr;
}

{
    let totalEmpHrs=0;
    let totalWorkingDays=0;
    let empDailyWageArr= new Array();
    let empDailyWageMap = new Map();
    let empDailyHrsMap = new Map();

    while(totalEmpHrs <=Max_Hrs_in_Month && totalWorkingDays<Num_of_Working_Days)
    {
        totalWorkingDays++;
        let empCheck =Math.floor(Math.random() * 10)%3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArr.push(calcDailyWage(empHrs));
        empDailyHrsMap.set(totalWorkingDays, empHrs);//UC 9
        empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs));//UC 9

    } 
    // UC  7 calculation
    let empWage = calcDailyWage(totalEmpHrs);
    console.log("UC 6 Total Working Days : "+totalWorkingDays+ " Total Hrs : "+totalEmpHrs+" Emp Wage : "+empWage);

  
    //Uc 7 Array Helper function 
    //Uc 7 a calc total wage using Array for Each traversal or reduce menthod

    let totEmpWage =0;
    function sum(dailyWage) 
    {
        totEmpWage += dailyWage;
    }
    empDailyWageArr.forEach(sum);
    console.log("UC 7 A = total days : " +totalWorkingDays+" Total Hours : "+totalEmpHrs+ " Emp Wage : "+totEmpWage);

    function totalWage(totalWage, dailyWage)
    {
        return totalWage + dailyWage;
    }

    console.log("UC 7 A empWAge with reduce: "+empDailyWageArr.reduce(totalWage,0));

    //UC 7 B Show the Day along with Daily Wage using Array map helper function 

    let dailyCntr=0;
    function mapDaywithWage(dailyWage)
    {
        dailyCntr++;
        return dailyCntr+"= "+dailyWage;
    }
    let mapDaywithWageArr=empDailyWageArr.map(mapDaywithWage);
    console.log("UC 7 B -Daily Wage Map")  
    console.log(mapDaywithWageArr);

    //UC 7 C -show Days when Full time wage of 160 were earned
    function fulltimeWage(dailyWage)    
    {
        return dailyWage.includes("160");
    }
    let fullDayWageArr=mapDaywithWageArr.filter(fulltimeWage);  
    console.log("UC 7 C -Daily Wage Filter when Fulltime Wage is Earned");
    console.log(fullDayWageArr);

    //UC 7 D find the first occurance when full time wage was earned find function
    function findFulltimeWage(dailyWage)
    {
        return dailyWage.includes("160");
    }
    console.log("UC 7 D First time FullTime wage was earned on Day : "+mapDaywithWageArr.find(findFulltimeWage));

    //UC 7 E Check if there is any full time Wage
    function isAllfullTime(dailyWage)
    {
        return dailyWage.includes("160");
    }
    console.log("UC 7 E check all element have full time : "+ fullDayWageArr.every(isAllfullTime));

    //UC 7 F Check if there is any part time Wage
    function  isAnyPartTime(dailyWage)
    {
        return dailyWage.includes("80");
    }
    console.log("UC 7 F Check for Part time: "+mapDaywithWageArr.some(isAnyPartTime));

    //UC 7 G find the number of days the Employee Worked

    function totalDaysWorkingDays(Num_of_Working_Days,dailyWage)
    {
        if(dailyWage>0) return Num_of_Working_Days+1;
        return Num_of_Working_Days;
    }
    console.log("UC 7 G Number of Days Worked :"+empDailyWageArr.reduce(totalDaysWorkingDays,0));

    //UC 8 Map Functions

    console.log("Uc 8  -emp Wage Map totalhours: "+Array.from(empDailyWageMap.values()).reduce(totalWage,0));

    //UC 9
    const findTotal=(totalVal , dailyVal)=>{
        return totalVal + dailyVal;
    }
    let totalHours=Array.from(empDailyHrsMap.values()).filter(dailyHours => dailyHours).reduce(findTotal,0 )
    let totalSalary=empDailyWageArr.filter(dailyWage => dailyWage >0).reduce(findTotal,0);
    console.log("UC 9A -Emp Wage with Arrow :"+
                "Total Hours : "+ totalHours +" Total Wage : "+totalSalary);

    let nonWorkingDays = new Array();
    let partWorkingDays = new Array();
    let fullWorkingDays =new Array();


    empDailyHrsMap.forEach( (value,key,map) =>{
            if(value == 8) fullWorkingDays.push(key);
            else if(value ==4) partWorkingDays.push(key);
            else nonWorkingDays.push(key);
        });
  
    console.log("Full Working Days : "+fullWorkingDays);
    console.log("Part Working Days : "+partWorkingDays);
    console.log("Non Working Days : "+nonWorkingDays);
}

 //UC 10 Object Creation
 let totalEmpHrs = 0;
 let totalWorkingDays=0;
    let empDailyHrsAndWageArr= new Array();
    while(totalEmpHrs <= Max_Hrs_in_Month &&
        totalWorkingDays < Num_of_Working_Days)
        {
            totalWorkingDays++;
            let empCheck =Math.floor(Math.random() * 10)%3;
            let empHrs=getWorkingHours(empCheck);
            totalEmpHrs += empHrs;
            empDailyHrsAndWageArr.push(
            {
                dayNum:totalWorkingDays ,
                dailyHours:empHrs,
                dailyWage: calcDailyWage(empHrs),
                toString(){
                return '\nDay'+this.dayNum+'=> Working Hours is'+this.dailyHours+'And Wage Earned = ' +this.dailyWage},
            });
            
        }
console.log("UC 10 Showing Daily Hours Worked and Wage Earned:"+empDailyHrsAndWageArr);

//UC 11 A and UC 11 D using Object Functions along with Arrow Functions

let totalWages = empDailyHrsAndWageArr
                .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                .reduce((totalWage, dailyHrsAndWage)=>totalWage += dailyHrsAndWage.dailyWage,0);

let totalHours = empDailyHrsAndWageArr
                .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage>0)
                .reduce((totalHours,dailyHrsAndWage)=> totalHours += dailyHrsAndWage.dailyHours,0)
                
console.log("\nUC 11 A Total Hours : " +totalHours+ " Total Wages :"+totalWages);

process.stdout.write("\nUC 11 B Logging Full Work Days\n")
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                     .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

let partWorkingDayStrArr = empDailyHrsAndWageArr
                            .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                            .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\n UC 11 C PartWorkingDaysStrings \n: "+partWorkingDayStrArr);

 let nonWorkingDayNums = empDailyHrsAndWageArr
                         .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours ==0)
                         .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("\nUC 11 D WorkingDayNums \n:"+nonWorkingDayNums);
