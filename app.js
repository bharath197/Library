function Books(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${status}`;
  };
}

function addBookToLibrary(){
    const addedBook = document.createElement('div')
    addedBook.classList.add('addedBooks')
    addedBook.innerHTML = `<p>${myLibrary[myLibrary.length-1].title}</p>
    <p><span>by</span>
    </p><p>${myLibrary[myLibrary.length-1].author}</p>
    <p>${myLibrary[myLibrary.length-1].pages} pages</p>
    <p>${myLibrary[myLibrary.length-1].status}</p><button class='removeButton'>Remove</button>`
    list.appendChild(addedBook)
    addedBook.setAttribute('data-index-number', myLibrary.length-1)
    
    const removeButton= document.querySelectorAll('.removeButton')
    removeButton.forEach(button => {
      button.addEventListener('click', () => {
        console.log('Remove button clicked');        
      });
    });
}

function displayForm(){
    container.classList.add('blur')
    formContainer.style.display = 'block';
}

let myLibrary = []

function closeForm(){
    container.classList.remove('blur')
    formContainer.style.display = 'none'
}


const container = document.querySelector('.container')
const content = document.querySelector('.content')
const addBooks = document.querySelector('#addBooks')
const list = document.querySelector('.list')
const formContainer = document.querySelector('.formContainer')
const myForm = document.querySelector('.myForm')
const close = document.querySelector('#close')
const submit = document.querySelector('#submitButton')


addBooks.addEventListener('click', displayForm)
close.addEventListener('click', closeForm)
submit.addEventListener('click', (event)=>{
    event.preventDefault()
    let title = myForm.elements.title.value
    let author = myForm.elements.author.value
    let pages = myForm.elements.pages.value
    let status = myForm.elements.status.value
    let book = new Books(title, author, pages, status)
    myLibrary.push(book)
    myForm.reset();
    closeForm();
    addBookToLibrary();
})




