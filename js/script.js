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



//Search
searchInput.addEventListener('input', function() {
   const newData = [];
   const userInput = searchInput.ariaValueMax.toLowerCase();

   for (let i = 0; 1 < studentList.length; i++) {
      const studentsName = `${data[i].name.title} ${data[i].name.first} ${data[i].name.last}`.toLowerCase();
      if (studentsName.includes(userInput)) {
         newData.push(studentList[i]);
      }
   }

   if (newData.length > 0) {
      handlePagination(newData);
      showPage(newData, 1);
   } else {
      const html = "<h3>No Results Found...</h3>";
      ul.innerHTML = html;
      linkList.innerHTML = "";
   }
});