function formatJson() {
    const input = document.getElementById("inputJson").value;

    try {
      // Parse and reformat JSON
      const jsonObject = JSON.parse(input);
      const formattedJson = JSON.stringify(jsonObject, null, 2); // 2-space indentation
      document.getElementById("outputJson").value = formattedJson;
    } catch (error) {
      // Display error if JSON is invalid
      document.getElementById("outputJson").value = "Invalid JSON: " + error.message;
    }
  }