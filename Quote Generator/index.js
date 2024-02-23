let url="https://api.quotable.io/random";
let author=document.getElementById('author');
let quote=document.getElementsByTagName('blockquote');
let newquotebtn=document.getElementById("btn1");
let tweet=document.getElementById("btn2");
async function  getQuote(){
    try {
        let res= await fetch(url);
        let data= await res.json();
        
       author.innerHTML=(data.author);
       
       quote[0].innerText=(data.content);
     
    } catch (error) {
        console.log(error);
    }
}
getQuote()
newquotebtn.addEventListener("click",()=>{
    getQuote()
})

function tweeter(){
Window.open("https://twitter.com/intent/tweet?text=Hello%20world","Tweet Window" ,"width=600 ,height=300");
}
