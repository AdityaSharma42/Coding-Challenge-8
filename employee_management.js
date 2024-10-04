//Task 1: Create an Employee Class
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getDetails(){
        return `The employee's name is ${this.name}. They work as a ${this.position} in the ${this.department} department, making a salary of $${this.salary}.`;
    
    }
}

