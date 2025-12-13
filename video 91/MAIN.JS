// This is exercise 15 clear the clutter 

/*
You have to write a Node.js program to clear the clutter inside of a directory and organize the contents of that directory into different folders

for example, these files become:

1. name.jpg
2. name.png
3. ninja.pdf
5. this.pdf
6. cat.jpg

To this :
pdf/ninja.pdf
jpg/name.jpg, jpg/cat.jpg
*/

const fs = require("fs");
const path = require("path");

const folderPath = __dirname; // folder to clean

// read all files in the folder
const files = fs.readdirSync(folderPath);

for (let file of files) {

  // get file extension (jpg, pdf, png)
  const ext = path.extname(file).slice(1);
  if (!ext) continue;

  const extFolder = path.join(folderPath, ext);

  // create folder if it doesn't exist
  if (!fs.existsSync(extFolder)) {
    fs.mkdirSync(extFolder);
  }

  // move file into its extension folder
  fs.renameSync(
    path.join(folderPath, file),
    path.join(extFolder, file)
  );
}

console.log("Clutter cleared ");
