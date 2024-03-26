var bday = document.getElementById("bday");
let output = document.getElementById("out");
const btn = document.getElementById("btn");
const today = new Date();


function fun(){
    let name = document.getElementById("name").value;
    let val = bday.value;
    let dif;
    let year;
    let month;
    let day;
    let remain;
    const birthday = new Date(val);

    dif = (today - birthday)/(1000*24*60*60);
    dif = Math.ceil(dif);

    year = dif/365.25; //average year  = 365.25 days 
    remain = dif%365.25;
    year = Math.floor(year);

    month = remain/30.4375; // average month = 30.4375 days
    month = Math.floor(month);

    day = remain%30.4375;

    console.log("hi,", name, ". Your age is ",year,"years ", month,"month ", day, "days");
    output.innerHTML = "Hi,"+ name+ ". Your age is "+year+"years "+ month+"months "+ day+ "days";

    
}

btn.addEventListener("click", fun);