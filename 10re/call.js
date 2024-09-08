function setUsername(username){
    // complex DB calls
    this.username = username;
}

function createUser(username, email, password){
    // setUsername(username) // not able to call this function  
    setUsername.call(this.username)


    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@abc.com","123")
console.log(chai);
