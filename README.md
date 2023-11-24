# umlaut-escape

## Description

`umlaut-escape` is a small JavaScript package that provides a single function - `escapeUmlaut` - for escaping special characters like umlauts (e.g. õ, ä, ö, ü) in a given string. The special characters are replaced with their respective [HTML entities](https://developer.mozilla.org/en-US/docs/Glossary/Entity). For a full list of currently supported HTML entities, see the [Current special characters map](#current-special-characters-map) at the end of this README.

## Installation

You can install this package via npm:

```bash
npm install umlaut-escape
```

## Usage

Import the `escapeUmlaut` function and use it to escape special characters in a string:

```typescript
import { escapeUmlaut } from "umlaut-escape";

const inputString = "Hällo Wörld";
const escapedString = escapeUmlaut(inputString);

console.log(escapedString); // Output: 'H&auml;llo W&Ouml;rld'
```

## API

`escapeUmlaut(input: string): string`
This function takes a string input as its parameter and returns a new string with special characters, such as umlauts (ä, ö, ü), replaced with their respective non-special characters.

## License

This package is released under the ISC License. See the [LICENSE](LICENSE) file for more details.

## Issues

If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository.

## Author

This package was created by Toomas Jaska.

## Changelog

See the CHANGELOG.md file for details about changes and version history.

## Current special characters map

| Character | HTML Entity |
| --------- | ----------- |
| Ÿ         | `&Yuml;`    |
| ÿ         | `&yuml;`    |
| Ü         | `&Uuml;`    |
| ü         | `&uuml;`    |
| Ö         | `&Ouml;`    |
| ö         | `&ouml;`    |
| Ï         | `&Iuml;`    |
| ï         | `&iuml;`    |
| Ë         | `&Euml;`    |
| ë         | `&euml;`    |
| Ä         | `&Auml;`    |
| ä         | `&auml;`    |
| À         | `&Agrave;`  |
| Á         | `&Aacute;`  |
| Â         | `&Acirc;`   |
| Ã         | `&Atilde;`  |
| Å         | `&Aring;`   |
| Æ         | `&AElig;`   |
| Ç         | `&Ccedil;`  |
| È         | `&Egrave;`  |
| É         | `&Eacute;`  |
| Ê         | `&Ecirc;`   |
| Ì         | `&Igrave;`  |
| Í         | `&Iacute;`  |
| Î         | `&Icirc;`   |
| Ð         | `&ETH;`     |
| Ñ         | `&Ntilde;`  |
| Ò         | `&Ograve;`  |
| Ó         | `&Oacute;`  |
| Ô         | `&Ocirc;`   |
| Õ         | `&Otilde;`  |
| Ø         | `&Oslash;`  |
| Œ         | `&OElig;`   |
| Ù         | `&Ugrave;`  |
| Ú         | `&Uacute;`  |
| Û         | `&Ucirc;`   |
| Ý         | `&Yacute;`  |
| Þ         | `&THORN;`   |
| à         | `&agrave;`  |
| á         | `&aacute;`  |
| â         | `&acirc;`   |
| ã         | `&atilde;`  |
| å         | `&aring;`   |
| æ         | `&aelig;`   |
| ç         | `&ccedil;`  |
| è         | `&egrave;`  |
| é         | `&eacute;`  |
| ê         | `&ecirc;`   |
| ì         | `&igrave;`  |
| í         | `&iacute;`  |
| ð         | `&eth;`     |
| ñ         | `&ntilde;`  |
| ò         | `&ograve;`  |
| ó         | `&oacute;`  |
| ô         | `&ocirc;`   |
| õ         | `&otilde;`  |
| ø         | `&oslash;`  |
| œ         | `&oelig;`   |
| ù         | `&ugrave;`  |
| ú         | `&uacute;`  |
| û         | `&ucirc;`   |
| ý         | `&yacute;`  |
| þ         | `&thorn;`   |
| Š         | `&Scaron;`  |
| š         | `&scaron;`  |
| Č         | `&Ccaron;`  |
| č         | `&ccaron;`  |
