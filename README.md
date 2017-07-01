# UTN Web Assembly

This is the main repository for a research group in the UTN FRRo (Argentina). The aim of this project is to document how much efficient is WA over JS and ASM.

## Tests

Inside the Tests folder you will find two basic directories:
- base-template
- test-example

This are prepared to serve as a template for future tests.

## Add a test

To add a new test simply copy the "test-example" folder, rename it and inside you will find 3 files:
- program.wasm
- program.js
- test-example.html

### WASM

This is the wasm binary file, it is required to have a function inside named "main" to work. So far just functions with no arguments are supported. If you want to change the name of the file, look for configuration needed in the HTML section.

### JS

This is the JS file with the "JSmain" function, it is important to use this name for the main function. So far just functions with no arguments are supported. This file should have the "program.js" name (NOT OPTIONAL).

#### HTML

Once copied, you can rename it, it is recommended to rename it with the same name of the folder. 

Then you have to change this lines:

**Global variables: (lines 6-9)**
Change the folder name variable for the name you use in the folder and change the file name if you want (optional).
```html
<script>
    var folder = 'test-example'
    var filename = 'program'
</script> 
```

## Run a test

For running a test you have two options, with online (Github) files or offline (Firefox Only) files.

### Online

Just commit and push and then execute the html in any browser (if you are not a colaborator you can PR)

### Ofline

Open the html file add and change the folloging line (By default, line 5)

```html
<script src="../base-template/base.js" type="text/javascript"></script> 
```

For this

```html
<script src="../base-template/base.js" type="text/javascript"></script> 
<script src="../base-template/base_offline.js" type="text/javascript"></script> 
```
