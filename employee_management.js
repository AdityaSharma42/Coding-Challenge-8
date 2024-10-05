//Task 1: Create an Employee Class
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getDetails(){ //to get the details about the employee
        console.log (`The employee's name is ${this.name}. They work as a ${this.position} in the ${this.department} department, making a salary of $${this.salary}.`);
    
    }
}
//Task 2: Create a Department Class AND
//Task 4: Handle Bonuses for Managers
class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee){//adding an employee to the department
        if (employee instanceof Employee){//checking if the object employee is an instance of Employee
            this.employees.push(employee);//adding the employee to the array
        }
    }
    getDepartmentSalary(){//calculating the total salary of employees within the department
        return this.employees.reduce((total,employee)=> total + employee.salary,0); //adding the salaries of all employees with reduce
    }
    calculateTotalSalaryWithBonus(){//calculating the total of the salary and bonus for the managers
        return this.employees.reduce((total,employee)=>{//adding the salaries and bonuses
            if (employee instanceof Manager){//checking if object employee is an instance of Manager
                return total+employee.salary + employee.bonus; //adding salary and bonus for managers

            }
            return total+ employee.salary;//adding only the salary for the other employees
        },0);
    }
}
//Task 3: Create a Manager Class that Inherits from Employee
class Manager extends Employee { //Manager inherits the properties defined in the Employee class
    constructor(name, salary, position, department,bonus) {
        super (name,salary, position, department );//calling the parent class constructor
        this.bonus= bonus;//assigning a bonus to the manager
    }
    getDetails(){//Overriding the getDetails method to include the bonus in the string
        super.getDetails();
        console.log (`They got a bonus of $${this.bonus}.`);
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

//Display details of all employees
Phil.getDetails();
Dan.getDetails();
Annie.getDetails();
Mel.getDetails();

// Calculate total salary for each department
console.log(`Total salary for accounting: $${Accounting.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for accounting: $${Accounting.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for IT: $${IT.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for IT: $${IT.calculateTotalSalaryWithBonus()}`);