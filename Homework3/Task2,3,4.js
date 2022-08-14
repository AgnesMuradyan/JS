const prompt = require('prompt-sync');
const input = prompt();


//2
function Employee(lastName, salary, birthDay, employmentDate){
    this.lastName = lastName;
    this.salary = salary;
    this.birthDay = new Date(birthDay);
    this.employmentDate = new Date(employmentDate);

    this.getExperience = function () {

        let curr = new Date(this.employmentDate);
        let years = new Date().getFullYear() - curr.getFullYear();
        curr.setFullYear(curr.getFullYear() + years);
        if (curr > new Date())
            years--;
        let months = new Date().getMonth() - curr.getMonth();
        curr.setMonth(curr.getMonth() + months);
        if (curr > new Date())
            months--;
        if (months < 0)
            months += 12;
        let allMonths = [31, (this.employmentDate.getFullYear() % 4 === 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let days = new Date().getDate() - curr.getDate();
        if(days < 0){
            days += allMonths[this.employmentDate.getMonth()];
        }

        return `Experience:  ${years} years, ${months} months, ${days} days`;

    };

    this.getExperienceInDays = function () {
        return "Experience in days:  " + Math.floor((new Date() - this.employmentDate) / (1000 * 60 * 60 * 24));
    };

    this.getExperienceInMonths = function (){
        return new Date().getMonth() - this.employmentDate.getMonth()
            + 12 * (new Date().getFullYear() - this.employmentDate.getFullYear())
    };

    this.getAge = function () {
        let curr = new Date(this.birthDay);
        let years = new Date().getFullYear() - curr.getFullYear();
        curr.setFullYear(curr.getFullYear() + years);
        if (curr > new Date())
            years--;
        return `${years} years old`;

    };

    this.getDaysUntilRetirement = function () {
        let retirementDate = new Date(this.birthDay.valueOf());
        retirementDate.setFullYear(this.birthDay.getFullYear() + 65);
        let curr = Math.floor((retirementDate - new Date())/ (1000 * 60 * 60 * 24));
        return `${curr} days until retirement`;

    };

    this[Symbol.toPrimitive] = function(hint) {
        if (hint === "number")
            return this.salary;
        if (hint === "string")
            return this.lastName;
        return "BirthDay " + this.birthDay.toString() + " employment Date " + this.employmentDate.toString();
    };
}


//3
function Production (name, monthlyProfit, monthlySpendings) {
    this.name = name;
    this.salarySum = 0;
    this.monthlyProfit = monthlyProfit;
    this.monthlySpendings = monthlySpendings;
    this.employees = [];

    this.addEmployee = function (employee) {
        this.employees.push(employee);
        this.salarySum += employee.salary * employee.getExperienceInMonths();
        this.monthlyProfit -= employee.salary * 0.5;
        this.monthlySpendings += employee.salary;

    };

    this.deleteEmployee = function (employee) {
        let curr = this.employees.indexOf(employee);
        if (curr !== -1) {
            this.employees.splice(curr, 1);
            this.salarySum -= employee.salary * employee.getExperienceInMonths();
            this.monthlySpendings -= employee.salary;
            this.monthlyProfit += employee.salary * 0.5;
        }
        else
            return "There is no such employee";
    };

    this.getAvgSalary = function () {
        let avg = 0;
        for (let employee of this.employees) {
            avg += employee.salary;
        }
        return avg / this.employees.length;
    };

    this[Symbol.toPrimitive] = function(hint) {
        if (hint === "number")
            return this.monthlyProfit;
        if (hint === "string")
            return this.name;
        return this.employees.toString();
    };
}


//4
let esim = new Production ("Agnes's factory", 12300000, 54000);

console.log("Input Employees, when you input X, the process will stop")

while (true) {
    let name = input("Please Enter Name:  ");
    if (name === 'X')
        break;
    let salary = input("Please Enter Salary:  ");
    if (salary === 'X')
        break;
    let birthday = input("Please Enter Birth date:  ");
    if (birthday === 'X')
        break;
    let employmentDate = input("Please Enter Employment Date:  ");
    if (employmentDate === 'X')
        break;
    esim.addEmployee(new Employee(name, salary, birthday, employmentDate));
    console.log("New employee is hired");
}
