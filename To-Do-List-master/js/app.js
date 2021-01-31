// CODE EXPLAINED channel
//Select the Elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//Variables
let LIST = [], id = 0;

//get item from localStorage
/*let data = localStorage.getItem("TODO");
//check if data is not empty
if(data) {
    LIST = JSON.parse(data);
    id = LIST.lengthl;//set the id to the last one in the list
    loadList(LIST); // load the list to the user interface

}else {
    //if data isn't empty
    LIST = [];
    id = 0;
}

//load items to the user's interface
function loadList(array) {
    array.forEach(function(item) {
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

//clear the local storage
clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
})
*/

//Show todays date
const options = {weekday: "long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

function addToDo(toDo, id, done, trash) {

    if(trash) { return; }
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `<li class = "item">
        <i class = "fa ${DONE} co" job = "complete" id = "${id}"></i>
        <p class = "text ${LINE}">${toDo}</p>
        <i class = "fa fa-trash-o de" job = "delete" id = "${id}"></i>
    </li>`;
    const position = "beforeend";
    list.insertAdjacentHTML(position, item);
};


//add an item to the list
document.addEventListener("keyup", function(event) {
    if(event.keyCode == 13) {
        const toDo = input.value;

        //if the input isn't empty
        if(toDo) {
            addToDo(toDo, id, false, false);
            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false

            });
            //add item to localStorage (this code must be added where the List array is updated)
            //!!!!!localStorage.setItem("TODO", JSON.stringify(LIST));

            id++;
        }
        input.value = "";
    }
});

//complete to do
function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;

}
//remove to do
function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}

//target the items created dynamically

list.addEventListener("click", function(event) {
    const element = event.target; //returns the clicked element inside list
    const elementJob = element.attributes.job.value; // complete or delete

    if(elementJob == "complete") {
        completeToDo(element);
    }else if(elementJob == "delete") {
        removeToDo(element);
    }
    //add item to localStorage (this code must be added where the List array is updated)
    //!!!!!localStorage.setItem("TODO", JSON.stringify(LIST));
});


































/*const clear = document.querySelector('.clear');
const dateElement = document.getElementById('date');
const list = document.getElementById('list');
const input = document.getElementById('input');

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";


function addToDo(toDo, id, done, trash) {

    if(trash) {
        return;
    }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const text = `<li class = "item">
                    <i class = "co fa fa-circle-thin ${DONE}" job = "complete" id = "${id}"></i>
                    <p class = "text ${LINE}"> ${toDo} </p>
                    <i class = "de fa fa-trash-o" job = "delete" id = "${id}"></i>
                 </li>`
    const position = "beforeend";
    list.insertAdjacentHTML(position, text);
};

addToDo("Drink Coffee");
addToDo("Eat candies");

let LIST = [];
let id = 0;



document.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        const toDo = input.value;
        if (toDo) {
            addToDo(toDo,id, false,false);
            LIST.push(
                {
                    name: toDo,
                    id: id,
                    done: false,
                    trash: false
                }
            );
            input.value = "";
            id ++;
        }
    }
});

function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    LIST[element.id].done = LIST[element.id].done ? false : true;
};

function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
};

list.addEventListener("click", function(event) {
    let element  = event.target;
    const elementJob = event.target.attributes.job.value; //delete or complete
    if(elementJob == "complete") {
        completeToDo(element);
    } else if(elementJob == "delete") {
        removeToDo(element);

    }
})

//save to-do list to local storage

localStorage.setItem('TODO', JSON.stringify(LIST));
let variable = localStorage.getItem('key');

//restore to-do list from local storage
let LIST, id;
let data = localStorage.getItem("TODO");   //restore our list array
if(data) {
    LIST = JSON.parse(data);
    loadToDo(LIST); //we load the list to the page
    id = LIST.length;
} else {
    LIST = [];
    id = 0;
}

function loadToDo(array) {
    array.forEach(function(item) {
        addToDo(item.name, item.id, item.done, item.trash);
  
    });
}

//clear local storage
clear.addEventListener('click', function() {
    localStorage.clear();
    location.reload(); //reload the page

})

//show the date

let options = {weekday:'long', month:'short', day:'numeric'};
let today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

addToDo('Have Sex');*/

