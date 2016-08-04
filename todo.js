
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);


  function addToDoItem() {
    // add your code here
    // this should create a new list item in the to-do list
    // and set the text as the input from the todo-input field
    var text = document.getElementById("todo-input").value;
    var newLi = document.createElement("li");
    var textLi = document.createTextNode(text);
    newLi.appendChild(textLi);
    document.getElementById("todo-input").value = "";
    document.getElementsByClassName("todo-list-items")[0].appendChild(newLi);
  }

  function markAsDone() {
    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";
    var nodeDone = document.getElementsByClassName("todo-list-items")[0].getElementsByTagName('li')[0];//.firstChild.nextSibling; = button;
    //document.getElementsByClassName("done-list")[0].appendChild(nodeDone);
    document.getElementsByClassName("todo-list-items")[0].removeChild(nodeDone);
    nodeDone.setAttribute("class", "done");
    document.getElementsByClassName("done-list-items")[0].appendChild(nodeDone);
    //document.getElementsByClassName("done-list")[0].firstChild.setAttribute("class", "done");
  }
  
}
