document.getElementById('value').addEventListener('input', convertUnits);
document.getElementById('from-unit').addEventListener('change', convertUnits);
document.getElementById('to-unit').addEventListener('change', convertUnits);
document.getElementById('base-font-size').addEventListener('input', convertUnits);
document.getElementById('viewport-width').addEventListener('input', convertUnits);
document.getElementById('viewport-height').addEventListener('input', convertUnits);

function convertUnits() {
    const value = parseFloat(document.getElementById('value').value) || 0;
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;
    const baseFontSize = parseFloat(document.getElementById('base-font-size').value) || 16;
    const viewportWidth = parseFloat(document.getElementById('viewport-width').value) || 1920;
    const viewportHeight = parseFloat(document.getElementById('viewport-height').value) || 1080;
    let result = 0;

    // Конвертация в px как промежуточный шаг
    let valueInPx = value;
    if (fromUnit === 'rem') valueInPx = value * baseFontSize;
    else if (fromUnit === 'em') valueInPx = value * baseFontSize;
    else if (fromUnit === 'percent') valueInPx = (value / 100) * baseFontSize;
    else if (fromUnit === 'dpi') valueInPx = value * (96 / 72); // 96dpi - стандарт для веба
    else if (fromUnit === 'vw') valueInPx = (value / 100) * viewportWidth;
    else if (fromUnit === 'vh') valueInPx = (value / 100) * viewportHeight;

    // Конвертация из px в целевую единицу
    if (toUnit === 'px') result = valueInPx;
    else if (toUnit === 'rem') result = valueInPx / baseFontSize;
    else if (toUnit === 'em') result = valueInPx / baseFontSize;
    else if (toUnit === 'percent') result = (valueInPx / baseFontSize) * 100;
    else if (toUnit === 'dpi') result = valueInPx * (72 / 96);
    else if (toUnit === 'vw') result = (valueInPx / viewportWidth) * 100;
    else if (toUnit === 'vh') result = (valueInPx / viewportHeight) * 100;

    document.getElementById('result').textContent = result.toFixed(2);
    document.getElementById('result-unit').textContent = toUnit;
}

// Инициализация при загрузке
convertUnits();