function countdown() {
    // input from the web page
    let inputs = document.querySelectorAll(".show");
    let DMY = document.getElementById("Hi").value;
    const Seek_Date= new Date(DMY);
    PresentDate=new Date();
    month=Seek_Date.getMonth();
    day=String(Seek_Date.getDate()).padStart(2,'0');
    year=Seek_Date.getFullYear();
    time=Seek_Date.toLocaleString('en-US', { hour:'numeric', minute:'numeric', hour12:true });
    // used for months, as the type="date" in input tag of html has months in n-1 order and the sequence of date is yyyy-mm-dd
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    const pattern=(day+" "+months[month]+" "+year+" 12:00 AM");
    const End_Date=new Date(pattern);
    const Present_Date = new Date()
    const diff = (End_Date - Present_Date) / 1000;
    if (diff <= 0){
    inputs[0].value =0;
    inputs[1].value =0;
    inputs[2].value =0;
    inputs[3].value =0;
        return;} 
    inputs[0].value = Math.floor(diff / 3600 / 24)+" Days";
    inputs[1].value = Math.floor(diff / 3600) % 24+" Hrs";
    inputs[2].value = Math.floor(diff / 60) % 60+" Min";
    inputs[3].value = Math.floor(diff) % 60+" Sec";
    only(End_Date);
}
function only(a){
    let p=String(a);
    if(p=="Invalid Date"){
    document.getElementById("timeRem").innerText="The Date";
    }
    else{
       p=p.replace('GMT+0530 (India Standard Time)','')
    document.getElementById("timeRem").innerText=p;
    }

}
countdown()
/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */
setInterval(
    () => {
        countdown()
    },
    1000
)

function toggleing(){
    let num1=Math.floor(Math.random()*16777215);
    let num2=Math.floor(Math.random()*54321);
    let colorcode1="#"+num1.toString(16)+"50";
    let colorcode2="#"+num2.toString(16);
    if(colorcode1!=colorcode2){
    let toggle=document.getElementById("button").style;
    document.querySelector('.main').style.backgroundColor=colorcode1;
    document.querySelector('#button').classList.toggle('active');
    document.querySelector('#button').style.backgroundColor=colorcode1;
    document.querySelector('#obutton').classList.toggle('active');
    document.querySelector('#obutton').style.backgroundColor=colorcode2;
    document.body.style.backgroundColor=colorcode2;
    }
}
toggleing();
