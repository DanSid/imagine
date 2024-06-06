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
  