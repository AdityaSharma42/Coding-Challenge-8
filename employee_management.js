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
// Create departments
const Accounting = new Department("Accounting");
const IT = new Department("IT");

// Create employees
const Phil = new Employee("Phil", 75000, "Auditor", "Accounting");
const Dan = new Employee("Dan", 80000, "Support Specialist", "IT");
const Annie = new Manager("Annie", 90000, "Accounting Manager", "Accounting", 25000);
const Mel = new Manager("Mel", 110000, "IT Manager", "IT", 30000);

// Add employees to departments
Accounting.addEmployee(Phil);
Accounting.addEmployee(Annie);
IT.addEmployee(Dan);
IT.addEmployee(Mel);

// Calculate total salary for each department
console.log(`Total salary for accounting: $${Accounting.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for accounting: $${Accounting.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for IT: $${IT.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for IT: $${IT.calculateTotalSalaryWithBonus()}`);