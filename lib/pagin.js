/**
	Auther: Venakata Sai Katepalli
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
module.exports = function(datalist, {page_size=15, page_no=1}) {
	if (datalist.length<1) {
		console.log('Your data is empty......!')
		return paginData;
	} else {
		paginData.page_size = page_size
		paginData.page_no = page_no
		paginData.current_page = page_no
		return createPagin(datalist);
	}
};
// create pagination with given list of data
function createPagin(datalist) {
  paginData.total = datalist.length;
  if (paginData.page_size * paginData.page_no > paginData.total) {
  	console.log("%cOut of data. Invalid Page no", "color: red");
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