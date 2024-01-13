
# Chapter Composer Example Usage

## Overview
This document outlines an example use case for the `chapter-composer.js` script, which is designed to automate the process of updating the `chapterContents.js` file in an educational course website.

## Example `sourceData.json`

Suppose we are adding a new chapter titled "Advanced Topology". We create a `sourceData.json` file as follows:

```json
{
  "advancedTopology": {
    "title": "Advanced Topology Concepts",
    "image": "./images/advtopology/concepts.jpg",
    "path": "advancedTopology",
    "subsections": [
      "Homeomorphism",
      "Fundamental Group",
      "Covering Spaces",
      "Homotopy"
    ],
    "content": "Explore the fundamental concepts of advanced topology, including homeomorphisms, fundamental groups, covering spaces, and homotopy.",
    "youtubeChannelId": "UCAdvTopology123"
  }
}
```

## Running the Script

After placing the `sourceData.json` in the same directory as `chapter-composer.js`, run the script:

```bash
node chapter-composer.js
```

## Script Processing Steps

1. **Reads the `sourceData.json` file**: The script parses the JSON data into a JavaScript object format.
2. **Generates the JavaScript object literal**: It constructs a string representation of this object for `chapterContents.js`.
3. **Writes to `chapterContents.js`**: The new chapter data is added to the file.

## Output

The `chapterContents.js` file is updated with the new "Advanced Topology" chapter.

## Use Case Scenario

At the end of the spring semester, a new course on "Advanced Topology" is added. The necessary information is compiled into the `sourceData.json` file and processed by `chapter-composer.js`. The script updates the website's content structure, making the new chapter available for students in the upcoming semester.

## Conclusion

`chapter-composer.js` streamlines content updates, simplifying the maintenance and expansion of educational platforms.
