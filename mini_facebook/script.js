

var database = [
    {
    username : "John",
    password : "awmm416",
    },
    {
    username : "Sally",
    password : "123",
    },
    {
    username : "Mitch",
    password : "456",
    }
];


var newsfeed = [{
    username : "rahul",
    timeline : "So tired from all that learning!"
},
{
    username: "Sally",
    timeline: "Javascript is sooooo cool!"
},
{
    username: "Mitch",
    timeline: "Javascript is preeetyy cool!"
}

];

var userNamePrompt = prompt("What is ur username?");
var passwordPrompt = prompt("What is ur password?");

function isUserValid(username,password){
    for(var i=0;i<database.length;i++){
      if(database[i].username === username && 
          database[i].password === password){
           return true;
        }
    }
    return false;
}

function signIn(username, password){
    if (isUserValid(username,password)){
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username and password");
    }


//     if (user === database[0].username && pass === database[0].password){
//         console.log(newsfeed);
//     }else {
//         alert("Sorry, wrong username and password!");
//     }
}

signIn(userNamePrompt, passwordPrompt);