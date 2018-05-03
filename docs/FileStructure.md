# File structures

This document explains the rational behind each file structure

## Sass

.`
|--src
  |--stylesheet
    |--base - global sass files (e.g. color, font, etc.)
    |--components - all modules (e.g. buttons, footer, etc.)
    |--pages - page specific style sheets
    |--layouts - layout and responsive rules
    |--utils - functions, mixins variables
    |--vendor - used to store any 3rd party Sass
