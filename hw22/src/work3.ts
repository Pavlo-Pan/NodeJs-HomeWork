export namespace UserManagement {
  export namespace Admin {
    export class AdminUser {
      constructor(
        public name: string,
        public email: string,
        public isSuperAdmin: boolean = false
      ) {}

      grantSuperAdmin(): void {
        this.isSuperAdmin = true;
      }

      revokeSuperAdmin(): void {
        this.isSuperAdmin = false;
      }

      displayInfo(): void {
        console.log(
          `Name: ${this.name}, Email: ${this.email}, SuperAdmin: ${this.isSuperAdmin}`
        );
      }
    }
  }
}
