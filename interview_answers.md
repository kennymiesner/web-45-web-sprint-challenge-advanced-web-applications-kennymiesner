# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. Explain what a token is used for.

A token is a string of cryptic text issued by the server that can be stored on the client-side using local storage or session storage. The server can then tell the client that it issued the token and read the token to make decisions for data transfer based on the client's permission.

2. What steps can you take in your web apps to keep your data secure?

You can utilize a service like Jason Web Tokens (JWT)s to handle the tokens, add an authorization token header to every request to allow access to protected resources that require authentication.

3. Describe how web servers work.

Code is stored on the physical form of a web server, waiting to serve web pages upon request. A client, i.e. browser, app, etc., sends a request to the server.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create, Read, Update, Delete are the four basic operations of persistent storage.