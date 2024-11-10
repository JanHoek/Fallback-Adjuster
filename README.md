# Font Fallback Metrics Adjuster

An interactive tool for adjusting and visualizing the metric properties of fallback fonts. This tool helps minimize layout shifts when custom fonts are loaded.


View the documentation
## 📋 Features

- Real-time adjustment of font metrics
- Visual comparison between standard and fallback fonts
- Customizable text for testing
- Supports the following CSS properties:
  - size-adjust
  - ascent-override
  - descent-override
  - line-gap-override

## 🚀 Installation

1. Download this file to your local environment.
2. Make sure to adjust the URL of the Default font: Preferably a TTF file,
   but WOFF2 can also be used.
   ```
   src: url("../default-font.ttf") format("truetype");
   src: url("../default-font.woff2") format("woff2");

   ```
3. Optionally adjust the Fallback font.
   ```
  src: local("Arial");

   ```
4. Ensure your desired default font is in the correct location.

5. Open fallback-font-adjuster.html in your web browser.

## ⚙️ Usage

1. Open the tool in your browser.
2. Modify the text in the text box to test different texts.
3. Use the sliders at the bottom to adjust the following values:

    - **size-adjust**: Adjusts the overall size of the fallback font.
    - **ascent-override**: Adjusts the height of characters above the baseline.
    - **descent-override**: Adjusts the depth of characters below the baseline.
    - **line-gap-override**: Adjusts the space between lines.

The adjustments are immediately visible in the preview window, where:

- Red text displays the standard font.
- Blue text displays the fallback font.
- Overlap is shown in a dark purple color.

## 🔧 Customization

### Adjusting the Standard Font

To change the standard font, modify the @font-face rule in the CSS:

```css
@font-face {
    font-family: "Default-font";
    src: url('../default-font.ttf') format('truetype');
    font-display: swap;
}
```

### Adjusting the Fallback Font

To change the fallback font, modify the second @font-face rule:

```css
@font-face {
    font-family: "Fallback-font";
    src: local(YourFallbackFont);
    /* The other values will be dynamically adjusted via the UI */
}
```

## 💻 Technical Requirements

- A web server or local development environment to load the fonts correctly.
- The desired standard font in TTF format.
- If you only have access to a WOFF2 font, you can use that as well:
    ```
    src: url("../default-font.woff2") format("woff2");
    ```

##📝 Notes

- The tool uses mix-blend-mode: multiply to visualize the overlap between fonts.
- All adjustments occur in real-time without a page refresh.
- The tool is responsive and works on various screen sizes.

## 📜 License

MIT License - Feel free to modify and use the code in your own projects.
