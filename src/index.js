document.addEventListener('DOMContentLoaded', () => {
const getForm = document.querySelector("#create-task-form");
getForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let newTask = document.getElementById("new-task-description").value
    displayTask(newTask)
})
})

function displayTask(newTask){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteTask)
  btn.textContent = 'x'
  p.textContent = `${newTask}  `
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#tasks').appendChild(p)
}

function deleteTask(e){
  e.target.parentNode.remove()
}




