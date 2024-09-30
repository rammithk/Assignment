document.getElementById("user-button").addEventListener("click",function(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(user => {
            let newDiv=document.createElement("ul");
            newDiv.innerHTML=`<h3>Name:${user.name}</h3><h3>Email:</h3><p>${user.email}</p><h3>address:</h3><p>Street:${user.address.street}</p>
            <p>suite:${user.address.suite}</p><p>city:${user.address.city}</p><p>zipcode:${user.address.zipcode}</p><hr>`;
            let myDiv=document.getElementById("Users");
            myDiv.appendChild(newDiv);
        });
        
    })
    .catch((error)=>{
                console.log(error);
            })
 });
