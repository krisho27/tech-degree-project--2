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

//Handle Pagination
function handlePagination(list) {
   const numberBtns = Math.ceil(list.length / itemsOnPage);
   linkList.innerHTML = "";

   for (let i = 1; i <= numberBtns; i++) {
      const btnMarkup = `<li><button>${i}</button></li>`;
      linkList.insertAdjacentHTML("beforeend", btnMarkup);
   }

   const firstBtn = linkList.querySelector("button");
   if (firstBtn) firstBtn.classList.add("active");
}

//Create showPage function
function showPage(list, page) {
   const start = (page * itemsOnPage) - itemsOnPage;
   const end = page * itemsOnPage;

   ul.innerHTML = "";

   for (let i = 0; i < list.length; i++) {
      if (i >= start && i < end) {
         const studentsList = `
         <li class="student-item cf">
         <div class+"student-details">
            <img src=${list[i].picture.medium} alt="Profile Picture" class="avatar"`
            <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
            <span class="date">Joined ${list[i].registered.date}</span>
         </div>
      </li>
            ul.insertAdjacentHTML('beforeend', studentsList)
      }
   }
};