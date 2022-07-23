# Complete NodeJS Developer in 2022

###  Node.js - How We Get Here

* How do you run JavaScript?
* JavaScript Engines used by browsers:
  - Google Chrome's **V8** engine
  - Firefox's **SpiderMonkey** engine
  - Safari's **JSC(JavaScriptCore)** engine
* Key moments:
  - 1995: Netscape Navigator launched JavaScript language in the browser.
  - 1996: Netscape Navigator's v3.0 launched a server side JavaScript called LiveWire.
  - 2008: Google launched a poweful engine called V8 to run JavaScript.
  - 2009: Ryan Dahl launched a JavaScript runtime called Node.js to run JavaScript outside of the browser.


### Node.js Runtime

* Node.js combines V8 engine and libuv library to run JavaScript.
* libuv is a C library that provides ability to perfrom asynchronous tasks with event loop.
* Is web browser a JavaScript runtime? YES

**Node System**: A Node.js application essentially interacts with the v8 engine. If a piece of code is outside of v8 engine, such as OS operations, code is passed through node.js bindings that allow to use libraries like libuv to perform that specific action.

* Node.js runtime comes in two versions:
  - LTS(Long Term Support) - Stable and odd version of Node.js
  - Current - Latest and even version of Node.js


### Process argv

Process is an object that Provides information about, and control over, the current Node.js process.

Process argv property returns an array containing the command-line arguments passed when the Node.js process was launched.

[Check Code](./Foundations/hello.js)


### Node VS Browser

| Node.js | Browser |
| ------ | ------ |
| global | window |
| process | document |
| module | history |
| __filename | location |
| require() | navigator |

