const fs = require('fs');
const path = require('path');

// Function to remove comments from CSS
function removeComments(cssContent) {
    // Remove single-line comments (//)
    cssContent = cssContent.replace(/\/\/.*$/gm, '');

    // Remove multi-line comments (/* ... */)
    cssContent = cssContent.replace(/\/\*[\s\S]*?\*\//gm, '');

    return cssContent;
}

// File paths
const inputFilePath = path.join(__dirname, 'globals.css'); // Replace 'your-file.css' with your actual file name
const outputFilePath = path.join(__dirname, 'cleaned-file.css'); // You can change the output file name

// Read the CSS file
fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Remove comments from the CSS content
    const cleanedCSS = removeComments(data);

    // Save the cleaned CSS to a new file
    fs.writeFile(outputFilePath, cleanedCSS, 'utf8', (err) => {
        if (err) {
            console.error('Error writing the file:', err);
            return;
        }
        console.log(`Comments removed and cleaned CSS saved to: ${outputFilePath}`);
    });
});
