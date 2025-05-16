<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Form Kepribadian</title>
  <style>
    /* MASUKKAN CSS DI SINI (yang dari jawaban sebelumnya) */
  </style>
</head>
<body>

  <h2>UNDERSTANDING PEOPLE FORM</h2>
  <p><strong>Instruksi:</strong></p>
  <ul>
    <li>Pilih 1 pernyataan dari tiap baris yang paling menggambarkan diri kamu.</li>
    <li>Hanya satu pilihan per baris (A, B, C, atau D).</li>
    <li>Tekan "Count" untuk melihat hasil.</li>
  </ul>

  <form id="personalityForm">
    <h3>Pilih satu dari setiap baris (1 sampai 26):</h3>
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>A</th>
          <th>B</th>
          <th>C</th>
          <th>D</th>
        </tr>
      </thead>
      <tbody id="questions"></tbody>
    </table>
    <button type="button" onclick="countResults()">Count</button>
    <button type="reset">Reset</button>
  </form>

  <h3>Hasil:</h3>
  <div id="result"></div>

  <script>
    const questionsData = [
      {
        A: "Menyukai ide-ide kreatif dan tidak umum",
        B: "Pendengar yang suportif",
        C: "Analitis dan logis",
        D: "Spontan dan ceria"
      },
      {
        A: "Pemimpin alami dan tegas",
        B: "Penuh empati dan perhatian",
        C: "Suka struktur dan perencanaan",
        D: "Fleksibel dan suka petualangan"
      },
      // Tambahkan data lain hingga 26 soal
      {
        A: "Berorientasi pada tujuan",
        B: "Ramah dan bersahabat",
        C: "Teliti dan cermat",
        D: "Optimis dan penuh energi"
      },
      // ... sampai jumlah 26 objek
    ];

    const totalQuestions = questionsData.length;
    const container = document.getElementById("questions");

    for (let i = 0; i < totalQuestions; i++) {
      const row = document.createElement("tr");
      const q = questionsData[i];
      row.innerHTML = `
        <td data-label="No">${i + 1}</td>
        <td data-label="A"><label><input type="radio" name="q${i + 1}" value="A" required> ${q.A}</label></td>
        <td data-label="B"><label><input type="radio" name="q${i + 1}" value="B"> ${q.B}</label></td>
        <td data-label="C"><label><input type="radio" name="q${i + 1}" value="C"> ${q.C}</label></td>
        <td data-label="D"><label><input type="radio" name="q${i + 1}" value="D"> ${q.D}</label></td>
      `;
      container.appendChild(row);
    }

    function countResults() {
      let countA = 0, countB = 0, countC = 0, countD = 0;
      for (let i = 1; i <= totalQuestions; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (!selected) {
          alert(`Pertanyaan nomor ${i} belum dijawab.`);
          return;
        }
        if (selected.value === "A") countA++;
        else if (selected.value === "B") countB++;
        else if (selected.value === "C") countC++;
        else if (selected.value === "D") countD++;
      }

      document.getElementById("result").innerHTML = `
        <p>Total A: ${countA}</p>
        <p>Total B: ${countB}</p>
        <p>Total C: ${countC}</p>
        <p>Total D: ${countD}</p>
      `;
    }
  </script>

</body>
</html>