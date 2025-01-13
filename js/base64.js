function encodeBase64() {
    const input = document.getElementById('inputText').value;
    try {
      // Преобразование текста в байты UTF-8 перед кодированием
      const encoded = btoa(unescape(encodeURIComponent(input)));
      document.getElementById('outputText').value = encoded;
    } catch (error) {
      document.getElementById('outputText').value = "Ошибка: Неверный ввод для кодирования!";
    }
  }
  
  function decodeBase64() {
    const input = document.getElementById('inputText').value;
    try {
      // Декодирование строки Base64 и преобразование обратно в текст UTF-8
      const decoded = decodeURIComponent(escape(atob(input)));
      document.getElementById('outputText').value = decoded;
    } catch (error) {
      document.getElementById('outputText').value = "Ошибка: Неверная строка Base64!";
    }
  }
  