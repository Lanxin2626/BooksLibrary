const books = [
    { id: 1, title: "Book 1", author:"Jane", description: "Description for Book 1" },
    { id: 2, title: "Book 2", author:"Bobi",  description: "Description for Book 2" },
    { id: 3, title: "Book 3", author:"Doen", description: "Description for Book 3" }
  ];
  const FAKE_DELAY=2000;

  const fakeAPI={
    fetchBooks:()=>{
        return new Promise((reslove,reject)=>{
            setTimeout(()=>{
                reslove(books)
            },FAKE_DELAY);
        })
    }
  }
  export default fakeAPI;