function updatePreview() {
    const hexInput = document.getElementById('hexInput').value;
    const colorPreview = document.getElementById('colorPreview');
    colorPreview.style.backgroundColor = hexInput;
}

function convertHexToRgb() {
    const hexInput = document.getElementById('hexInput').value.trim();
    const redValue = document.getElementById('redValue');
    const greenValue = document.getElementById('greenValue');
    const blueValue = document.getElementById('blueValue');
    const outputElement = document.getElementById('output');

    // Remove the # if present
    const hex = hexInput.startsWith('#') ? hexInput.slice(1) : hexInput;

    // Extract RGB values
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

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
