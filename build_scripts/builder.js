const fs = require('fs-extra');
const path = require('path');
const pageTemplate = require('./page_template');
const cleancss = require('clean-css')

// All paths are relative to package.json.
const pagesPath = './pages';
const pagesMetaPath = './pages_meta';
const copyFolders = ['./images', './css', './js'];
const outputPath = './build';

// First delete everything in the build directory.
console.log('Cleaning previous build...');
try {
  for (let file of fs.readdirSync(outputPath)){
    fs.removeSync(path.join(outputPath, file));
  }
}
catch (err){
  console.log('Error during cleanup: ' + err);
  process.exit(1);
}

// Then read everything in the pages and pages_meta directories.
const pages = {}, pagesMeta = {};

console.log('Loading pages...');
try {
  for(let page of fs.readdirSync(pagesPath)){
    pages[page] = fs.readFileSync(path.join(pagesPath,page),'utf8');
  }
}
catch (err){
  console.log('Error during page loading: ' + err);
  process.exit(1);
}

console.log('Loading pages metadata...');
try {
  for(let pageMeta of fs.readdirSync(pagesMetaPath)){
    pagesMeta[pageMeta] = fs.readFileSync(path.join(pagesMetaPath,pageMeta),'utf8');
  }
}
catch (err){
  console.log('Error during metadata loading: ' + err);
  process.exit(1);
}

// Generate each page from the data provided, using the template.
console.log('Generating pages...');
try {
  for(let page of Object.entries(pages)) {
    let pageName = page[0].slice(0, page[0].lastIndexOf('.'));
    let metaData = pagesMeta.hasOwnProperty(pageName+'.json')
      ? JSON.parse(pagesMeta[pageName+'.json'])
      : {};
    metaData.title = metaData.title || pageName;
    let pageContent = page[1];
    fs.writeFileSync(
      path.join(outputPath,pageName+'.html'),
      pageTemplate.generatePage(pageContent, metaData));
  }
}
catch (err){
  console.log('Error during page generation: ' + err);
  process.exit(1);
}

// Copy folders with assets into build folder.
console.log('Copying folders...');
try {
  for(let copyFolder of copyFolders){
    fs.copySync(copyFolder, path.join(outputPath,copyFolder));
  }
}
catch (err){
  console.log('Error during folder copying: ' + err);
  process.exit(1);
}

console.log('Minifying CSS...')
try {
  const pathToCss = path.join(outputPath, "/css/style.css");
  const input = fs.readFileSync(pathToCss, "utf8");
  const options = {
    level: 2 // Please note that level 1 optimization options are generally safe while level 2 optimizations should be safe for most users.
  };
  const output = new cleancss(options).minify(input);
  fs.writeFileSync(pathToCss, output.styles);
}
catch (err){
  console.log('Error during CSS minification: ' + err);
  process.exit(1);
}

// Copy now.json to build folder
try {
  fs.copySync("./now.json", path.join(outputPath, "/now.json"));
}
catch (err) {
  console.log('Error during now.json copying: ' + err);
  process.exit(1);
}

// Process complete.
console.log('Done!');