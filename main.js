///////////////////////////////////////////////////////////////
//DOM practce
/*
document.title="Learning javaScript";
//DOM challenge
//start header
let header = document.createElement("header");
let logo = document.createElement("div");
let list = document.createElement("ul");
let homeItem = document.createElement("li");
let aboutItem = document.createElement("li");
let serviceItem = document.createElement("li");
let contactItem = document.createElement("li");
let script = document.getElementsByTagName("script");

//header style and class
header.className="header";
header.style.cssText="display:flex;justify-content:space-between;padding:0 20px;align-items:center;background-color:white;";
//add logo text
let logotxt = document.createTextNode("Elzero");
//add text to the logo
logo.appendChild(logotxt);
logo.className ="logo";
logo.style.cssText ="color:green;font-size:28px;font-weight:bold";
//add list class Name
list.className="header-list";
list.style.cssText="list-style:none;padding:0;color:#888;display:flex;font-weight:bold;";
//add list text
let homeTxt =document.createTextNode("Home");
let aboutTxt =document.createTextNode("About");
let serviceTxt =document.createTextNode("Service");
let contactTxt =document.createTextNode("Contact");
//add text to each list item
homeItem.appendChild(homeTxt);
aboutItem.appendChild(aboutTxt);
serviceItem.appendChild(serviceTxt);
contactItem.appendChild(contactTxt);
list.appendChild(homeItem);
list.appendChild(aboutItem);
list.appendChild(serviceItem);
list.appendChild(contactItem);
//add item css
homeItem.style.cssText="display:inline-block;margin-right:20px;";
aboutItem.style.cssText="display:inline-block;margin-right:20px;";
serviceItem.style.cssText="display:inline-block;margin-right:20px;";
contactItem.style.cssText="display:inline-block;margin-right:20px;";
//add logo the header
header.appendChild(logo);
header.appendChild(list);
//End header
// start content section
let content = document.createElement("content");
content.className ="content";
content.style.cssText="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px;background-color: #eee;padding:20px;";
for(let i=0; i<15;i++) {
    let box = document.createElement("div");
    box.style.cssText="display:flex;flex-direction:column;background-color:white;justify-content:center;align-items:center;color:#888;font-size:17px;"
    box.innerHTML=`<span style="display:inline-block;color:black;font-size:30px;font-weight:bold;">${i+1}</span> Product`;
    content.appendChild(box);
}
// end content section
//start footer section
let footer = document.createElement("footer");
footer.className="footer";
footer.textContent="@2023 copyright"
footer.style.cssText="display:flex;justify-content:center;align-items:center;background-color:green;color:white;padding:20px;font-weight:bold;";
console.log(footer);
//end footer section
//add footer to the body
document.body.appendChild(footer);
//add content to the body
document.body.prepend(content);
//add header to the body
document.body.prepend(header);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//BOM introduction
var createCounter = function(n) {
    return function() {
        let counter = n ;
        for(const i = 0; i< n+5 ; i++) {
            counter++;
        }
    };
};

let counter = function(n) {
    return function() {
        let count = n;
        while(count < n+4) {
            return count
        }

    };
};
let reuslt = counter(5);
console.log(reuslt);
*/

/*

let btn = document.getElementById("newPost");
let cont = document.getElementById("cont");
console.log(cont);
btn.onclick = function() {
    let newBox = document.getElementById("box").cloneNode(true);
    cont.appendChild(newBox);
};

var mergeAlternately = function(word1, word2) {
    let max=word1.length + word2.length;
    console.log(max);
    let merged="";
    let i =0;
    while(i<max) {
        if(i== word1.length && i !=word2.length) {
            merged += word2[i];
            i++;    
        }
        else if (i== word2.length && i != word1.length) {
            merged += word1[i];
            i++;
        }
        else {
            merged += word1[i];
            merged += word2[i];
            
        }
        i++;
    }
    return merged;
};

let res = mergeAlternately("ab","efg");
console.log(res);

var maxProfit = function(prices) {
    let buy = true;
    let buyMemo = 0;
    let sell = false;
    let max =0;
    if(buy === false && sell ===false && buyMemo === 0) {
        console.log("you must buy first to execute");
    }
    else if(buy === true && sell===false) {
        console.log("Congrats you buy!");
        buyMemo=1;
        sell = true;
    }
    else if(buy === false && sell===true && buyMemo===1) {
        console.log("congrats  sold!")
    }
    else if(buy === false && sell===true && buyMemo===0) {
        console.log("you must buy first to sell");
    } 
    else {
        max =0;
    }
    return max;
};
let arr = [1,2,3,1,5];
maxProfit(arr);
*//*
let div1 = document.getElementById("elzero");
let div2 = document.getElementsByTagName("div")[0];
let div3 = document.getElementsByClassName("element")[0];
let div4 = document.getElementsByName("js")[0];
console.log(div1);
console.log(div2);
console.log(div3);
console.log(div4);
let a = document.querySelectorAll("a")[1];
console.log(a);
let lnk = document.links[1];
lnk.classList.add("desire");
console.log(lnk);
/*---------------------------------------------------*/
/*----------------------------------------------------
let img = document.querySelectorAll("body div img");
console.log(img[0]);
console.log(img[1]);

for(let i=0;i<img.length; i++){
    img[i].setAttribute("src","https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
    img[i].setAttribute("alt","elzero logo");
}
/*--------*----------------------------------------------*/
/*
let myIn = document.getElementsByName("dollar")[0];

let myData ;
myIn.oninput = function() {
    myData = myIn.value;
    let dollar = myData;
    //let pound = myData * 15.6;
    let pound = myData * 40;
    let myDiv = document.getElementsByClassName("result")[0];

    myDiv.innerHTML =` {${dollar}} USD Dollar = {${pound}} Egyptian Pound`;
}
 */
