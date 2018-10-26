# create-pagin
[![npm version](https://img.shields.io/npm/v/create-pagin.svg?style=flat-square)](https://www.npmjs.org/package/create-pagin)
[![npm downloads](https://img.shields.io/npm/dm/create-pagin.svg?style=flat-square)](http://npm-stat.com/charts.html?package=create-pagin)
[![LICENSE](https://img.shields.io/github/license/codejunkers1/create-pagin.svg?style=flat-square)](https://github.com/codejunkers1/create-pagin)

## Features

- Create Pagination for user data
- Create Pagination with sort by key for user data
- Create Pagination with search by value on selected columns for user data
- Create Pagination with Full Text Searching by value

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
 var result = Pagin.CreatePagin(data, {page_size:10, page_no: 2, sort_by: 'name'}) 
 
 // pagination with sorting by key descending
 var result = Pagin.CreatePagin(data, {page_size:10, page_no: 2, sort_by: '-name'}) 

 // pagination with search by value and selected columns
 var result = Pagin.CreatePagin(data, {page_size:10, page_no: 2, sort_by: 'name', search: 'a', search_cols: ['name', 'grade']}) 

 // Pagination with Full Text Searching by value
 var result = Pagin.CreatePagin(data, {page_size:10, page_no: 2, sort_by: 'name', search: 'a'})

 // Search the multiple values
 var result = Pagin.CreatePagin(data, {page_size:10, page_no: 2, sort_by: 'name', search: ['a', 'b']}) 

 // Result values
 console.log(result);
 {
 		page_size: 10,
	  page_no: 1,
	  previous_page: null,
	  current_page: 1,
	  next_page: null,
	  total_pages: null,
	  data: [],
	  total: 4,
	  from: 1,
	  to: 4
 }
```

## Author

[Venkata Sai Katepalli - Full Stack Engineer](http://venkatasaikatepalli.github.io)

## License

MIT
