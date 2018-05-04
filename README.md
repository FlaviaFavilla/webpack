Webpack configuration
=============

This is a Webpack project with SASS and Twig plugins.

Features
----------------

### Development mode 

Auto-open browser on index.html after bash command.

Auto-reload of browser after saving changes.

### Production mode

Compile files in "build" folder after bash command: if folder already contains files, they will be deleted and new files will be written.

The output is set to extract the CSS file from js file.


How to
----------------

Install:

```bash
npm install
```


Development:

```bash
npm run start
```


Building:

```bash
npm run build
```
