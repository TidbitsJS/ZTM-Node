// const mission = "learn";
const mission = process.argv[2];

/*

Process.argv - Array of strings

process.argv[0] - Node path i.e. where the node is installed
process.argv[1] - File path i.e. where the file that is going to execute, in this case, hello.js.
procees.argv[n] - from index 2 onwards, anything that will be passed as argument while running the file

Ex., node hello.js

[
  '/usr/local/bin/node',
  '/media/sujata/MyVolume/Udemy/ZTM Node/Foundations/hello',
]

Ex., node hello.js playing

[
  '/usr/local/bin/node',
  '/media/sujata/MyVolume/Udemy/ZTM Node/Foundations/hello',
  'playing',
]

Ex., node hello.js playing games

[
  '/usr/local/bin/node',
  '/media/sujata/MyVolume/Udemy/ZTM Node/Foundations/hello',
  'playing',
  'games'
]

*/

console.log(process.argv);

if (mission === "learn") {
  console.log("Time to write some Node code!");
} else {
  console.log(`Is ${mission} really more fun?`);
}
