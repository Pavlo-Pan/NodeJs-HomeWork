abstract class Account {
  balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;
}

export class SavingsAccount extends Account {
  interestRate: number;

  constructor(initialBalance: number, interestRate: number) {
    super(initialBalance);
    this.interestRate = interestRate;
  }

  deposit(amount: number): void {
    this.balance += amount;
    this.balance += this.balance * this.interestRate;
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }
}

export class CheckingAccount extends Account {
  fee: number;

  constructor(initialBalance: number, fee: number) {
    super(initialBalance);
    this.fee = fee;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    const total = amount + this.fee;
    if (total <= this.balance) {
      this.balance -= total;
    } else {
      console.log("Insufficient funds including fee");
    }
  }
}