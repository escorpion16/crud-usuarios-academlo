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

function printUsers(){
    const tableBody = document.querySelector('tbody')
    tableBody.innerHTML = ''
    usersAcademlo.forEach((user,index) => {
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
    const newUser = {
        name: name,
        lastname: lastname,
        email: email
    }
    usersAcademlo.unshift(newUser)
    printUsers(usersAcademlo)
}

function filterByGender(filter){
    const filterMale = document.querySelector('#male')
    const filterFemale = document.querySelector('#female')
    const filterByValue = usersAcademlo.filter((user) => {
        return user.gender == filter
    })
    
    printUsers(filterByValue)
}
printUsers(usersAcademlo)

window.filterByGender = filterByGender
window.addUser = addUser