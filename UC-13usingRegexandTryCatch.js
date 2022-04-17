//UC 13 Regex and using Try Catch
class EmployeePayrollData{
    //constructor 
    constructor(...params)
    {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //getter and setter
    get name() { return this.name; }
    set name(name) 
    {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');//first letter should be Capital
        if(nameRegex=test(name))
        this.name = name ;
        else 
        throw 'Name is Incorrect';
    }

    //method
    toString(){
        const options = {year: 'numeric', month:'long',day: 'numeric'};
        const empDate = !this.startDate ? "undefined ":this.startDate.toLocaleStartDateString("en-US",options);

        return "id="+this.id+ ", name= "+this.name+", salary = "+this.salary+",startDate = "+this.empDate;
    }
}

try
{
    let emp = new EmployeePayrollData(1,"Terrisa",25000,"F",new Date());
    console.log(emp.toString());
}  
catch (e) { console.error(e);
}
