function generatePassword() {
    const length = parseInt(document.getElementById("passwordLength").value) || 12;
    const template = document.getElementById("passwordTemplate").value.trim();
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;
  
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
  
    let charPool = "";
    if (includeUppercase) charPool += uppercase;
    if (includeLowercase) charPool += lowercase;
    if (includeNumbers) charPool += numbers;
    if (includeSymbols) charPool += symbols;
  
    if (!charPool) {
      document.getElementById("outputText").value = "Выберите хотя бы один тип символов!";
      return;
    }
  
    let password = "";
    if (template) {
      password = template.replace(/A/g, () => getRandomChar(uppercase))
        .replace(/a/g, () => getRandomChar(lowercase))
        .replace(/#/g, () => getRandomChar(numbers))
        .replace(/!/g, () => getRandomChar(symbols));
    } else {
      for (let i = 0; i < length; i++) {
        password += getRandomChar(charPool);
      }
    }
  
    document.getElementById("outputText").value = password;
  }
  
  function getRandomChar(pool) {
    return pool[Math.floor(Math.random() * pool.length)];
  }
  