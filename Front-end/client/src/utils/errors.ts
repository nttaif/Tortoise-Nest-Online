import { AuthError } from "next-auth";
export class CustomAuthError extends AuthError{
    static type:string;
    constructor(message?:any){
        super();
        this.type=message;
    }
}
export class InvalidEmailPasswordError extends AuthError{
    static type = "Email/Password invalid!"
}
export class InActiveAccountError extends AuthError{
    static type = "Account is not active!"
}