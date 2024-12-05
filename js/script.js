const studentsList = data; //call data
const linkList = document.getElementsByClassName('link-list')[0];
const header = document.querySelector('.header');
const searchBarHTML = `
  <label for="search" class="student-search">
    <span>Search by name</span>
    <input id="search" placeholder="Search by name...">
    <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
  </label>`;
header.insertAdjacentHTML('beforeend', searchBarHTML);

const searchInput = document.getElementById('search');
const searchButton = document.querySelector('.student-search button');
const ul = document.getElementsByClassName('student-list')[0];
const itemsPerPage = 9;



//search input
searchInput.addEventListener('input', function() {
   const newData = [];
   const userInput = searchInput.value.toLowerCase();

   for (let i = 0; i < studentsList.length; i++) {
      //need to seperate the names out since it's 3 fields
      const studentName = `${data[i].name.title} ${data[i].name.first} ${data[i].name.last}`.toLowerCase();

       if (studentName.includes(userInput)) {
           newData.push(studentsList[i]);
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

// Handle pagination
function handlePagination(list) {
   const numberButtons = Math.ceil(list.length / itemsPerPage);
   linkList.innerHTML = "";

   for (let i = 1; i <= numberButtons; i++) {
       const buttonMarkup = `<li><button>${i}</button></li>`;
       linkList.insertAdjacentHTML("beforeend", buttonMarkup);
   }

   const firstButton = linkList.querySelector("button");
   if (firstButton) firstButton.classList.add("active");
}


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {

   const start = (page * itemsPerPage) - itemsPerPage;
   const end = page * itemsPerPage;

  
   ul.innerHTML = "";

   for (let i = 0; i < list.length; i++) {
      if (i >= start && i < end) {
         const studentList = `
  <li class="student-item cf">
  <div class="student-details">
    <img src=${list[i].picture.medium}  alt="Profile Picture" class="avatar">
    <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
    <span class="email">${list[i].email}</span>
  </div>
  <div class="joined-details">
    <span class="date">Joined ${list[i].registered.date}</span>
  </div>
</li>`;
         ul.insertAdjacentHTML('beforeend', studentList);
      }
   }
};