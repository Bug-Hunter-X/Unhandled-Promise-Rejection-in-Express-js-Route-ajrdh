# Unhandled Promise Rejection in Express.js Route

This example demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous route handlers.  Without proper error handling, these rejections can cause the server to crash.

## Bug

The `bug.js` file contains an Express.js application with a route that performs an asynchronous operation.  The operation might fail, but the code lacks proper error handling. If the asynchronous operation rejects, the error is only logged to the console and there is no attempt to send an error response.  This will cause the server to crash and the request will not be completed gracefully. 

## Solution

The `bugSolution.js` file shows the corrected code.  It uses a `.catch` block within the asynchronous route handler to gracefully handle potential errors. The error is caught, logged, and an appropriate error response is sent to the client. This prevents the server from crashing.

## How to Reproduce

1.  Run `node bug.js`
2.  Send several requests to the server. Due to the random nature of the error simulation, you will eventually trigger a server crash.
3.  Run `node bugSolution.js`
4.  Send several requests; observe that the server remains stable and handles errors correctly. 