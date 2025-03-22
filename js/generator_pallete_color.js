document.getElementById('base-color').addEventListener('input', syncColorInputs);
document.getElementById('base-color-hex').addEventListener('input', syncColorInputs);
document.getElementById('generate-btn').addEventListener('click', generatePalette);

// Синхронизация между color picker и текстовым полем
function syncColorInputs() {
    const colorPicker = document.getElementById('base-color');
    const colorHex = document.getElementById('base-color-hex');
    if (event.target === colorPicker) {
        colorHex.value = colorPicker.value;
    } else if (event.target === colorHex && /^#[0-9A-F]{6}$/i.test(colorHex.value)) {
        colorPicker.value = colorHex.value;
    }
    generatePalette();
}

// Генерация палитры
function generatePalette() {
    const baseColor = document.getElementById('base-color').value;
    const palette = document.getElementById('palette');
    palette.innerHTML = ''; // Очищаем предыдущую палитру

    // Преобразуем HEX в RGB
    const rgb = hexToRgb(baseColor);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

    // Генерируем 5 цветов
    const colors = [
        baseColor, // Базовый цвет
        hslToHex(hsl.h, Math.min(hsl.s + 20, 100), Math.min(hsl.l + 20, 100)), // Светлее
        hslToHex(hsl.h, Math.max(hsl.s - 20, 0), Math.max(hsl.l - 20, 0)), // Темнее
        hslToHex((hsl.h + 180) % 360, hsl.s, hsl.l), // Комплементарный
        hslToHex((hsl.h + 30) % 360, hsl.s, hsl.l) // Аналогичный
    ];

    // Отображаем цвета
    colors.forEach(color => {
        const rgbColor = hexToRgb(color);
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color;
        colorBox.innerHTML = `
            ${color}<br>
            RGB: ${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}<br>
            CSS: background-color: ${color};
        `;
        palette.appendChild(colorBox);
    });
}

// Преобразование HEX в RGB
function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}

// Преобразование RGB в HSL
function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h * 360, s: s * 100, l: l * 100 };
}

// Преобразование HSL в HEX
function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    let r, g, b;

    if (h >= 0 && h < 60) { r = c; g = x; b = 0; }
    else if (h >= 60 && h < 120) { r = x; g = c; b = 0; }
    else if (h >= 120 && h < 180) { r = 0; g = c; b = x; }
    else if (h >= 180 && h < 240) { r = 0; g = x; b = c; }
    else if (h >= 240 && h < 300) { r = x; g = 0; b = c; }
    else { r = c; g = 0; b = x; }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).padStart(6, '0')}`;
}

// Инициализация при загрузке
generatePalette();