function copyCode() {
    const success = document.querySelector(".copy-button");
    const codeBlock = document.querySelector("code").textContent; // Исправлено на querySelector
    navigator.clipboard
      .writeText(codeBlock)
      .then(() => {
        // Изменить текст кнопки на "Скопировано!"
        success.textContent = "Скопировано!";
  
        // Вернуть исходный текст кнопки через 2 секунды
        setTimeout(() => {
          success.textContent = "Скопировать";
        }, 2000);
      })
      .catch((err) => {
        console.error("Ошибка копирования:", err);
      });
  }
  