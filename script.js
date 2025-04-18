// Change text content dynamically
function changeText() {
    document.getElementById("main-heading").textContent = "Text Changed with JavaScript!";
  }
  
  // Modify CSS styles via JavaScript
  function changeStyle() {
    document.getElementById("description").style.color = "blue";
    document.getElementById("description").style.fontSize = "20px";
  }
  
  // Add an element when a button is clicked
  function addElement() {
    const newPara = document.createElement("p");
    newPara.textContent = "This is a new paragraph added dynamically.";
    newPara.id = "dynamic-para";
    document.body.appendChild(newPara);
  }
  
  // Remove an element when a button is clicked
  function removeElement() {
    const para = document.getElementById("dynamic-para");
    if (para) {
      para.remove();
    } else {
      alert("No element to remove!");
    }
  }
  