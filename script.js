const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")
const imageCarousal = document.getElementById("imgs")

const img = document.querySelectorAll("#imgs img")
console.log(img)
let idx = 0

let interval = setInterval(run, 2000)

function run(){
    idx++
 changeimg()

}
function changeimg(){
    if(idx > img.length - 1){
        idx = 0
    }else if(idx < 0){
        idx = img.length - 1
    }
    console.log(idx)

    imageCarousal.style.transform = `translateX(${-idx * 100}%)`
}
function resetTime(){
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

leftBtn.addEventListener("click", ()=>{
    idx--
    changeimg()
    resetTime()
})

rightBtn.addEventListener("click", ()=>{
    idx++
    changeimg()
    resetTime()
})