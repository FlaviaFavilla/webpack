Webpack configuration
=============

This is a Webpack project with SASS and Twig plugins.

Features
----------------

### Development mode 

Auto-open browser on index.html after bash command.

Auto-reload of browser after saving changes.

### Production mode

Compile files in "build" folder after bash command: if folder already exists and contains files, they will be deleted and new files will be write.

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

### SCSS - CSS

In "src/scss" there will be sass files. 

##### CASE 1
Add 1 or more scss files, GENERATE 1 CSS (merged): 

1) create the file in scss folder
2) in index.js import the SASS file OR use the SASS's import script!
3) the final output will be a UNIQUE file CSS !

```javascript
//  ------- IMPORT SASS FILES --------
import './scss/main.scss';
import './scss/variables.scss';
```

##### CASE 2
Add 1 or more scss files, GENERATE DISTINCT CSS files: 

1) create the file in scss folder
2) in the file "webpack.common.js" add the name and the route of the new file.
3) the final output will be: 
    * app.css ( the default one )
    * css.css ( the added one)

NOTE: first parameter (es. 'css') will be the new name of the css file after building.

```javascript
module.exports = {
    entry: {
        'app': './src/index.js',
        'css': './src/scss/variables.scss' // <-- new file here
    }
```


### TWIG

Twig files are in src folder, to add new files to the output:

#####  SIMPLE Twig file: 

In the file "webpack.prod.js", in "plugins", add the code:

```javascript
    new HtmlWebpackPlugin({
        template:  './src/index.html.twig'
    })
```


#####  Twig file generated with VARIABLES: 

1) In "webpack.prod.js", under "plugins" , add the code:

```javascript
    new HtmlWebpackPlugin({
        filename: 'help.html',  
        template:  './src/help.html.twig',
        helper: require('./src/help.js'),   // file con opzioni aggiuntive da passare alla pagina
        inject: false
    })
```
 + filename : name of exported file
 + template : url of the file to add
 + inject : the file will be without "head" and scripts
 + helper : helper is a custom option (can create as many options as needed), is possible to pass variables, objects (ecc..) to the file
 
2) In "help.js" add the code below to set variables:
 
```javascript
   let helper = {
       hello : "world!"
   };
   
   module.exports = helper;
```


3) In "help.html.twig" add the code below to import variables:
 
```javascript
   {{ htmlWebpackPlugin.options.helper.hello }}
```

+ helper : name of the custom option set in "webpack.prod.js"
+ hello : name of the variable in "help.js"
  


