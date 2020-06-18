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
                                </tr>`
    })
}

function addUser(){
    const name =  document.querySelector('#name').value
    const lastname = document.querySelector('#lastname').value
    const email =  document.querySelector('#email').value
    const gender = document.querySelector('#gender').value
    const newUser = {
        name: name,
        lastname: lastname,
        email: email,
        gender: gender
    }
    usersAcademlo.unshift(newUser)
    printUsers(usersAcademlo)
}
// Filter by gender
function filterByGender(filter){
    const filterByValue = usersAcademlo.filter(function (user) {
        return user.gender == filter
    })
    console.log(filterByValue)
    printUsers(filterByValue)
}

// Filter by email
function filterByEmail(){
    const emailAcademlo = usersAcademlo.filter((user) => {
        return user.email.endsWith('@academlo.com')
    })
    console.log(emailAcademlo)
    printUsers(emailAcademlo)
}



printUsers(usersAcademlo)

window.addUser = addUser
window.filterByGender = filterByGender
window.filterByEmail = filterByEmail
