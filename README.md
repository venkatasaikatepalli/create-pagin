# create-pagin
[![npm version](https://img.shields.io/npm/v/create-pagin.svg?style=flat-square)](https://www.npmjs.org/package/create-pagin)
[![npm downloads](https://img.shields.io/npm/dm/create-pagin.svg?style=flat-square)](http://npm-stat.com/charts.html?package=create-pagin)
[![LICENSE](https://img.shields.io/github/license/codejunkers1/create-pagin.svg?style=flat-square)](https://github.com/codejunkers1/create-pagin)

## Features

- Create Pagination for user data
- Create Pagination with sort by key for user data
- Create Pagination with search by value on selected columns for user data

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
    {name: 'Testa', grade: 'A'},
    {name: 'Test2', grade: 'B'},
    {name: 'Testa', grade: 'C'},
    {name: 'Test4', grade: 'A'},
 ]
 // Calling paginating module and result to a variable

 // only pagination
 var result = Pagin.CreatePagin(data, {page_size:10, page_no: 2}) 
 
 // pagination with sorting by key ascending
 var result = Pagin.CreatePagin(data, {page_size:10, page_no: 2, sortBy: 'name'}) 
 
 // pagination with sorting by key descending
 var result = Pagin.CreatePagin(data, {page_size:10, page_no: 2, sortBy: '-name'}) 

 // pagination with search by value and selected columns
 var result = Pagin.CreatePagin(data, {page_size:10, page_no: 2, sortBy: 'name', search: 'a', search_cols: ['name', 'grade']}) 
```

## Author

[Venkata Sai Katepalli - Full Stack Engineer](http://venkatasaikatepalli.github.io)

## License

MIT
