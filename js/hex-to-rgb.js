function prependHash() {
    const hexInput = document.getElementById('hexInput');
    if (!hexInput.value.startsWith('#')) {
        hexInput.value = '#' + hexInput.value.replace(/^#/, '');
    }
}

function updatePreview() {
    const hexInput = document.getElementById('hexInput').value.trim();
    const colorPreview = document.getElementById('colorPreview');

    const hexPattern = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
    if (hexPattern.test(hexInput)) {
        const hex = hexInput.startsWith('#') ? hexInput : `#${hexInput}`;
        colorPreview.style.backgroundColor = hex;
    } else {
        colorPreview.style.backgroundColor = '#fff';
    }
}

function convertHexToRgb() {
    const hexInput = document.getElementById('hexInput').value.trim();
    const redValue = document.getElementById('redValue');
    const greenValue = document.getElementById('greenValue');
    const blueValue = document.getElementById('blueValue');
    const outputElement = document.getElementById('output');

    // Validate HEX input
    const hexPattern = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
    if (!hexPattern.test(hexInput)) {
        outputElement.textContent = 'Invalid HEX color format. Use #RRGGBB or #RGB.';
        return;
    }

    // Remove the # if present
    const hex = hexInput.startsWith('#') ? hexInput.slice(1) : hexInput;

    // Convert shorthand HEX to full HEX
    const fullHex = hex.length === 3
        ? hex.split('').map(ch => ch + ch).join('')
        : hex;

    // Extract RGB values
    const r = parseInt(fullHex.substring(0, 2), 16);
    const g = parseInt(fullHex.substring(2, 4), 16);
    const b = parseInt(fullHex.substring(4, 6), 16);

    // Display RGB values in the input fields
    redValue.value = r;
    greenValue.value = g;
    blueValue.value = b;

    // Generate CSS, Objective-C, Swift, and Android snippets
    const cssSnippet = `rgba(${r}, ${g}, ${b}, 1)`;
    const objcSnippet = `[UIColor colorWithRed:${(r / 255).toFixed(2)} green:${(g / 255).toFixed(2)} blue:${(b / 255).toFixed(2)} alpha:1.0]`;
    const swiftSnippet = `UIColor(red: ${(r / 255).toFixed(2)}, green: ${(g / 255).toFixed(2)}, blue: ${(b / 255).toFixed(2)}, alpha: 1.0)`;
    const androidSnippet = `Color.rgb(${r}, ${g}, ${b})`;

    // Display results
    outputElement.textContent = `
CSS: ${cssSnippet}

Obj C: ${objcSnippet}

Swift: ${swiftSnippet}

Android: ${androidSnippet}
`;
}
