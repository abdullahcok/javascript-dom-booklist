document.addEventListener('DOMContentLoaded', function(){

////////button delete starts ////////////////////////////////////////////////



////////////////////////////////button delete --event bubbling


const list = document.querySelector('#book-list ul');

// delete books
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});


// ------------------------------------------------ button delete normal...

/***
var btns = document.querySelectorAll('#book-list .delete');
Array.from(btns).forEach(function(btn){
      btn.addEventListener('click', function(e){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
      });
});

***/


/////////////////////////////////////////////////////////// button delete ends ///////////////


////////// button add starts /////////////////////////////////////////////////////

//add a new book
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
        e.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value;
        //console.log(value);



        //create elements to form
        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        //append to document as a span
        li.appendChild(bookName);
        li.appendChild(deleteBtn);
        list.appendChild(li);

        //add content as a book
        deleteBtn.textContent = 'delete';
        bookName.textContent = value;

        //add classes
        bookName.classList.add('name');
        deleteBtn.classList.add('delete');


                ///at console:
                        /**
                            var li = document.querySelector('li:last-child')
                            li
                                li.style.fontWeight = "bold"
                                li.style.border ="1px solid"
                                    li.className = "new"
                                    className
                                    li.className += "newBook"

                                          var book = document.querySelector('li:first-child.name')
                                          book.getAttribute('class')
                                          book.setAttribute('class', 'newBook')
                                                book
                                                book.hasAttribute('class')
                                                book.hasAttribute('href')
                                                book.removeAttribute('class')
                                                    book
                        **/


});

/////////////////////////////////////////////////////////// button add ends ///////////////


//////////button hide starts ////////////////////////////////////////////////7

        //hide books
        const hideBox = document.querySelector('#hide');
        hideBox.addEventListener('change', function(e){
              if(hideBox.checked){
                  list.style.display = "none";
              }else{
                  list.style.display = "initial";
              }
        });


///////////////////////////////////////////////button hide ends ////////////



//////////search filter starts ////////////////////////////////////////////////7

          // filter books
            const searchBar = document.forms['search-books'].querySelector('input');
            searchBar.addEventListener('keyup', function(e) {
                const term = e.target.value.toLowerCase();
                const books = list.getElementsByTagName('li');
                Array.from(books).forEach((book) => {
                      const title = book.firstElementChild.textContent;
                      if(title.toLowerCase().indexOf(e.target.value) != -1){
                            book.style.display = 'block';
                      } else {
                            book.style.display = 'none';
                      }
                  });
              });

///////////////////////////////////////////////search filter ends ////////////



//////////tabbed content starts ////////////////////////////////////////////////7

          // tabbed content
          const tabs = document.querySelector('.tabs');
          const panels = document.querySelectorAll('.panel');
          tabs.addEventListener('click', (e) => {
                if(e.target.tagName == 'LI'){
                      const targetPanel = document.querySelector(e.target.dataset.target);
                      panels.forEach(function(panel){  //Array.from(panels).forEach((panel) => {
                            if(panel == targetPanel){
                                  panel.classList.add('active');
                            }else{
                                panel.classList.remove('active');
                            }
                      });
              }
          });


///////////////////////////////////////////////tabbed content ends ////////////

})
