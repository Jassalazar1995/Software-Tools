
const fs = require('fs');
const path = require('path');

// Function to read and parse the source data file (assuming JSON for simplicity)
function readSourceData(filePath) {
  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData);
}

// Function to generate the JavaScript object literal string
function generateObjectLiteral(data) {
  // Convert the data into a string representation of a JavaScript object
  // This is a simple implementation and might need to be more complex depending on the structure of your data
  return `const chapterContents = ${JSON.stringify(data, null, 2)};\n\nexport default chapterContents;`;
}

// Main function to update the chapterContents.js file
function updateChapterContents(sourceFilePath, outputFilePath) {
  try {
    const data = readSourceData(sourceFilePath);
    const jsObjectLiteral = generateObjectLiteral(data);
    fs.writeFileSync(outputFilePath, jsObjectLiteral);
    console.log('chapterContents.js has been updated successfully.');
  } catch (error) {
    console.error('Failed to update chapterContents.js:', error);
  }
}

// File paths
const sourceDataPath = path.join(__dirname, 'sourceData.json'); // Path to your source data file
const outputFilePath = path.join(__dirname, 'chapterContents.js'); // Path to your chapterContents.js file

// Run the update
updateChapterContents(sourceDataPath, outputFilePath);
