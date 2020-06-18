import {usersAcademlo} from './users.js'
// 1.- Obtener el elemento que quiero insertar en HTML
// 2.- Generar la estructura de HTML
// 3.- Insertar el HTML generado


// function createRow(){
//     const tableBody = document.querySelector('tbody')

//     for(let i = 0; i< usersAcademlo.length ; i++){
//         usersAcademlo[i].index = i +1
//         tableBody.innerHTML += returnHTMLRow(usersAcademlo[i])
//     }
    
// }

// function returnHTMLRow(user){
//     return `<tr>
//                 <th scope="row">${user.index}</th>
//                 <td>${user.name}</td>
//                 <td>${user.lastname}</td>
//                 <td>${user.email}</td>
//             </tr>`
// }

// function addUser(){
//     const name =  document.querySelector('#name').value
//     const lastname = document.querySelector('#lastname').value
//     const email =  document.querySelector('#email').value

//     const totalUsers = usersAcademlo.length
//     const newUser = {
//         index: totalUsers,
//         name: name,
//         lastname: lastname,
//         email: email
//     }
//     usersAcademlo.unshift(newUser)
//     console.log(usersAcademlo)
//     const tableBody = document.querySelector('tbody')
//     const allUsers = returnHTMLRow(newUser) + tableBody.innerHTML
//     tableBody.innerHTML = allUsers


// }

function printUsers(users){
    const tableBody = document.querySelector('tbody')
    tableBody.innerHTML = ''
    users.forEach((user,index) => {
        tableBody.innerHTML += `<tr>
                                    <th scope="row">${index +1}</th>
                                    <td>${user.name}</td>
                                    <td>${user.lastname}</td>
                                    <td>${user.email}</td>
                                    <td>${user.age}</td>
                                    <td>
                                        <button onclick="removeUser(${index})" class="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>`
    })
    
}

function addUser(){
    const name =  document.querySelector('#name').value
    const lastname = document.querySelector('#lastname').value
    const email =  document.querySelector('#email').value
    const age = document.querySelector('#age').value
    const gender = document.querySelector('#gender').value
    const newUser = {
        name: name,
        lastname: lastname,
        email: email,
        age: age,
        gender: gender
    }
    
    usersAcademlo.unshift(newUser)
    printUsers(usersAcademlo)
    voidInputs()


}

// limpiar los inputs despues de ingresar los datos
function voidInputs(){
    document.querySelector('#name').value = ''
    document.querySelector('#lastname').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#age').value = ''
    document.querySelector('#gender').value = 'Selecciona tu género'
    document.querySelector('#senseOfOrder').value = 'Elige como ordenar..'
    document.querySelector('#orderByAge').value = 'Elige como ordenar..'
}

// Filter by gender
function filterByGender(filter){
    const filterByValue = usersAcademlo.filter(function (user) {
        return user.gender == filter
    })
    
    printUsers(filterByValue)
}

// Filter by email
function filterByEmail(){
    const emailAcademlo = usersAcademlo.filter((user) => {
        return user.email.endsWith('@academlo.com')
    })
    
    printUsers(emailAcademlo)
}

// Sort
function orderUsers(){
    const senseOfOrder = document.querySelector('#senseOfOrder').value
    const order = usersAcademlo.sort((user1, user2) => {
        if(senseOfOrder == 'upName'){
            return (user1.name.toLowerCase() < user2.name.toLowerCase()) ? -1 : 1
        }else if(senseOfOrder == 'downName'){
            return (user1.name.toLowerCase() > user2.name.toLowerCase()) ? -1 : 1
        }
        
    })
    
    printUsers(order)
}

// Eliminar usuario
function removeUser(indexUser){
        usersAcademlo.splice(indexUser,1) 
        console.log("eliminar usuario del index ")
        printUsers(usersAcademlo)
    }
    
// Funcion ordenar usuario por edad
function ageUsers(){
    // 
    const orderByAge = document.getElementById('orderByAge').value
    const orderUsersByAge = usersAcademlo.sort((user1,user2) => {
        if(orderByAge == 'upAge'){
            return (user1.age < user2.age) ? -1 : 1
        }else if(orderByAge == 'downAge'){
            return (user1.age > user2.age) ? -1 : 1
        }
    })
    printUsers(orderUsersByAge)
}

printUsers(usersAcademlo)

window.addUser = addUser
window.filterByGender = filterByGender
window.filterByEmail = filterByEmail
window.orderUsers = orderUsers
window.removeUser = removeUser
window.ageUsers = ageUsers
