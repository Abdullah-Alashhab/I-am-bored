//api https://www.boredapi.com/api/activity/
let timeId;

document.querySelector(".button").addEventListener("click", () => {
  
    clearTimeout(timeId);

  timeId = setTimeout(() => tellMeWhatToDo(), 1000);
});

function tellMeWhatToDo() {
  fetch("https://www.boredapi.com/api/activity/")
    .then((response) => {
      return response.json();
    })
    .then((obj) => {
      let activity = obj.activity;

      document.querySelector(".activity").innerHTML = activity;
    });
}
