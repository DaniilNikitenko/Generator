let ticketNumbers = [];
let students = [];

const generateTicket = () => {
  const numTickets = parseInt(document.getElementById("num_tickets").value);
  // проверка если пользователь введёт не число и меньше 0
  if (Number.isNaN(numTickets) || numTickets <= 0) {
    alert("Введите корректное число билетов");
    return;
  }
  if (ticketNumbers.length === 0) {
    // генерация массива со всеми билетами
    ticketNumbers = [...Array(numTickets).keys()].map((x) => x + 1);
  }
  // рандомный индекс из массива
  let randomIndex = Math.floor(Math.random() * ticketNumbers.length);
  let ticketNumber = ticketNumbers[randomIndex];
  // удаление индекса из массива
  ticketNumbers.splice(randomIndex, 1);

  const firstName = document.getElementById("first_name").value;
  const lastName = document.getElementById("last_name").value;
  const groupNumber = document.getElementById("group_number").value;
  const date = new Date().toLocaleTimeString();

  // добавляем в массив информацию о студенте
  students.push({ firstName, lastName, groupNumber, date, ticketNumber });

  // выводим информацию о студенте на страницу
  const table = document.getElementById("table");
  const newRow = table.insertRow(-1);
  const firstNameCell = newRow.insertCell(0);
  const lastNameCell = newRow.insertCell(1);
  const groupNumberCell = newRow.insertCell(2);
  const dateCell = newRow.insertCell(3);
  const ticketNumberCell = newRow.insertCell(4);
  firstNameCell.innerHTML = firstName;
  lastNameCell.innerHTML = lastName;
  groupNumberCell.innerHTML = groupNumber;
  dateCell.innerHTML = date;
  ticketNumberCell.innerHTML = ticketNumber;

  document.getElementById("ticket_display").innerText = `${ticketNumber}`;
  numTicketsInput = document.getElementById("num_tickets");
  numTicketsInput.value = numTicketsInput.value - 1;
  document.getElementById("remaining_tickets").innerText = `Осталось билетов: ${
    numTickets - 1
  }`;
  document.getElementById("num_tickets").setAttribute("readonly", true);
  document.getElementById("first_name").value = "";
  document.getElementById("last_name").value = "";
};
