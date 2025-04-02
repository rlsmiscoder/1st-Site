document.getElementById("alertButton")?.addEventListener("click", function () {
  alert("Hello! You clicked the button on Page 2!");
});
if ("Notification" in window) {
  Notification.requestPermission().then(function (permission) {
    console.log("Notification permission: " + permission);
  });
}

document.getElementById('Yes').addEventListener('click', function () {
  if (Notification.permission === "granted") {
    new Notification("Thank You So MUCH <3");
  } else {
    alert("Tysm! Love you forever! \n-Gaurav Pokharel");
  }
});

if ("Notification" in window) {
  Notification.requestPermission().then(function (permission) {
    console.log("Notification permission: " + permission);
  });
}

document.getElementById('No').addEventListener('click', function () {
  if (Notification.permission === "granted") {
    new Notification("Np, I further hope you have a great day!(without me.)");
  } else {
    alert("Aw! Sorry for disturbing you. Hope you have a great day!\n-Gaurav Pokharel");
  }
});