/*------------------------------------------------
let div1= document.getElementsByClassName("one")[0];
let titleTemp1 =div1.getAttribute("title");
let txtTemp1 = div1.textContent;
let div2 =document.getElementsByClassName("two")[0];
let titleTemp2 =div2.getAttribute("title");
let txtTemp2 = div2.textContent;
let numTwo = document.getElementsByTagName("div").length;
div1.setAttribute("title",`${titleTemp2}`);
div1.textContent =`${txtTemp2}`;

div2.setAttribute("title",`${titleTemp1}`);
div2.textContent=`${txtTemp1} ${numTwo}`;
/*------------------------------------------------*/
/*------------------------------------------------
let img = document.getElementsByTagName("img");
for(let i=0;i<img.length ;i++) {
    if(img[i].getAttribute("alt") != null) {
        img[i].setAttribute("alt","old");
    }
    else {
        img[i].setAttribute("alt","elzero new");
    }
}
/*-----------------------------------------------*/
/*
let myForm = document.getElementsByTagName("form");

let numEle =document.getElementsByName("elements")[0];
console.log(numEle);
let numberOfElementsData ;
numEle.onblur = function(){
    numberOfElementsData=numEle.value ;
    console.log(numberOfElementsData);
}
let txtEle = document.getElementsByName("texts")[0];
console.log(txtEle);
let txtData;
txtEle.onblur =function () {
    txtData = txtEle.value;
    console.log(txtData);
}



let mySelect = document.querySelector(" select");
let selectData;
console.log(mySelect);
mySelect.addEventListener("change", function(){
    selectData=mySelect.options[mySelect.selectedIndex].text;
    console.log(selectData);
});
let next = document.getElementById("next");
next.onsubmit = function(e) {
    e.preventDefault();
}
*/
/*---------------------------------------------------------------
let add = document.querySelector(".assign .classes-to-add");
console.log(add);

add.onblur = function() {
    let classData;
    classData = add.value;
    let seprated = classData.split(" ");
    for(let i =0; i<seprated.length;i++){
        let curr = document.querySelector(".element.current");
        curr.classList.add(seprated[i]);

        let newSpan= document.createElement("span");
        let spanTxt = document.createTextNode(seprated[i]);
        newSpan.append(spanTxt);
        let myDiv = document.querySelector(".classes-list div");
        myDiv.append(newSpan);
    }
    console.log(seprated);
    add.value = "";
}

let remove = document.querySelector(".assign .classes-to-remove");

remove.onblur = function(){
    let classData;
    let myDiv = document.querySelector(".classes-list div");
    classData = remove.value;
    let seprated = classData.split(" ");
    console.log(seprated);
    for(let i =0; i<seprated.length;i++){
        let curr = document.querySelector(".element.current");
        curr.classList.remove(seprated[i]);
        let span = document.querySelector(".classes-list div span");
        if(span.textContent === classData){
            span.remove();

        }
        else {
            let warn = document.createElement("h3");
            let txt = document.createTextNode("No Classes to Show");
            warn.appendChild(txt);
            myDiv.appendChild(warn);
        }
    }
    console.log(seprated);
    remove.value ="";
}
/*------------------------------------*-------------------------------*/
/*-------------------------------------------------------------------*
let p = document.querySelector(".our-element + p");
console.log(p);
p.remove();
let ourDiv = document.querySelector(".our-element");

let beforeDiv = document.createElement("div");
beforeDiv.className = "start";
beforeDiv.setAttribute("title","start Element");
beforeDiv.setAttribute("data-value","Start");
beforeDiv.textContent ="Start";
ourDiv.before(beforeDiv);

let afterDiv = document.createElement("div");
afterDiv.className = "end";
afterDiv.setAttribute("title","End Element");
afterDiv.setAttribute("data-value","End");
afterDiv.textContent ="End";
ourDiv.after(afterDiv);
/*---------------------------------------------------------------------*
let div =document.getElementsByTagName("div")[0];
console.log(div.textContent.split("\n")[3].trimStart());
/*-------------------------------------------------------------------------*/
/*/
let myDiv= document.getElementsByTagName("div")[0];
myDiv.onclick = function() {
    console.log(`this is ${myDiv.tagName}`);
}

let span = document.getElementsByTagName("span")[0];
span.onclick = function() {
    console.log(`this is ${span.tagName}`);
}
let p = document.getElementsByTagName("p")[0];
p.onclick = function() {
    console.log(`this is ${p.tagName}`);
}

let article = document.getElementsByTagName("article")[0];
article.onclick = function() {
    console.log(`this is ${article.tagName}`);
}

let section = document.getElementsByTagName("section")[0];
section.onclick = function() {
    console.log(`this is ${section.tagName}`);
}
*/
/*
let member ={
    name: "elzero",
    age: 38,
    country: "Egypt",
    fullDetails: function() {
        return`my name is ${this.name}, my age is ${this.age}, i live in ${this.country} `;
    }
};




// Create Your Object Here

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt
/*------------------------------------------------
// Method One
// Create Your Object Here
let objMethodOne = {
    hi: function() {
        console.log("hello1");
    }
};
console.log(objMethodOne.hi()); // "Method One"

// Method Two
// Create Your Object Here
objMethodTwo = Object.create({
    hi: function(){
        return "hello2";
    }
});
console.log(objMethodTwo);

console.log(objMethodTwo.hi()); // "Method Two"

// Method Three
// Create Your Object Here
let objMethodThree = Object.assign({
    hello: function(){
        console.log('Hello3');
    }
},objMethodTwo);
console.log(objMethodThree.hello()); // "Method Three"

// Method Four
// Create Your Object Here

//console.log(objMethodFour.property); // "Method Four"

let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({a},threeNums,twoNums);
console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
/*
let seconds = document.querySelector(".secs");
let minutes = document.querySelector(".mins");

function countDown() {
    seconds.innerHTML -=1;
    if(seconds.innerHTML === "0" && minutes.innerHTML !== "0") {
        seconds.innerHTML="60";
        minutes.innerHTML-=1;
    }
    else if ( minutes.innerHTML === "0" && seconds.innerHTML === "0") {
        clearInterval(counter)
    }
}
let counter = setInterval(countDown, 1000);
*//*
let btn = document.querySelector("button");

window.onscroll = function() {
    if(window.scrollY >= 600) {
        btn.style.display="block";
        
    }
    else {
        btn.style.display="none";
    }
};
btn.onclick = function(){
    window.scrollTo({
        left: 0,
        top: 0,
        behavior:"smooth",
    })
};*/
/*
let data =window.prompt("print number from - to ", "Example: 5-20");

let sep = data.split("-");
console.log(sep);
let max=0,min=0;
if(sep[0]>sep[1]) {
    max = sep[0];
    min = sep[1];
    console.log("0 bigger than 1");
}
else if(sep[1]> sep[0]) {
    max = sep[1];
    min = sep[0];
    console.log("1 bigger than 0");
}else {
    max = sep[0];
    min = sep[1];
    console.log("equal");
}
let diff = max - min;
console.log(diff);
for( let i=min;i<=max;i++){
    document.write(`<p>el: ${i} </p>`);
}*/
/*
let div = document.querySelector("div");

function countDown() {
    div.innerHTML-=1;
    if(div.innerHTML ==="5") {
        window.open("https://elzero.org","","width:400,height:400",);
    }
    else if (div.innerHTML ==="0") {
        clearInterval(counter);
    }
}
let counter = setInterval(countDown,1000);
*/
/*
let lis = document.querySelectorAll("ul li");
let div = document.querySelector(".experiment");
console.log(div);

if(window.localStorage.getItem("color")) {
    //[1]
    div.style.backgroundColor = window.localStorage.getItem("color");
    //[2]remove all active class from li
    lis.forEach((li) =>{
        li.classList.remove("active");
    });
    //[3] add active class to clicked li
    document.querySelector(`[data-color =${window.localStorage.getItem("color")}]`).classList.add("active");

}
lis.forEach((li) =>{
    li.addEventListener("click",(e)=> {
        console.log(e.currentTarget.dataset.color);
        //remove all active class from li
        lis.forEach((li) =>{
            li.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        // add current color to local storage
        window.localStorage.setItem("color",e.currentTarget.dataset.color);
        // change background of div
        //div.style.backgroundColor = e.currentTarget.dataset.color;
        div.style.backgroundColor = window.localStorage.getItem("color");
        
    });

});

*/
/*-----------------------------------------------------------------------*/
//JSON parse() and Stringfy()
/*
const note = {
    id: 1,
    title: "Sample Note",
    content: "This is a sample note."
};
console.log(note);  
const noteString = JSON.stringify(note);
localStorage.setItem("note", noteString);
console.log(noteString);
window.localStorage.setItem("note", noteString);

let retreived = window.localStorage.getItem("note");
let parsed = JSON.parse(retreived);
console.log(parsed);
console.log(parsed.id);
*/
/*-------------------------------------------------------*/
// note app assignment
/*
let form= document.querySelector(".form");
let input = document.querySelector(".form .input-task");
let submit = document.getElementById("submit");
let tasks = document.querySelector(".tasks");
//console.log(tasks.lastElementChild);

submit.onclick = function() {
    if(!window.localStorage.getItem("note")) { //there is no key in localstorage
        let check = input.value;
        if(check.length > 0) {
            let tempObj = {title: input.value};
            console.log(tempObj);
            let obj = JSON.stringify(tempObj);
            console.log(obj);
            window.localStorage.setItem("note",obj);

        }
        else { //empty input field

        }
        
    }
    else { //there is key in local storage
        console.log("no");
    }
}*/
/*
let fonts = document.getElementById("fonts");
//console.log(fonts);
let color = document.getElementById("color");
//console.log(color);
let fontSize = document.getElementById("fontSize");
//console.log(fontSize);
let div = document.getElementsByTagName("div")[0];
console.log(div);
let submit = document.getElementById("submit");
let array = [];
submit.onclick = function() {   
    let obj ={
        font : fonts.value,
        col : color.value,
        size :fontSize.value
    }
    console.log(obj);
    let temp = JSON.stringify(obj);
    array.push(temp);
    console.log(array);
    window.localStorage.setItem("arr",array);
    
   // document.body.style.cssText = `font-family: ${font},sans-serif`;
    //window.localStorage.setItem("font", font);
}*/
let input = document.querySelector(".form .input-task");
let submit = document.querySelector(".form .submit");
let tasksDiv = document.querySelector(".tasks");

