// Players select section
const btns = document.querySelectorAll(".select-btn");
const selectName = document.getElementById("set-name");

function addPlayer(playerName) {
  const li = document.createElement("li");
  li.innerText = playerName;
  selectName.appendChild(li);
}

for (const btn of btns) {
  btn.addEventListener("click", function () {
    if (selectName.children.length <= 4) {
      btn.classList.add("disabled");
      btn.style.backgroundColor = "grey";
      addPlayer(btn.parentNode.childNodes[1].innerText);
    } else {
      alert("5 Played already Selected");
    }
  });
}
// Budget calculation section
function inputValues(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValue = parseFloat(inputField.value);
  return inputFieldValue;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  const playerAmount = inputValues("par-player-amount");
  const playersExpenses = playerAmount * 5;
  const playerExpenses = document.getElementById("player-expenses");
  playerExpenses.innerText = playersExpenses;
});

document
  .getElementById("calculate-total-btn")
  .addEventListener("click", function () {
    const managerCost = inputValues("manager-cost");
    const coachCost = inputValues("coach-cost");
    const expenses = managerCost + coachCost;

    const playersExpenses = document.getElementById("player-expenses");
    const playersExpensesAmount = parseFloat(playersExpenses.innerText);

    const totalExpenses = playersExpensesAmount + expenses;
    const totalAmount = document.getElementById("total-amount");
    totalAmount.innerText = totalExpenses;
  });
