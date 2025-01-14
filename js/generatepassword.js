function generatePasswords() {
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
    alert("Выберите хотя бы один тип символов!");
    return;
  }

  const passwords = [];
  for (let i = 0; i < 5; i++) {
    passwords.push(template ? generateFromTemplate(template, uppercase, lowercase, numbers, symbols) : generateRandomPassword(length, charPool));
  }

  document.getElementById("outputText1").value = passwords[0];
  document.getElementById("outputText2").value = passwords[1];
  document.getElementById("outputText3").value = passwords[2];
  document.getElementById("outputText4").value = passwords[3];
  document.getElementById("outputText5").value = passwords[4];
}

function generateFromTemplate(template, uppercase, lowercase, numbers, symbols) {
  return template.replace(/A/g, () => getRandomChar(uppercase))
    .replace(/a/g, () => getRandomChar(lowercase))
    .replace(/#/g, () => getRandomChar(numbers))
    .replace(/!/g, () => getRandomChar(symbols));
}

function generateRandomPassword(length, pool) {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += getRandomChar(pool);
  }
  return password;
}

function getRandomChar(pool) {
  return pool[Math.floor(Math.random() * pool.length)];
}
