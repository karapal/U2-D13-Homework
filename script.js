const getBooks = async () => {
    const fetchBooks = await fetch(
      "https://striveschool-api.herokuapp.com/books"
    );
    const book = await fetchBooks.json();
    console.log(book);
    const container = document.querySelector(".container")
      const arrayOfCards = book.map(({title, img}) => {
        return `
    <div class='col col-4'>
        <div class="card">
            <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Add to Cart</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Skip Book</button>
              </div>
            </div>
            </div>
        </div> 
    </div>`
      })
      const stringOfCards = arrayOfCards.join("")
      console.log(stringOfCards)
      container.innerHTML = stringOfCards

    };
   
  
   getBooks()    
   