//empty array to store the task
let arrayOfTasks = [];
//check if there is data in local storage
if(window.localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(window.localStorage.getItem("tasks"));
}
//Trigger get data from local storage
getDataFromLocalStorage();

submit.onclick = function() {
    if(input !== "") {
        addTaskToArray(input.value); //add task to array of tasks
        input.value = ""; //empty input field
    }
}
//Click on Task Element
tasksDiv.addEventListener("click",(e)=>{
    if(e.target.classList.contains("del")) {
        //remove task from local storage
        deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
        //remove task eleement from page
        e.target.parentElement.remove();
    }
    if(e.target.classList.contains("task")) {
        // update the status in local storage
        toggleTaskStatusWith(e.target.getAttribute("data-id"));
        //toggle task from incomplete to done
        e.target.classList.toggle("done");
    }
});


function addTaskToArray(taskText) {
    //Task data
    const task ={
        id: Date.now(),
        title: taskText,
        completed: false
    }
    //push task to array of tasks
    arrayOfTasks.push(task);
    //add task elements to page
    addElementsToPageFrom(arrayOfTasks);
    // add tasks to local storage
    addDataToLocalStorageFrom(arrayOfTasks);
}

function addElementsToPageFrom(arrayOfTasks) {
    //empty the tasks div
    tasksDiv.innerHTML="";
    //looping on array of tasks
    arrayOfTasks.forEach((task) => {
        //create div for single task
        let div = document.createElement("div");
        div.className = "task";
        // check if task is done
        if(task.completed) {
            div.className = "task done";
        }
        div.setAttribute("data-id", task.id);
        div.appendChild(document.createTextNode(task.title));
        //create delete button
        let span = document.createElement("span");
        span.className="del";
        span.appendChild(document.createTextNode("delete"));
        //apending delete button in single task div
        div.appendChild(span);
        //appending single task div to a the page
        tasksDiv.appendChild(div);
    })
}

function addDataToLocalStorageFrom(arrayOfTasks) {
    window.localStorage.setItem("tasks",JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorage() {
    let data = window.localStorage.getItem("tasks");
    if(data) {
        let tasks = JSON.parse(data);
        addElementsToPageFrom(tasks);
    }
}

function deleteTaskWith(taskId) {
    arrayOfTasks = arrayOfTasks.filter((task)=> task.id != taskId);
    addDataToLocalStorageFrom(arrayOfTasks);
}

function toggleTaskStatusWith(taskId) {
    for( let i=0;i<arrayOfTasks.length ; i++) {
        if(arrayOfTasks[i].id == taskId ) {
            arrayOfTasks[i].completed == false ? arrayOfTasks[i].completed = true: arrayOfTasks[i].completed = false ;
        }
    }
    addDataToLocalStorageFrom(arrayOfTasks);
}


