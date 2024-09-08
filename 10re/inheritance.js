class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
        
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addcourse(){
        console.log(`A new course wad added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai","chai@teacher.com","1234")
chai.addcourse();

const masalaChai = new User("masala")
masalaChai.logMe()

console.log(chai instanceof Teacher);
