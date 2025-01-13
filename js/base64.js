function encodeBase64() {
    const input = document.getElementById('inputText').value;
    try {
      const encoded = btoa(input);
      document.getElementById('outputText').value = encoded;
    } catch (error) {
      document.getElementById('outputText').value = "Error: Invalid input for encoding!";
    }
  }

  function decodeBase64() {
    const input = document.getElementById('inputText').value;
    try {
      const decoded = atob(input);
      document.getElementById('outputText').value = decoded;
    } catch (error) {
      document.getElementById('outputText').value = "Error: Invalid Base64 string!";
    }
  }