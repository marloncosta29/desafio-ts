import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  private value: number = 0
  private loanHistory: string = ''

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoanValue = (): number =>{
    return this.value
  }

  getLoanHistory = (): string =>{
    return this.loanHistory
  }


  getLoan = (loanValue: number): void => {
    if(this.getStatus()){
      this.deposit(loanValue)
      this.value += loanValue
      this.loanHistory += `Feito emprestimo de ${loanValue}.\n`
    }
  }
}
