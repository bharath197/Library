let myLibrary = []

function Books(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${status}`;
  };
}

function displayForm() {
  container.classList.add('blur')
  formContainer.style.display = 'block';
}

function closeForm() {
  container.classList.remove('blur')
  formContainer.style.display = 'none'
}

function addBookToLibrary() {

  // create a book card
  const bookCard = document.createElement('div')
  bookCard.classList.add('addedBooks')

  // add the innerhtml
  bookCard.innerHTML = `<p>${myLibrary[myLibrary.length - 1].title}</p>
    <p><span>by</span>
    </p><p>${myLibrary[myLibrary.length - 1].author}</p>
    <p>${myLibrary[myLibrary.length - 1].pages} pages</p>
    <div class='status'>
    <button class = ${myLibrary[myLibrary.length - 1].status.toLowerCase()== 'read' ? 'highlight' : 'notHighlight'}>read</button>
    <button class = ${myLibrary[myLibrary.length - 1].status.toLowerCase()== 'not read' ? 'highlight' : 'notHighlight'}>not read</button
    ></div>`
  bookCard.setAttribute('data-index-number', myLibrary.length - 1)

  // remove button
  const removeButton = document.createElement('button')
  removeButton.classList.add('removeButton')
  removeButton.textContent = 'remove'

  // appending button and the card
  bookCard.appendChild(removeButton)
  bookCardContainer.appendChild(bookCard)

}

function handleRemoveandStatus(e){
  if(e.target.className === 'removeButton'){
    const removeButton = e.target   
    const bookCard = removeButton.closest('.addedBooks')
    const index = bookCard.getAttribute('data-index-number')
    myLibrary.splice(index, 1);
    bookCard.remove()
  }
}

const container = document.querySelector('.container')
const content = document.querySelector('.content')
const addBooks = document.querySelector('#addBooks')
const bookCardContainer = document.querySelector('.list')
const formContainer = document.querySelector('.formContainer')
const myForm = document.querySelector('.myForm')
const close = document.querySelector('#close')
const submit = document.querySelector('#submitButton')
const removeButton = document.querySelectorAll('.removeButton')

addBooks.addEventListener('click', displayForm)

close.addEventListener('click', closeForm)

submit.addEventListener('click', (event) => {
  console.log('click')
  event.preventDefault()
  let title = myForm.elements.title.value
  let author = myForm.elements.author.value
  let pages = myForm.elements.pages.value
  let status = myForm.elements.status.value
  console.log(!!title || !!author || pages)
  if(!!title || !!author || pages){
    alert('please fill the form')
  }
  let book = new Books(title, author, pages, status)
  myLibrary.push(book)
  myForm.reset();
  closeForm();
  addBookToLibrary();
})

bookCardContainer.addEventListener('click', handleRemoveandStatus)






