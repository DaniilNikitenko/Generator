let ticketNumbers = [];

function generateTicket() {
  const numTickets = parseInt(document.getElementById("num_tickets").value);
  if (Number.isNaN(numTickets) || numTickets <= 0) {
    alert("Введите корректное число билетов");
    return;
  }
  if (ticketNumbers.length === 0) {
    ticketNumbers = [...Array(numTickets).keys()].map((x) => x + 1);
  }
  let randomIndex = Math.floor(Math.random() * ticketNumbers.length);
  let ticketNumber = ticketNumbers[randomIndex];
  ticketNumbers.splice(randomIndex, 1);
  document.getElementById(
    "ticket_display"
  ).innerText = `Номер вашего билета: ${ticketNumber}`;
  numTicketsInput = document.getElementById("num_tickets");
  numTicketsInput.value = numTicketsInput.value - 1;
  document.getElementById("remaining_tickets").innerText = `Осталось билетов: ${
    numTickets - 1
  }`;
  document.getElementById("num_tickets").setAttribute("readonly", true);
}
