let myLibrary = []

function Books(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`;
  };
}

Books.prototype.switchStatus = function () {
  this.status = (this.status === 'read') ? 'not read' : 'read';
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
    <button class = ${myLibrary[myLibrary.length - 1].status.toLowerCase() == 'read' ? 'highlight' : 'notHighlight'}>read</button>
    <button class = ${myLibrary[myLibrary.length - 1].status.toLowerCase() == 'not read' ? 'highlight' : 'notHighlight'}>not read</button
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

function handleRemoveandStatus(e) {
  if (e.target.className === 'removeButton') {
    const removeButton = e.target
    const bookCard = removeButton.closest('.addedBooks')
    const index = bookCard.getAttribute('data-index-number')
    myLibrary.splice(index, 1);
    bookCard.remove()
  }
  if (e.target.className === 'notHighlight') {
    // switching the highlight
    const highlightedButton = !!e.target.nextElementSibling ? e.target.nextElementSibling : e.target.previousElementSibling
    highlightedButton.classList.remove('highlight')
    highlightedButton.classList.add('notHighlight')
    e.target.classList.add('highlight')
    // changing in the library
    const parentCard = e.target.closest('.addedBooks')
    const index = parentCard.getAttribute('data-index-number')
    console.log(myLibrary[index].status)
    myLibrary[index].switchStatus();
    console.log(myLibrary[index].status)
  }
}

const container = document.querySelector('.container')
const theme = document.querySelector('.theme')
const darkSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-300 group-hover:text-gray-700" role="img" aria-labelledby="a6k90tn16jvcbjgfja10yd5m38a9ljrz"><title id="a6k90tn16jvcbjgfja10yd5m38a9ljrz">theme icon</title>
<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path>
</svg>`;
const lightSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-300 group-hover:text-gray-700" role="img" aria-labelledby="aglhvs95zpari7jo3bbe7veik9i8b11s"><title id="aglhvs95zpari7jo3bbe7veik9i8b11s">theme icon</title>
<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path>
</svg>`
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

bookCardContainer.addEventListener('click', handleRemoveandStatus)

theme.addEventListener('click', () => {
  const root = document.documentElement;
  const newTheme = root.className === 'light' ? 'dark' : 'light'
  root.className = newTheme

  theme.innerHTML = newTheme === 'dark' ? darkSVG : lightSVG

})
document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  root.className = 'light';
});