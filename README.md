# Stefano Cafarella Test
This file contains few notes to explain my work

## How to run
To install the required dependencies run the following command
```
npm install

```
To run the project run
```
npm run build && npm run start

```
## Design
### Server side
In index.js there is the server side implemeation for the project. Basically it exposes:
* '/' endpoint: serves the index page
* '/api/products' endpoint: it fetches the products integrating with the provided api
* static resources for client side implementation and styling

### Client side
The file main.js is responsible to bootsrap the react application, including the App.js class. The main component is the ProductList.js class, it is responsible to integrate with the node endpoint and to display data.

### Notes
In order to use ES6 feature I decided to use webpack with babel, this decision helped to fulfill the requirement 'use the
same one library for both'
