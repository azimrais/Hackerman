async function hacker() {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Initializing Hack Program....")
        }, 1000);
    })
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hacking Aazim's Username.... ")
        }, 2000);
    })
    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Username found.... ")
        }, 3000);
    })
    let p4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("aazimrais352....")
        }, 4000);
    })
    let p5 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("connecting to facebook....")
        }, 5000);
    })
    let p6 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Thank You....")
        }, 6000);
    })
    let a1 = await p1
    content.innerHTML = a1
    pp1.innerHTML =a1
    let a2 = await p2
    content.innerHTML = a2
    pp2.innerHTML =a2
    let a3 = await p3
    content.innerHTML = a3
    pp3.innerHTML =a3
    let a4 = await p4
    content.innerHTML = a4
    pp4.innerHTML =a4
    let a5 = await p5
    content.innerHTML = a5
    pp5.innerHTML =a5
    let a6 = await p6
    content.innerHTML = a6
    return[a1,a2,a3,a4,a5]

}
setInterval(() => {
    hacker().then((value)=>{
        console.log(value)
    })  
},1000);
