const fs = require("fs");
const parse = require("csv-parse");

const habitablePlanets = [];

// Note - the file path that has been provided to createReadStream("Planets/kepler_data.csv") is realtive to the package.json file to run the program as `npm run kepler`.
// For running the program as `node index.js` in Planets folder, change the path accordingly to createReadStream('kepler_data.csv')

// to read file data in bytes
fs.createReadStream("Planets/kepler_data.csv")
  // pipe the stream data with parse to get a json format
  .pipe(
    parse({
      comment: "#", // specifying that the file containing lines with # will be considered as comments
      columns: true, // to create json format rather than having it in the form of array
    })
  )
  .on("data", (data) => {
    if (isHabitablePlanet(data)) {
      habitablePlanets.push(data); // data will be in json format
    }
  })
  .on("error", (err) => {
    console.error(err);
  })
  .on("end", () => {
    console.log(habitablePlanets.map((planet) => planet["kepler_name"]));
    console.log(`${habitablePlanets.length} habitable planets are found!`);
  });

// Filter planets on the basis of how habitable they are
function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}
