export namespace Finance {
  export class LoanCalculator {
    static calculateMonthlyPayment(
      principal: number,
      annualRate: number,
      years: number
    ): number {
      const monthlyRate = annualRate / 12 / 100;
      const totalPayments = years * 12;
      return (
        (principal * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -totalPayments))
      );
    }
  }

  export class TaxCalculator {
    static calculateTax(income: number, taxRate: number): number {
      return (income * taxRate) / 100;
    }
  }
}
