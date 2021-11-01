const color = document.getElementById("color");
const color_arr = [0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
window.addEventListener("DOMContentLoaded",()=>{
    let new_color = "#";
    for(let x=0;x<6;x++){
        new_color+= color_arr[get_value()];
    }
    document.body.style.backgroundColor = new_color;
    color.innerHTML=new_color;
})
btn.addEventListener("click" , ()=>{
    let new_color = "#";
    for(let x=0;x<6;x++){
        new_color+= color_arr[get_value()];
    }
    document.body.style.backgroundColor = new_color;
    color.innerHTML=new_color;
})

function get_value(){
    return Math.floor(color_arr.length * Math.random());
}