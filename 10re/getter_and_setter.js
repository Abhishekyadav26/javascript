class User{
    constructor (email,password){
        this.email = email;
        this.password = password; 
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        return this._email = value;
    }
    get password(){
        return `${this._password}fbnjfnb` // access karne time yeh milega
    }
    set password(value){
        this._password = value.toUpperCase() // store isse hogya
    }
}

const abhi = new User("abhi@google.in",'hhrhcbh')
console.log(abhi.password);
console.log(abhi.email);
