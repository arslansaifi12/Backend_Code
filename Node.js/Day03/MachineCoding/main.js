
// let mybttn = document.querySelector(".btn");
// // console.log(btn);

// mybttn.addEventListener("click",()=>{
//     let colors = ["green","orange","red","grey","blue","brown","yellow","black","gold","violet","skyblue"];
//     let idx = Math.floor(Math.random()*colors.length);
//     document.querySelector("body").style.backgroundColor = colors[idx];
// });

// document.body.addEventListener("mousemove",function (e) {
//     // console.log(e);
//     document.querySelector("body").style.backgroundColor = `rgb(0,${e.offsetX},${e.offsetY/3})`;
//     document.getElementsByClassName("bx").backgroundColor = `rgb(0,${e.offsetY}, ${e.offsetX/3 })`
    
// })


// Two Sum

function twoSum(arr , target) {
// for(i=0; i<arr.length; i++){
// for (j=i+1; j<arr.length; j++){
//     if (target == arr[i]+arr[j]) {
//         console.log([i],[j]);
//         return true;
//     }
// }
// }


let obj = {};

for(let i=0; i<arr.length; i++){
    obj[arr[i]] =true
}
// console.log(obj);

for(let i=0; i<arr.length; i++){
    const requiredNum = target - arr[i];  // jo  value hamre paas aa rahi hai usko check kar rahe hai
    if (obj[requiredNum]) {                  // yaha check kar rahe hain..
        return [requiredNum , arr[i]]
    }
}

}

let ans = twoSum([7,5,11,15],9)
console.log(ans);




