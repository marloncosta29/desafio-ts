export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  getStatus = (): boolean =>{
    return this.status
  }

  deposit = (amountToDeposit: number): void => {
    if(this.validateStatus()){
      this.balance += amountToDeposit
      console.log('Voce depositou ' + amountToDeposit)
    }
  }

  withdraw = (amountToWithdraw: number): void => {
    if(this.balance < amountToWithdraw){
      console.log('Saldo insuficiente!')      
      return
    }
    if(this.validateStatus()){
      this.balance -= amountToWithdraw
      console.log(`Voce sacou ${amountToWithdraw}`)
    }

  }

  getBalance = (): void => {
    console.log(`Seu saldo da consta ${this.name} é ${this.balance}`)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
