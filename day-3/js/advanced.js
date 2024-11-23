const rates = { USD: 0.85, KZT: 0.002, EUR: 1 };
let total = 0;

while (true) {
    let amount = prompt("Соманы енгізіңіз (немесе 'стоп'):").trim();
    if (amount.toLowerCase() === "стоп") break;

    amount = parseFloat(amount);
    if (isNaN(amount) || amount < 0) {
        alert("Соманы дұрыс енгізіңіз!");
        continue;
    }

    let currency = prompt("Валютаны енгізіңіз (USD, KZT, EUR):").trim().toUpperCase();
    if (!rates[currency]) {
        alert("Белгісіз валюта!");
        continue; 
    }

    total += amount * rates[currency];
    alert(`Жалпы: ${total.toFixed(2)} EUR`);
}

alert(`Барлық жинақталған сома: ${total.toFixed(2)} EUR`);