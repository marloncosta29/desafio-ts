import { CompanyAccount } from './class/CompanyAccount'
import { NewDioAccount } from './class/NewDioAccount'
import { PeopleAccount } from './class/PeopleAccount'

// people account
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(`--------------${peopleAccount.getName()}-----------------`)
peopleAccount.deposit(1200)

// company account
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(`--------------${companyAccount.getName()}-----------------`)
companyAccount.deposit(300)
companyAccount.getLoan(3000)
companyAccount.getLoan(1500)

console.log(companyAccount.getLoanHistory())

// newdio account
const newAccount = new NewDioAccount('New', 99)
console.log(`--------------${newAccount.getName()}-----------------`)

newAccount.deposit(100)
newAccount.getBalance()
newAccount.deposit(100)
newAccount.getBalance()
