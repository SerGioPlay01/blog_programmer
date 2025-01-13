function csvToJson(csv) {
    const lines = csv.trim().split('\n');
    const headers = lines[0].split(',');
    return lines.slice(1).map(line => {
      const values = line.split(',');
      return headers.reduce((acc, header, index) => {
        acc[header.trim()] = values[index]?.trim();
        return acc;
      }, {});
    });
  }

  function convertCsvToJson() {
    const csvInput = document.getElementById('csvInput').value;
    try {
      const jsonOutput = csvToJson(csvInput);
      document.getElementById('jsonOutput').textContent = JSON.stringify(jsonOutput, null, 2);
    } catch (error) {
      document.getElementById('jsonOutput').textContent = "Error: Invalid CSV format!";
    }
  }