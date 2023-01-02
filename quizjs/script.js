const questions=[{
        'q':'Who is the prime miniseter of this house',
        'a':'I',
        'b':'U',
        'c':'A',
        'd':'K',
        'cor':'a'
    },
    {
        'q':'Who is the cheif miniseter of this house',
        'a':'I2',
        'b':'U2',
        'c':'A2',
        'd':'K2',
        'cor':'b'
    },{
        'q':'Who is the prime3 miniseter of this house',
        'a':'I3',
        'b':'U3',
        'c':'A3',
        'd':'K3',
        'cor':'c'
    },
    {
        'q':'Who is the prime4 miniseter of this house',
        'a':'I4',
        'b':'U4',
        'c':'A4',
        'd':'K4',
        'cor':'d'
    }
]
let index=0;
let correct=0;
let wrong=0;
let Total=questions.length;
let Heading=document.querySelector('#question');
const options=document.querySelectorAll('.option')
const prevBtn=document.getElementById("prev");
const nextBtn=document.getElementById("next");
const content=document.querySelector(".content");
const button=document.querySelector(".buttons");
const Display=()=>{
    const data=questions[index];
    Heading.innerText=index+1+")"+data.q;
    options[0].nextElementSibling.innerText=data.a;
    options[1].nextElementSibling.innerText=data.b;
    options[2].nextElementSibling.innerText=data.c;
    options[3].nextElementSibling.innerText=data.d;
}
// Intial call
// Display()

let a=0
const nextQues=()=>{
    PrevAndNext(index++);
    reset();
    
}
const prevQues=()=>{
    PrevAndNext(index--);
}

const onSubmit=()=>{
    let ans = GetAnswer();
    let data=questions[index];
    if(ans==data.cor){
        correct++
    }
    else{
        wrong--;
    }
    index++;
    PrevAndNext();
    reset();
}

const reset=()=>{
    options.forEach((input)=>{
        if(input.checked){
            input.checked=false;
        }
    })
}

const GetAnswer=()=>{
    let ans;
    options.forEach((input)=> {
        if(input.checked){
            ans=input.value;
        }
    }
    )
    return ans;
}

const PrevAndNext=()=>{
    // reset()
    if(index>=0 && index<Total){
        if(index==0){
            prevBtn.style.display='none';
            Display();
        }
        else if(index==Total-1){
            nextBtn.style.display='none';
        }
        else{
            prevBtn.style.display='inline';
            nextBtn.style.display='inline';
            Display();
        }
    }
    else{
    }
}
var endBtn=document.querySelector("#end");
endBtn.addEventListener('click',endTest);
function endTest(){
    let res=confirm('Are you sure,want to end the test?');
    if(res==true){
        let endText=prompt("Type END (*case sensitive) below to end the test and submit.");
        if(endText=="END"){
            MarksSheet();
        }
        else{
            return;
        }
    }
    return;
}
const MarksSheet=()=>{
    button.style.display="none";
    content.style.display="none";
    endBtn.style.display='none';
    let rHeading=document.querySelector("#ResultPageH");
    let rResult=document.querySelector("#ResultPageM");
    rHeading.style.display='inline';
    rHeading.innerText="Succesfully Submited";
    rResult.style.display='inline';
    rResult.innerText="Results :"+" "+correct+"/"+Total;
}
PrevAndNext();