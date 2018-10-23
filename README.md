# create-pagin

Promise based HTTP client for the browser and node.js

## Features

- Create Pagination for user data

## Installing

Using npm:

```bash
$ npm install create-pagin
```

## Example

Generating `Pagination` for Given data

```js
// import create pagin module to Pagin
 import Pagin from 'create-pagin'
 
 // data for paginating
 var data = [
    {name: 'Test1', grade: 'A'},
    {name: 'Test2', grade: 'A'},
    {name: 'Test3', grade: 'A'},
    {name: 'Test4', grade: 'A'},
 ]
 // Calking paginating module and result to a variable
 var result = Pagin.CreatePagin(data, {page_size:10, page_no: 2})
```

## Author

[Venkata Sai Katepalli - Full Stack Engineer](http://venkatasaikatepalli.github.io)

## License

MIT
