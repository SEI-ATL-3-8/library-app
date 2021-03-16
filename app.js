let submitButton = document.querySelector('#submitButton')
let bookContainer = document.querySelector('#bookContainer')
console.log(submitButton)

submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    // console.log('hello from button')
    let input = document.querySelector('#bookSearch')
    // console.log(input.value)
    getData(input.value)
})

let getData = async (genre) => {
    try {
        let req = await fetch(`https://openlibrary.org/subjects/${genre}.json`)
    let res = await req.json()
    let arrayOfBooks = res.works
    // console.log(arrayOfBooks)
    let randomNumber = [Math.floor(Math.random() * arrayOfBooks.length)]
    // console.log(randomNumber)
    let singleBook = arrayOfBooks[randomNumber]
    // console.log(singleBook)
    bookTitle = singleBook.title
    bookAuthors = singleBook.authors
    bookImage = singleBook.cover_id
    // console.log(bookImage)
    clearContainer()
    addNewBook(bookTitle, bookAuthors, bookImage)
    } catch (error) {
        clearContainer()
        let errorP = document.createElement('p')
        errorP.innerText = 'No Results!'
        bookContainer.append(errorP)
    }
    
}

let addNewBook = (title, authors, image) => {
    let bookTitle = document.createElement('p')
    bookTitle.innerHTML = title
    bookContainer.append(bookTitle)

    let bookImage = document.createElement('img')
    bookImage.src = `http://covers.openlibrary.org/b/id/${image}-L.jpg`
    bookContainer.append(bookImage)

    for(let author of authors) {
        // console.log(author)
        // console.log(author.name)
        let bookAuthor = document.createElement('p')
        bookAuthor.innerHTML = author.name
        bookContainer.append(bookAuthor)
    }
}

let clearContainer = () => {
    while(bookContainer.firstChild) {
        bookContainer.removeChild(bookContainer.lastChild)
    }
}