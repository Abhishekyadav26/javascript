// ES6

// function setUserName(username){
//     this.username = username;
// }

class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password

    }

    changeUsername(username){
        return `${this.username.toUpperCase()}`
    }

    encryptPassword(password){
        return `${this.password}abc`
    }
}

const chai = new User("chai","abcd@google.com","0987")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// behind the scene

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password

}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea","tea@google.com","1234")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());