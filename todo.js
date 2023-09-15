"use strict";
console.log("working");

// Select DOM elements
const input1 = document.querySelector(".form-control");
const add = document.querySelector(".add-button");
const listDown = document.querySelector(".add-data");

// Initialize an array to keep track of appended elements
const appendedElements = [];

// Add a click event listener to the "Add" button
add.addEventListener("click", (e) => {
  e.preventDefault();
  const getValue = input1.value;
  input1.value = '';
  // Create a new list item
  const list = document.createElement("li");
  listDown.append(list);
  
   // Create a "Delete" button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete";
  list.append(deleteButton);

  // Create a inputDatagraph element to hold the text content
  const inputData = document.createElement("input");
  inputData.value = `${getValue}`;
  inputData.className = "data";
  list.append(inputData);

  // Create an "Update" button
  const updateButton = document.createElement("button");
  updateButton.textContent = "Update";
  updateButton.className = "update";
  list.append(updateButton);

 

  // Store the list item and its text content in the appendedElements array
  appendedElements.push({
    element: list, // Store the entire list item
    text: getValue, // Store the text content
  });

  // Log the current state of appendedElements
  console.log(appendedElements);

  // Add an event listener to the "Delete" button for this item
  deleteButton.addEventListener("click", () => {
    // Find the index of the clicked item in appendedElements
    const index = appendedElements.findIndex((item) => item.element === list);
    if (index !== -1) {
      // Remove the item from the array
      appendedElements.splice(index, 1);
      // Remove the list item from the DOM
      list.remove();
    }
  });

  //Highlight input field when click on it
  inputData.addEventListener('focus', () => {
    inputElement.classList.add('data');
  })


//Add an event to update value of input field
  updateButton.addEventListener('click', () => {
    const index = appendedElements.findIndex((item) => item.element === list);
  if (index !== -1) {
    // Update the text property of the corresponding element in the array
    appendedElements[index].text = inputData.value;
  }
  })


  // Log the updated state of appendedElements after deletion
  console.log(appendedElements);
 
});
