function openPopup(type) {
  document.getElementById(`${type}-popup`).style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closePopup() {
  document.querySelectorAll(".popup").forEach(popup => popup.style.display = "none");
  document.getElementById("overlay").style.display = "none";
}

function logSymptom() {
  const input = document.getElementById("symptom-input");
  const table = document.getElementById("symptom-table");

  if (input.value.trim()) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${new Date().toLocaleDateString()}</td>
      <td>${input.value}</td>
      <td><button onclick="removeRow(this)">Remove</button></td>
    `;
    table.appendChild(row);
    input.value = "";
  }
}

function addReminder() {
  const medicationInput = document.getElementById("medication-input");
  const timeInput = document.getElementById("medication-time");
  const list = document.getElementById("reminder-list");

  if (medicationInput.value.trim() && timeInput.value.trim()) {
    const item = document.createElement("li");
    item.textContent = `${medicationInput.value} - ${timeInput.value}`;
    list.appendChild(item);
    medicationInput.value = "";
    timeInput.value = "";
  }
}
