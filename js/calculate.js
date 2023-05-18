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
