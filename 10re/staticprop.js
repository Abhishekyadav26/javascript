class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

    // static stops to give permission to different instence

    static createId(){
        return `123`
    }
}

const abhi = new User("hittesh")
// console.log(abhi.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher('iphone','i@phone.com')
console.log(iphone.logMe());

