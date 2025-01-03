

let deletbttn = document.querySelector(".Delete");
// console.log(deletbttn);
let updatebttn = document.querySelector(".Update")
// console.log(updatebttn);

deletbttn.addEventListener("click",()=>{
    // console.log("delet");
    let name = document.getElementById("name").value
    let status = document.getElementById("status").value
    let rating = document.getElementById("rating").value
    let data = {name , status , rating}
    
    fetch("http://localhost:3000/stars/",{
        method: "DELETE",
        body : JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json" 
        }
    }).then(res=>res.json())
    .then(data=>
        window.location.reload(),
        console.log(data)
        
    )
    .catch(error=>console.log(error))
    
})


updatebttn.addEventListener("click",()=>{
    let name = document.getElementById("name").value
    let status = document.getElementById("status").value
    let rating = document.getElementById("rating").value
    let data = {name , status , rating}

    fetch("http://localhost:3000/stars/",{
        method: "PUT",
        body : JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json" 
        }
    }).then(res=>res.json())
    .then(data=>console.log(data),
    
        window.location.reload()
    )
    .catch(error=>console.log(error))
    
})






window.addEventListener('DOMContentLoaded',()=>{
    fetch("http://localhost:3000/stars/")
    .then(res=>res.json())
    .then(data=>{
       data.map(star =>{
        let tr = document.createElement("tr");

        let nameTd = document.createElement("td");
        let statusTd = document.createElement("td");
        let ratingTd = document.createElement("td");

        nameTd.textContent = star.name;
        statusTd.textContent = star.status;
        ratingTd.textContent = star.rating;

        tr.appendChild(nameTd);
        tr.appendChild(statusTd);
        tr.appendChild(ratingTd);
       
        document.getElementById("table").appendChild(tr)
       })
    })
    .catch(error=>console.log(error))
})
