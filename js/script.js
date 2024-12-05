const studentsList = data;
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



//search
searchInput.addEventListener('input', function() {
   const newData = [];
   const userInput = searchInput.value.toLowerCase();

   for (let i = 0; i < studentsList.length; i++) {
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


//Create showPage 
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

function addPagination(list) {
   const numberButtons = Math.ceil(list.length / itemsPerPage);
   linkList.innerHTML = "";

   for (let i = 1; i <= numberButtons; i++) {
      const buttonMarkup = `<li>
      <button type="button">${i}</button>
      </li>`;

      linkList.insertAdjacentHTML("beforeend", buttonMarkup);
      linkList.querySelector("button").classList.add("active");
   }
}

//Call the functions
linkList.addEventListener("click", (e) => {
   const buttonClicked = e.target.closest("button");
   if (buttonClicked) {
      const activeButton = linkList.querySelector(".active");

      if (activeButton) {
         activeButton.classList.remove("active");
      }
      buttonClicked.classList.add("active");
      showPage(studentsList, buttonClicked.innerHTML);
   }
});

//Call showPage
showPage(studentsList, 1);
addPagination(studentsList);