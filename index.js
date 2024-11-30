let users =[
    {name : "Tarik", date:"02/04/2024 - 13:00"},
    {name : "Omar", date:"02/04/2024 - 13:05"},
    {name : "Oumaima", date:"02/04/2024 - 13:20"},
]
 
// users = JSON.parse(localStorage.getItem("users"))
usersHelp = JSON.parse(localStorage.getItem("users"))
usersHelp == null ? users = [] : users = usersHelp
 
function afficheUser(){
    document.getElementById("cards").innerHTML = ""
    users.map((e,i) => {
       let text = `
    <div class="card">
        <p class="idx">${i+1}</p>
        <p class="ctn">${e.name}</p>
        <p class="date">${e.date}</p>
    </div>
    `
    document.getElementById("cards").innerHTML += text
    })
}
 
afficheUser()
 
 
function ajouter(){
    let now = new Date()
    console.log(now);
 
    let user ={
        name : prompt("Ajouter un nouveau condidat"),
        date : now.getDate()+"/"+now.getMonth()+"/"+now.getFullYear()+" | "+now.getHours()+":"+now.getMinutes()
    }
    users.push(user)
    localStorage.setItem("users",JSON.stringify(users))
    afficheUser()
}
 
function supprimer(){
    let idx = Number(prompt("Saisir l'indice du candidat à supprimer")) -1
    users.splice(idx,1)
    localStorage.setItem("users", JSON.stringify(users))
    afficheUser()
}

function modifier(){
    let d = new Date() 
    let indice = Number(prompt("Saisir l'indice du candidat à modifier")) -1
    users[indice].name = prompt("Entre le nom modifie")
    users[indice].date = d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear()+" | "+d.getHours()+":"+d.getMinutes()
    localStorage.setItem("users", JSON.stringify(users))
    afficheUser()

}