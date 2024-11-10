import { DioAccount } from "./DioAccount";

export class NewDioAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
      }
    deposit = (amountToDeposit: number): void => {
        if (this.getStatus()) {
            this.balance += (amountToDeposit + 10)
            console.log('Voce depositou ' + (amountToDeposit + 10))
        }
    }
}