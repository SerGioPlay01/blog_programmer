function convertToInlineStyles() {
    const html = document.getElementById("htmlInput").value;
    const css = document.getElementById("cssInput").value;

    if (!html.trim() || !css.trim()) {
      alert("Please provide both HTML and CSS!");
      return;
    }

    try {
      // Parse HTML and CSS using a simple inline styling library
      const styleSheet = parseCSS(css);
      const inlinedHTML = applyInlineStyles(html, styleSheet);
      document.getElementById("output").value = inlinedHTML;
    } catch (error) {
      alert("Error processing your input. Please check your HTML and CSS.");
    }
  }

  // Basic CSS parser
  function parseCSS(css) {
    const styleSheet = {};
    const rules = css.match(/[^{]+{[^}]*}/g) || [];
    rules.forEach(rule => {
      const [selector, styles] = rule.split("{");
      const styleObj = {};
      styles
        .replace("}", "")
        .split(";")
        .forEach(declaration => {
          const [property, value] = declaration.split(":");
          if (property && value) {
            styleObj[property.trim()] = value.trim();
          }
        });
      styleSheet[selector.trim()] = styleObj;
    });
    return styleSheet;
  }

  // Apply inline styles to the HTML
  function applyInlineStyles(html, styleSheet) {
    const div = document.createElement("div");
    div.innerHTML = html;

    Object.keys(styleSheet).forEach(selector => {
      const elements = div.querySelectorAll(selector);
      elements.forEach(el => {
        const styles = styleSheet[selector];
        Object.keys(styles).forEach(property => {
          el.style[property] = styles[property];
        });
      });
    });

    return div.innerHTML;
  }