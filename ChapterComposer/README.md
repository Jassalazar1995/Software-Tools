
# Chapter Composer Documentation

## Overview
Chapter composer is a Node.js script designed to automate the process of updating the `chapterContents.js` file for educational course websites. It parses structured data from a source file and generates a JavaScript object, which it then writes to the `chapterContents.js` file.

## Requirements
- Node.js installed on your system.
- Source data file (in JSON format) with the new chapter information.

## Installation
No specific installation required. Ensure you have Node.js installed on your system. Clone or download the script to your local environment where you have your course project set up.

## Usage
1. **Prepare Source Data File**: Create a JSON file (`sourceData.json`) with the structured data for your chapters. The format should match the expected structure in `chapterContents.js`.

2. **Place the Source Data File**: Put `sourceData.json` in the same directory as `chapter-composer.js`.

3. **Run the Script**: Navigate to the script's directory in your command line interface and run:

   ```bash
   node chapter-composer.js
   ```

4. **Check Output**: The `chapterContents.js` file will be updated or created in the same directory with the new chapter data.

## Source Data File Format
The source data file should be in JSON format with the following structure:

```json
{
  "chapterKey": {
    "title": "Chapter Title",
    "image": "path/to/image.jpg",
    "path": "relativePath",
    "subsections": ["Subsection 1", "Subsection 2"],
    "content": "Description or content of the chapter",
    "youtubeChannelId": "YouTube_Channel_ID"
  },
  // Repeat for other chapters
}
```

## Script Configuration
No additional configuration is required for the basic operation of the script. Advanced users can modify the script to accommodate different source data formats or output requirements.

## Error Handling
The script includes basic error handling for file reading and writing operations. In case of errors, the script logs the error message to the console.

## Support
For support, please open an issue in the repository or contact the maintainer at Jassalazar1995@gmail.com.

