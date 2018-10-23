/**
  Auther: Venakata Sai Katepalli
  Features: 
    - Pagination
    - Pagination with sorting
*/

// Default Pagination
var paginData = {
  page_size: 15,
  page_no: 1,
  previous_page: null,
  current_page: 1,
  next_page: null,
  total_pages: null,
  data: [],
  total: 0,
  from: 0,
  to: 0
}
// exports to access global
module.exports = function(datalist, {page_size=15, page_no=1, sortBy=null}) {
  paginData.total = datalist.length;
  paginData.page_size = page_size
  if (datalist.length<1) {
    console.log('Your data is empty......!')
    return paginData;
  } else {
    if (sortBy !== null) {
      datalist = sortBy[0]==='-'?sortDataByDes(datalist, sortBy):sortDataByAsc(datalist, sortBy);
    }
    paginData.page_no = page_no
    paginData.current_page = page_no
    return createPagin(datalist);
  }
};

// create pagination with given list of data
function createPagin(datalist) {
  // check whether correct page_no
  if (paginData.page_size * paginData.page_no > paginData.total) {
    paginData.page_no = 1
    paginData.current_page = 1
    console.log("%cInvalid Page no", "color: red");
  }

  // check whether correct page_size
  if (paginData.page_size > paginData.total) {
    paginData.data = datalist
    paginData.page_no = 1
    paginData.current_page = 1
    paginData.from = 1
    paginData.from = paginData.total
    return paginData
  } else {
    paginData.from = (paginData.page_size * (paginData.current_page - 1)) + 1;
  }
  
  // last page
  if (paginData.total < paginData.page_size) {
    paginData.total_pages = 1;
  } else if (paginData.total % paginData.page_size > 0) {
    paginData.total_pages = parseInt(paginData.total / paginData.page_size) + 1;
  } else {
    paginData.total_pages = paginData.total / paginData.page_size;
  }
  
  // next page
  if (paginData.total === (paginData.page_size * paginData.current_page)) {
    paginData.to = paginData.total;
    paginData.next_page = null;
  } else if (paginData.total > (paginData.page_size * paginData.current_page)) {
    paginData.to = paginData.page_size * paginData.current_page;
    paginData.next_page = paginData.current_page + 1;
  } else {
    paginData.to = paginData.total
    - (paginData.page_size * (paginData.current_page - 1));
    paginData.next_page = null;
  }

  // previous page
  if (paginData.current_page > 1) {
    paginData.previous_page = paginData.current_page - 1;
  } else {
    paginData.previous_page = null;
  }

  // paginate the list of data
  const len = datalist.length;
  const start = paginData.from;
  const end = paginData.to;
  if (end < len) {
    for (let i = start - 1; i < end; i += 1) {
      paginData.data.push(datalist[i]);
    }
  } else {
    for (let j = start - 1; j < len; j += 1) {
      paginData.data.push(datalist[j]);
    }
  }
  return paginData;
}

// sort datalist by Des
function sortDataByDes(data, key) {
  key = key.slice(1, key.length);
  return data.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
    });
}

// sort datalist by Asc
function sortDataByAsc(data, key) {
  return data.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}