// useful links
    // https://jsonformatter.org/

    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

const requesturl = 'https://api.github.com/users/abhishekyadav26'
const xhr = new XMLHttpRequest(); // request send to api
xhr.open('GET', requesturl)  
// console.log(xhr.readyState);
let following;
let imageurl;
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText); // JSON.parse will convert data string into json file and json is also type of objects
            // console.log(typeof data); data comes in form of string from server
            // console.log(data)
            following = data.following;
            console.log(data.following);
            // console.log(data); // it will show whole json file from api
            imageurl = data.avatar_url;
            console.log(data.avatar_url);
        }
    }
xhr.send()
const button = document.querySelector('button')

