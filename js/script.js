const studentList = data;
const linkList = document.getElementsByClassName('link-list')[0];
const header = document.querySelector('.header');
const searchBarHTML = `
   <label for="search" class="student-search">
      <span>Search by name</span>
      <input id="search" placeholder="Search by Name...">
      <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>`
header.insertAdjacentHTML('beforeend', searchBarHTML);

const searchInput = document.getElementById('search');
const searchButton = document.querySelector('.student-search button');
const ul = document.getElementsByClassName('student-list')[0];
const itemsOnPage = 9;


/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
