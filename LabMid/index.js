// in javascript

window.onload = () => {
  eventClick();
};

function eventClick() {
  document.getElementById("btn-click").addEventListener("click", () => {
    alert("hello world");
  });
}
