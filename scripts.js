function checkKhodam() {
  const name = document.getElementById('nameInput').value.trim();
  const resultDiv = document.getElementById('result');
  
  if (name === "") {
    resultDiv.innerHTML = "<p style='color: red;'>Nama tidak boleh kosong!</p>";
    return;
  }

  const khodamNames = [
    "Khodam Naga Tunduk",
    "Khodam Naga Emas",
    "Khodam Cendrawasi",
    "Khodam Macan Sumatera"
  ];
  
  const khodamPresent = Math.random() > 0.5;

  if (khodamPresent) {
    const khodamName = khodamNames[Math.floor(Math.random() * khodamNames.length)];
    resultDiv.innerHTML = `<p style='color: green;'>${name}, Anda memiliki ${khodamName} yang melindungi Anda!</p>`;
  } else {
    resultDiv.innerHTML = `<p style='color: red;'>${name}, maaf, Anda tidak memiliki khodam.</p>`;
  }
}
