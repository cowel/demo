var Author = function(name, email, gender) {
  this.id = new Date().valueOf();
  this.name = name;
  this.email = email;
  this.gender = gender;
}

var Book = function (title, author, price, quantity, isRead, releaseDate,Dateupdateprice ) {
  this.id = new Date().valueOf();
  this.title = title; '0' === 0
  this.author = author;
  this.price = price;
  this.quantity = quantity;
  this.isRead = isRead;
  this.releaseDate = releaseDate;
  this.Dateupdateprice=Dateupdateprice;
}

var BookShelve = function(books) {
  this.books = books
}

var authorName = ['Tue Ninh', 'Duong Thuy', 'Rose Nguyen', 'Nguyen Nhat Anh', 'Duong Thuy']
var titleBook = ['Se co cach ma', 'Oxford', 'Tuoi tre dang gia bao nhieu', 'Cho toi mot ve di tuoi tho', 'De men phieu luu ky']

BookShelve.prototype.createBookshelve = function(numOfBooks = 5) {
  const milliSecondDate = 24 * 60 * 60 * 1000
  for(var i = 0; i < numOfBooks; i++) {
    const author = new Author(authorName[i], 'abc@com', i % 2)
    var NUmberOfdate=new Date().valueOf() - i * milliSecondDate
    const date = new Date (NUmberOfdate).toISOString();
    var Updatepricedays= Math.floor((new Date().valueOf() - NUmberOfdate)/milliSecondDate)
    var dateupdateprice=new Date().getTime()-i*milliSecondDate
    const book = new Book(titleBook[i], author, i + 5000, i + 4, (i % 2) ? true : false, date,dateupdateprice)
    this.books.push(book)
  }
} 

BookShelve.prototype.searchBooksByAuthorName = function(name) {
  return this.books.filter(function(book) {
    return book.author.name === name
  })
}

BookShelve.prototype.updateStatusBook = function(title) {
  var indexBook = this.books.findIndex(function(book) {
    return book.title === title
  })
  this.books[indexBook].isRead = true
}


var bookShelve = new BookShelve([])
bookShelve.createBookshelve()
bookShelve.updateStatusBook('Se co cach ma')

BookShelve.prototype.updateprice= function(array){
  const milliSecondDate1 = 24 * 60 * 60 * 1000
 
  array.forEach(function(element,index){  
    if (element.isRead) {
      var Updatepricedays= Math.floor((new Date().getTime() - element.Dateupdateprice)/milliSecondDate1)    
      for(var d =0; d<Updatepricedays;d++)  element.price -= element.price*0.05
    }
  if (element.price < 5000)  array.splice(index,1)
    element.Dateupdateprice=new Date().valueOf()
  });
}(bookShelve.books)

console.log('book shelve ', bookShelve.books)
console.log('Books of Duong Thuy ', bookShelve.searchBooksByAuthorName('Duong Thuy'))
console.log('Update book Se co cach ma', bookShelve.books)
