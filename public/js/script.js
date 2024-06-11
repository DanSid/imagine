const myButton = document.getElementById('btn');
myButton.onclick = function () {
const name = prompt('Enter your full name.');
document.getElementById('name').innerText = name;
document.getElementById('name').style.backgroundColor = 'red';
}

//Variables
const pi = 3.142;
let name = 'Cyber Grogu';
let age = 219;
let present = false;
console.log(name);
//Objects
const car ={
    numberPlate:'GR-324-24',
    model:'Ferari',
    color:'Black',
    weight: 50,
    weightUnit: 'KG',
    owner : {
        name:'Jay',
       driver : {
        name: 'Kojo',
       }
    }
}
console.log(car.numberPlate);
car.owner.driver.name = 'Naruto Uzimaki'
console.log(car.owner.driver.name);
console.log(car);




const tweet1 ={
    text:'I am learning Js today.',
    likes: 5,
    shares: 2,
    retweet: 1
  }
  
  const tweet2 ={
    text:'I am learning Arrays today.',
    likes: 15,
    shares: 12,
    retweet: 7
  }
  
  const tweets = [];
  
  tweets.push(tweet1);
  
  tweets.push(tweet2);
  
  tweets.length;
  
  // tweets[1];
  
  // Dates
  // const today = new Date();
  // today.toString();
  // console.log(today);
  
  const today = new Date();
  today.toString();
  today.toLocaleDateString();
  today.getHours()
  
  // If Else statments
  if (today.getHours() == 16 ){
    console.log('Class has ended!')
  }else{
      console.log('Class is in session!')
  }
  
  // For loop
  for (let i = 0; i<=9; i++) {
  console.log('Notify friends!', i);
  }


  // functions
// defining functions

function login(username, password){
  if (username == 'Grogu' && password == '1234'){
    return 'User is logged in !';
  }else if(username != 'Grogu'){
    return 'Invalid username'
    
  }else if(password != '1234'){
    return 'Invalid password!';
    
  }else{
    return 'Invalid username or password!';
  }
  }
  
  // Invoking functions
  login('Grogu', '1234')
  
  // Basic arithmatic
  
  4 + 3;
  9-3;
  45*4;
  76/5;
  43%9;
  
  // Comparison operators
  3 ===3;
  2 !==4;
  4!==4;
  
  // Built-in Math functions
  Math.round(88/32);
  Math.floor(88/32);
  Math.ceil(88/32);
  Math.random();
  Math.max(34,53,68,39,77);
  
  // Handling user inputs
  24000 + Number('123');
  

// String Concatenation
const firstName = 'Micheal';
const lastName = 'Joe';
// firstname+ ' ' + lastname;
firstName.trim() + ' ' + lastName.trim();

// Template literal
`${firstName.trim()} ${lastName.trim()}`; 

// String methods
firstName.length;
lastName.length;

`${firstName.trim()} ${lastName.trim()}`.length;

// Upper Case
firstName.toUpperCase();
 
(firstName + ' ' + lastName).toUpperCase();


// CharAt
lastName.charAt(1)

`${firstName.trim()} ${lastName.trim()}`.charAt(0);
`${firstName.trim().charAt(0)} ${lastName.trim().charAt(0)}`;

// String conversion
String(2014)





// Write a function that will add a participant to our Google Classroom

const participants = [];

function addParticipant(email) {
 const firstname = 'Dan'
 const lastname = 'Sidsaya';
  let fullname = firstname + ' ' +lastname;
  // Check if email was not provided
  if(email ===null || email === undefined){
    return 'Email not provided!';
  }
  // Check if email is valid
  if(!email.includes('@')){
    return 'Invalid email is provided'
  }
  // Add email to the participants
  participants.push(email, firstname, lastname, fullname);
  // Notify them via mail
  console.log(`Notification sent to ${email}`);
  
  // Return response
  return 'Participant Added';
}
 addParticipant('dansidsaya@gmail.com')

console.log(participants)
console.log(participants[0])

// Arrays in JavaScript
const alphabets=['A', 'B', 'C', 'D'];
alphabets;
alphabets.join(' ');
alphabets.join (' ').split(' ');





// Write a function that will take firstname, lastname and return fullname

// function mine(){
//  const first_name = 'Grogu';
//  const last_name = 'Cyber';
//  let full_name = first_name + ' ' + last_name;
//   console.log(full_name)
// }

// mine();



// function mine(first_name, last_name){
//  // const first_name = 'Grogu';
//  // const last_name = 'Cyber';
//  let full_name = first_name + ' ' + last_name;
//   if (first_name == null && last_name ==null){
//     return 'User Firstname and Lastname is not given'
//   } 
//   console.log(full_name)
// }

// mine('Dan','Sid');




// Write a function that will take a user with firstname, lastname and return fullname

// const user ={
//   firstname: 'Cyber',
//   lastname: 'Grogu'
// }

// function name(user){
//   return `${user.firstname} ${user.lastname}` 
// }

// name(user);

// // Array map
// const users = [
//   {firstname: 'Lucy', lastname: 'Zubermendi' },
//   {firstname: 'Cyber', lastname: 'Harley' },
//   {firstname: 'Monkey', lastname: 'Guy' },
//   {firstname: 'Enock', lastname: 'Nephtah' },
//    {firstname: 'Mark', lastname: 'Zugerburg' }
// ]


// users.map(name);


// Write a function that will take a user with firstname, lastname and return fullname
// Transformation
const user ={
  firstname: 'Cyber',
  lastname: 'Grogu'
}

function name(user){
    // To bring only firstname
  // return user.firstname
  // To show all items in the object
  return {
    ...user,
    fullname: `${user.firstname} ${user.lastname}` 
  }
}

name(user);

// Array map
const users = [
  {firstname: 'Lucy', lastname: 'Zubermendi' },
  {firstname: 'Cyber', lastname: 'Harley' },
  {firstname: 'Monkey', lastname: 'Guy' },
  {firstname: 'Enock', lastname: 'Nephtah' },
   {firstname: 'Mark', lastname: 'Zugerburg', phone:'055323233'}
]


users.map(name);


//  Map and return squares of numbers
function square (number){
  return number ** 2;
}

const numbers = [0, 1, 2, 3, 4, 5]

numbers.map(square)


// Filter and return even numbers
function even (number){
  return  number % 2 === 0;
}
numbers.filter(even)








