function copyCode() {
    const codeBlock = document.getElementById("code-block");
    const button = document.getElementById("copy-button");
    const text = codeBlock.innerText;

    navigator.clipboard.writeText(text).then(() => {
      button.textContent = "Скопировано!";
      button.disabled = true; // Отключаем кнопку временно
      setTimeout(() => {
        button.textContent = "Скопировать";
        button.disabled = false; // Включаем кнопку обратно
      }, 4000); // Через 4 секунды текст возвращается
    }).catch(err => {
      alert("Failed to copy code: " + err);
    });
  }