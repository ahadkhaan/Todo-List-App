let inputData = document.querySelector("#inputData");
let add = document.querySelector("#add");
let addlist = document.querySelector("#addlist");

add.addEventListener("click", () => {
  if (inputData.value === "") {
    alert("Enter Some data");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputData.value;
    addlist.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputData.value = "";
  savedata();
});

addlist.addEventListener(
  "click",(e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savedata();
    } else if (e.target.tagName === "SPAN") {e.target.parentElement.remove()
        savedata();
    };
  },
  false
);


function savedata(){
    localStorage.setItem("data",addlist.innerHTML)
}
function showdata(){
    addlist.innerHTML=localStorage.getItem("data")
}
showdata()