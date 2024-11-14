  const systemFonts = new Map([
    ["Sans Serif", ["Arial", "Helvetica", "Tahoma", "Verdana", "Helvetica Neue", "Trebuchet MS", "Geneva", "Arial Black"]],
    ["Serif", ["Times New Roman", "Times", "Georgia", "Garamond", "Palatino", "Lucida Bright"]],
    ["Monospace", ["Courier", "Courier New", "Lucida Sans Typewriter"]]
  ]);

  // Populate select with system fonts
  const select = document.getElementById('font-fallback-select');
  for (let [group, fonts] of systemFonts) {
    const optGroup = document.createElement('optgroup');
    optGroup.label = group;
    for (let font of fonts) {
      const option = document.createElement('option');
      option.value = font;
      option.text = font;
      optGroup.appendChild(option);
    }
    select.appendChild(optGroup);
  }

  // Select Georgia as default
  select.value = "Georgia";

  const inputs = document.querySelectorAll('input');
  const textArea = document.getElementById('input-text');
  const defaultText = document.querySelector('.default-text');
  const fallbackText = document.querySelector('.fallback-text');
  const errorMessage = document.getElementById('font-error'); // Error message element

  function resetControls() {
    select.value = "Georgia";
    document.getElementById('size-adjust').value = 100;
    document.getElementById('ascent-override').value = 100;
    document.getElementById('descent-override').value = 15;
    document.getElementById('line-gap-override').value = 0;
    textArea.value = "Font fallback adjuster voor je website.";
    updateText();
    updateFallbackFont();
  }

  function updateText() {
    const text = textArea.value;
    defaultText.textContent = text;
    fallbackText.textContent = text;
  }

  async function updateFallbackFont() {
    const selectedFont = select.value;
    const sizeAdjust = document.getElementById('size-adjust').value;
    const ascentOverride = document.getElementById('ascent-override').value;
    const descentOverride = document.getElementById('descent-override').value;
    const lineGapOverride = document.getElementById('line-gap-override').value;

    // Remove existing fallback font if it exists
    for (let font of document.fonts) {
      if (font.family === 'Fallback-font') {
        document.fonts.delete(font);
      }
    }

    // Create new font face with updated metrics
    const fallbackFontFace = new FontFace('Fallback-font', `local("${selectedFont}")`, {
      sizeAdjust: `${sizeAdjust}%`,
      ascentOverride: `${ascentOverride}%`,
      descentOverride: `${descentOverride}%`,
      lineGapOverride: `${lineGapOverride}%`
    });

    try {
      const loadedFace = await fallbackFontFace.load();
      document.fonts.add(loadedFace);
      fallbackText.style.fontFamily = 'Fallback-font';
      errorMessage.style.display = "none"; // Hide error message if load succeeds
    } catch (error) {
      // Fail silently in the console, but update UI with Georgia as fallback
      select.value = "Georgia";
      fallbackText.style.fontFamily = 'Georgia';

      // Show error message in UI
      errorMessage.textContent = `${selectedFont} is not available locally - fallback is reset to Georgia`;
      errorMessage.style.display = "block";

      // Return false to stop execution or further error handling if necessary
      return false;
    }
  }


  inputs.forEach(input => {
    input.addEventListener('input', updateFallbackFont);
  });

  select.addEventListener('change', updateFallbackFont);
  textArea.addEventListener('input', updateText);
  document.getElementById('reset-button').addEventListener('click', resetControls);

  // Initial setup
  updateText();
  updateFallbackFont();