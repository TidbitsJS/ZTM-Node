const EventEmitter = require("events");
const celebrity = new EventEmitter();

// Subscribe to celebrity for Observer 1
celebrity.on("race win", function () {
  console.log("Congratulations! You are the best!");
});

// Many events sharing same name can be registered.
// Subscribe to celebrity for Observer 2
celebrity.on("race win", () => {
  console.log("Boo I could have done better than that!");
});

// Process object is an instance of EventEmitter.
// Below code line will execute after the complete file execution.
process.on("exit", (code) => {
  console.log("Process exit event with code: ", code);
});

// Event emitters
celebrity.emit("race win"); // will execute both the event emitters, i.e. of observer1 & onserver2
celebrity.emit("race lost"); // no event registered under that name, so nothing will happen.
celebrity.emit("race win"); // will execute both the event emitters, i.e. of observer1 & onserver2

// Event with arguments ↓

const challenge = new EventEmitter();

// Subscribe to challenge for Observer 1
challenge.on("hack", (result) => {
  if (result === "hacked") {
    console.log("Damn, you hacked it!");
  }
});

// Subscribe to challenge for Observer 2
challenge.on("hack", (result) => {
  if (result === "hacked") {
    console.log("Easy peasy!");
  }
});

// Same as above except passing arguments, "hacked" or "failed" in this case.
challenge.emit("hack", "hacked");
challenge.emit("hack", "failed");
challenge.emit("hack", "hacked");

// EventEmitters calls all listeners synchoronously in the order in which they registered.
// Listener function can switch to an asynchronous mode of operation using -
//      1. setImmediate()
//      2. process.nextTick()

const asyncEmitter = new EventEmitter();
asyncEmitter.on("async-event", (a, b) => {
  console.log("Before async");
  setImmediate(() => {
    console.log("this happens asynchronously");
  });

  console.log("After setImmediate");

  setTimeout(() => {
    console.log(`a is ${a} & b is ${b}`);
  }, 3000);

  console.log("End async");
});

asyncEmitter.emit("async-event", "a", "b");
