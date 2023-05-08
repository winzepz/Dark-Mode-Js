function myFunction(){
    const element = document.body;
    element.classList.toggle("dark-mode");
    const button = document.querySelector("button");
    if(element.classList.contains("dark-mode")){
       button.textContent="Light Mode";
       document.getElementById("image").src="dark.png";
    }else{
        button.textContent="Dark Mode";
        document.getElementById("image").src="light.jpg";
    }
}

const textchange = document.querySelector("#change");
const values = ["a student", "Programmer", "WinZepz"];
let counter = 0;
setInterval(()=>{
    textchange.textContent=values[counter];
    counter=(counter+1)%values.length;
},3000);

s