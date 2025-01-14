function generatePasswords() {
  const length = parseInt(document.getElementById("passwordLength").value) || 12;
  const includeUppercase = document.getElementById("includeUppercase").checked;
  const includeLowercase = document.getElementById("includeLowercase").checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSymbols = document.getElementById("includeSymbols").checked;
  const template = document.getElementById("passwordTemplate").value;

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*";
  
  // Собираем пул символов на основе флажков
  let charPool = "";
  if (includeUppercase) charPool += uppercase;
  if (includeLowercase) charPool += lowercase;
  if (includeNumbers) charPool += numbers;
  if (includeSymbols) charPool += symbols;

  if (!charPool) {
    alert("Выберите хотя бы один тип символов!");
    return;
  }

  // Функция генерации пароля
  function generatePassword(template) {
    let password = "";
    for (let i = 0; i < template.length; i++) {
      const char = template[i];
      if (char === "#") {
        password += numbers[Math.floor(Math.random() * numbers.length)];
      } else if (char === "A") {
        password += uppercase[Math.floor(Math.random() * uppercase.length)];
      } else if (char === "a") {
        password += lowercase[Math.floor(Math.random() * lowercase.length)];
      } else if (char === "-") {
        password += "-";
      } else {
        password += char; // Для любых символов, которые в шаблоне
      }
    }
    return password;
  }

  // Генерация 5 паролей
  document.getElementById("outputText1").value = generatePassword(template);
  document.getElementById("outputText2").value = generatePassword(template);
  document.getElementById("outputText3").value = generatePassword(template);
  document.getElementById("outputText4").value = generatePassword(template);
  document.getElementById("outputText5").value = generatePassword(template);
}