import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService{
    constructor(loggerService){
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }

    load(){
        for (const user of users) {
            if (user.type == "customer") {
                if(!this.checkValidityforErrors(user)){
                    this.customers.push(user) 
                }
            }
            else if (user.type == "employee") {
                if(!this.checkValidityforErrors(user)){
                    this.employees.push(user) 
                }
            }
            else{
                this.errors.push(new DataError("Wrong user type",user))
            }
        }
    }

    //formik-yup->for react
    checkValidityforErrors(user){
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors = true
                this.errors.push(new DataError(`Validation problem. ${field} is required`,user))
            }
        }
        if(Number.isNaN(Number.parseInt(+user.age))){
            hasErrors = true
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`,user))
        }
        return hasErrors
    }

    // checkEmployeeValidityforErrors(user){
    //     let requiredFields = "id firstName lastName age city salary".split(" ")
    //     let hasErrors = false
    //     for (const field of requiredFields) {
    //         if(!user[field]){
    //             hasErrors = true
    //             this.errors.push(new DataError(`Validation problem. ${field} is required`,user))
    //         }
    //     }
    //     if(Number.isNaN(Number.parseInt(user.age))){
    //         hasErrors = true
    //         this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`,user))
    //     }
    //     return hasErrors
    // }

    add(user){
        if (user.type == "customer") {
            if(!this.checkValidityforErrors(user)){
                this.customers.push(user) 
            }
        }
        else if (user.type == "employee") {
            if(!this.checkValidityforErrors(user)){
                this.employees.push(user) 
            }
        }
        else{
            this.errors.push(new DataError("Wrong user type",user))
        }
        this.loggerService.log(user)
    }

    list(){
        return this.customers
    }

    getCustomerById(id){
        return this.customers.find(u=>u.id === id)
    }

    getCustomersSorted(){
        return this.customers.sort((customer1,customer2)=>{
            if(customer1.firstName>customer2.firstName){
                return 1;
            }else if(customer1.firstName===customer2.firstName){
                return 0;
            }else{
                return -1
            }
        })
    }
}