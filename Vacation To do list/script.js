var addToDo = document.querySelector('.addToDo');
var inputField = document.querySelector('.inputField');
var toDoContainer = document.querySelector('.toDoContainer');

addToDo.addEventListener('click', function(){
  var paragraph = document.createElement('p');
  toDoContainer.appendChild(paragraph);
  paragraph.textContent = inputField.value;
  paragraph.classList.add('paragraph-styling');
  inputField.value = '';
  paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = 'line-through';
    paragraph.style.color = 'red';
  })
  paragraph.addEventListener('dblclick', function(){
    toDoContainer.removeChild(paragraph);
  })
});