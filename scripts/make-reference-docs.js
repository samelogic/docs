const { join, parse } = require("path");
const { exec } = require("child_process");

// This scripot is used to generate the API documentation for libraries
// generated with the @microsoft/api-generator library.

const jsonDocs = [
  {
    input: "node_modules/@samelogic/samelogic-js/dist",
    output: "docs/developers/sdks/web/reference",
  },
];

async function main() {
  jsonDocs.forEach(async (doc) => {
    console.log(`Generating docs for ${doc}`);
    await new Promise((resolve, reject) =>
      exec(
        `api-documenter markdown --input-folder ${doc.input} --output-folder ${doc.output}`,
        (err, stdout, stderr) => {
          console.log(stdout);
          console.error(stderr);
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      )
    );
  });
}

main();
