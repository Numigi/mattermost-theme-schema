const fs = require("fs");
const ajv = require("ajv");

// Read the schema from a file
const schemaPath = "./schema.json";
const schema = JSON.parse(fs.readFileSync(schemaPath, "utf8"));

// Read the JSON data from a file
const dataPath = "./themes.json";
const jsonData = JSON.parse(fs.readFileSync(dataPath, "utf8"));

// Create an AJV instance
const validator = new ajv();

// Compile the schema
const validate = validator.compile(schema);

// Validate the JSON data against the schema
const isValid = validate(jsonData);

// Check if the validation was successful
if (isValid) {
  console.log("Theme data valid.");
} else {
  console.error(validate.errors);
}
