//Task 1: Create an Employee Class
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getDetails(){
        console.log (`The employee's name is ${this.name}. They work as a ${this.position} in the ${this.department} department, making a salary of $${this.salary}.`);
    
    }
}
//Task 2: Create a Department Class AND
//Task 4: Handle Bonuses for Managers
class department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee){
        if (employee instanceof Employee){
            this.employees.push(employee);
        }
    }
    getDepartmentSalary(){
        return this.employees.reduce((total,employee)=> total + employee.salary,0);
    }
    calculateTotalSalaryWithBonus(){
        return this.employee.reduce((total,employee)=>{
            if (employee instanceof Manager){
                return total+employee.salary + employee.bonus;

            }
            return total+ employee.salary;
        },0);
    }
}
//Task 3: Create a Manager Class that Inherits from Employee
class Manager extends Employee {
    constructor(name, salary, department,bonus) {
        super (name,salary, position, department );
        this.bonus= bonus;
    }
    getDetails(){
        const employeeDetails = super.getDetails();
        console.log (`${employeeDetails}).They got a bonus of $${this.bonus}.`);
    }
}
