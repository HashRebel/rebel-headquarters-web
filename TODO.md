# TODO List

This is a TODO list for things that don't fit into files.

## Config Related

### package.json

* Double check the production dependencies. For example do I really need bulma and font-awesome on the server? These are built before deploying from what I understand.
* Put browserslist in package.json file (this will help autoprefixer)

### SASS

* Interesting way to nest properties:

    Nested Properties
    CSS has quite a few properties that are in "namespaces;" for instance, font-family, font-size, and font-weight are all in the font namespace. In CSS, if you want to set a bunch of properties in the same namespace, you have to type it out each time. Sass provides a shortcut for this: just write the namespace once, then nest each of the sub-properties within it. For example:

    .funky {
      font: {
        family: fantasy;
        size: 30em;
        weight: bold;
      }
    }
https://sass-lang.com/documentation/file.SASS_REFERENCE.html#nested_rules
