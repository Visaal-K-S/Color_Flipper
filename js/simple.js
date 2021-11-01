const color = document.getElementById("color");
const btn = document.getElementById("btn");
const color_arr = ["red","yellow","#F28ACC","#6EE4AF","#B05B3D","grey","lightgrey"];
window.addEventListener("DOMContentLoaded",()=>{
    let val = get_value();
    document.body.style.backgroundColor = color_arr[val];
    color.innerHTML = color_arr[val];
})
btn.addEventListener("click" , ()=>{
    let val = get_value();
    document.body.style.backgroundColor = color_arr[val];
    color.innerHTML = color_arr[val];
})

function get_value(){
    return Math.floor(Math.random() * color_arr.length);
}