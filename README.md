# Fallback Font Adjuster

---

## Nederlands (Dutch) --> for English ⬇

# Font Fallback Adjuster

Een interactieve tool om de metrische eigenschappen van fallback-lettertypen aan te passen en te visualiseren. Deze tool helpt om de layout shift te minimaliseren wanneer aangepaste fonts worden geladen.

Het is het beste om de Fallback Font Adjuster in een Chrome Incognito-venster te gebruiken, omdat Firefox niet goed omgaat met directe @font-face-aanpassingen in de browser. Dit kan leiden tot onregelmatige resultaten.

[Meer info en demo op](https://janhoek.com/fallback-font-adjuster/)

## Eigenschappen

- Real-time aanpassing van font metrics
- Visuele vergelijking tussen standaard en fallback fonts
- Aanpasbare tekst voor testen
- Ondersteunt de volgende CSS eigenschappen:
  - size-adjust
  - ascent-override
  - descent-override
  - line-gap-override

## Installatie

1. Download de Fallback Font Adjuster naar je lokale omgeving
2. Zorg dat je de url van de Default-font aanpast in app.css:
   Liefst een ttf bestand maar woff2 kan ook.
   ```
   src: url("../default-font.ttf")  format("truetype")
   src: url("../default-font.woff2") format("woff2");

   ```
3. Zorg dat je gewenste default-font op de juist plek staat.
4. Open `fallback-font-adjuster.html` in een private window in je webbrowser

## Gebruik

1. Open de tool in je browser in een incognitovenster om zoveel 
   mogelijk invloed van extensies en andere factoren te vermijden.
2. Pas de tekst aan in het tekstvak om verschillende teksten te testen.
3. Kies je gewenste fallback font (bijvoorbeeld Arial of Times).
3. Gebruik de regelaars onderaan om de volgende waardes aan te passen:
   - **size-adjust**: Past de algemene grootte van het fallback font aan
   - **ascent-override**: Past de hoogte van tekens boven de baseline aan
   - **descent-override**: Past de diepte van tekens onder de baseline aan
   - **line-gap-override**: Past de ruimte tussen regels aan

De aanpassingen worden direct zichtbaar in het preview venster, waar:
- Rode tekst het standaard font toont
- Blauwe tekst het fallback font toont
- Overlap wordt getoond in een donker paarse kleur

## Aanpassing

### Standaard Font Aanpassen

Om het standaard font te wijzigen, pas de `@font-face` regel aan in de CSS:

```css
@font-face {
    font-family: "Default-font";
    src: url('../default-font.ttf')  format('truetype');
    font-display: swap;
}
```

## Technische Vereisten

- Een webserver of lokale ontwikkelomgeving om de fonts correct te laden en te testen.
- Het gewenste standaard font in ttf-formaat. 
- Mocht je alleen toegang hebben tot en woff2 font dan kun je die ook gebruiken.
  src: url("../default-font.woff2") format("woff2");

## Notities

- De tool gebruikt `mix-blend-mode: multiply` om de overlap tussen fonts te visualiseren
- Alle aanpassingen gebeuren real-time zonder pagina refresh
- De tool is responsive en werkt op verschillende schermformaten


## Licentie

MIT License - Voel je vrij om de code aan te passen en te gebruiken in je eigen projecten.

---

## English

An interactive tool for adjusting and visualizing the metric properties of fallback fonts. This tool helps minimize layout shifts when custom fonts are loaded.

It's best to use the Fallback Font Adjuster in a Chrome Incognito Window, as Firefox doesn't handle direct @font-face adjustments in the browser well. This can lead to irregular results.

You can find a demo on[Visit OpenAI](https://www.openai.com)

## Features

- Real-time adjustment of font metrics
- Visual comparison between standard and fallback fonts
- Customizable text for testing
- Supports the following CSS properties:
  - size-adjust
  - ascent-override
  - descent-override
  - line-gap-override

## Installation

1. Download the Fallback Font Adjuster to your local environment.
2. Make sure to adjust the URL of the Default font in app.css: Preferably a TTF file,
   but WOFF2 can also be used.
   ```
   src: url("../default-font.ttf") format("truetype");
   src: url("../default-font.woff2") format("woff2");

   ```
3. Ensure your desired default font is in the correct location.

4. Open fallback-font-adjuster.html in your a browser.

## Usage

1. Open the tool in your chrome browser in a private window to minimize 
   the influence of extensions and other factors.
2. Modify the text in the text box to test different texts.
3. Choose your desired fallack-font from the optionbox. If the fallback is not 
   available locally - you get an error message and its resetting to Georgia.
4. Use the controls to adjust the following values:

    - **size-adjust**: Adjusts the overall size of the fallback font.
    - **ascent-override**: Adjusts the height of characters above the baseline.
    - **descent-override**: Adjusts the depth of characters below the baseline.
    - **line-gap-override**: Adjusts the space between lines.

The adjustments are immediately visible in the preview window, where:

- Red text displays the standard font.
- Blue text displays the fallback font.
- Overlap is shown in a dark purple color.

## Customization

### Adjusting the Standard Font

To change the standard font, modify the @font-face rule in the CSS:

```css
@font-face {
    font-family: "Default-font";
    src: url('../default-font.ttf') format('truetype');
}
```

## Technical Requirements

- A web server or local development environment to load the fonts correctly.
- The desired standard font in TTF format.
- If you only have access to a WOFF2 font, you can use that as well:
    ```
    src: url("../default-font.woff2") format("woff2");
    ```

## Notes

- The tool uses mix-blend-mode: multiply to visualize the overlap between fonts.
- All adjustments occur in real-time without a page refresh.
- The tool is responsive and works on various screen sizes.

## License

MIT License - Feel free to modify and use the code in your own projects.

