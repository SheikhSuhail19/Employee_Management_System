export class Employee {
    id!: number; // Property will be initialized elsewhere
    firstName!: string;
    lastName!: string;
    emailId!: string;

    constructor() {
        this.id = 0; // Initialize with default values or appropriate values
        this.firstName = '';
        this.lastName = '';
        this.emailId = '';
    }
}

