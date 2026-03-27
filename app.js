// var a = 57.005
// console.log(Math.ceil(a));

// console.log(Math.floor(Math.random() *  (10 - 1 + 1) + 1));



// function foo() {
//     console.log("Hello World");
    
// }



// function sum(num1 , num2) {
// console.log();
// var solution = num1 + num2
// return solution
// }


// var call = sum(10, 20)
// console.log(call);




// console.log(document.children.chi);


// var element = document.getElementsByTagName("p")
// element[0].style.color = "red"
// element[1].style.color = "blue"
// element[2].style.color = "green"


// var para = document.getElementById("para")
// console.log(para.innerHTML);

// para.style.color = "#d016b7"



// console.log(document.children[0].children[1]);
// var para = document.children[0].children[1].style.color = "orange"

var std = {
    Name : "Ghulam Mustafa",
    age : 16,
    city : "Karachi",
    email :  "mustafa@gmail.com",

}

// console.log(std["email"]);

// for(key in std){
// console.log(key);
// console.log(std[key]);

// }


var stds = [
    {
        name : "Mustafa",
        fatherName : "Shahzad",
        age : 16
    } ,
     {
        name : "Shafay",
        fatherName : "Shahzad",
        age : 17
    } 
]

// console.log(stds[0]["name"]);
// console.log(stds[1]["name"]);

// for(var val of stds){
// console.log(val["name"]);
// console.log(val["fatherName"]);
// console.log(val["age"]);

// }

var parent = document.getElementById("parent")

fetch("https://fakestoreapi.com/products")
.then(
    function (response) {
console.log(response);
return response.json()
    }
)

.then(
    function (success) {
console.log(success);


for(var i = 0 ; i < success.length ; i++){
console.log(i);
var card = `<div class="card" style="width: 18rem;">
  <img src=${success[i].image}class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${success[i].title}</h5>
    <p class="card-text">${success[i].description}</p>
    <a href="#" class="btn btn-primary">${success[i].price}$</a>
  </div>
</div>`

parent.innerHTML += card

}



    }
)

.catch(
    function (error) {
console.log(error);

    }
)
