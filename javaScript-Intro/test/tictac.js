let library = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    var readStatus = ""
    if (this.read) {
      readStatus = "read"
    } else {
      readStatus = "not read yet"
    }
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`
  }
}

function addBook() {
  var title = document.getElementById("title").value
  var author = document.getElementById("author").value
  var pages = document.getElementById("pages").value
  var read = document.getElementById("read").checked

  console.log(read)

  var book = new Book(
    title, author, pages, read
  )

  library.push(book)

  console.log(`${book.info()} added to the library`)

  document.getElementById("title").value = ""
  document.getElementById("author").value = ""
  document.getElementById("pages").value = ""
  document.getElementById("read").checked = false

}


function showAllBooks() {
  let text = "<ul>"
  for (let i = 0; i < library.length; i++) {
    console.log(library[i].info())
    text += "<li>" + library[i].info() + "</li>"
  }  
  text += "</ul>"

  document.getElementById("library").innerHTML = text
}

const theHobbit = new Book(
  "The Hobbit", "J.R.R. Tolkien", 295, false
)

library.push(theHobbit)
console.log(theHobbit.info())
