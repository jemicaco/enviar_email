const getBooks = () => {
    return new Promise((resolve) => {
      resolve([
        {
          bookId: 1,
          author: "bob"
        },
        {
          bookId: 2,
          author: "sally"
        }
      ]);
    });
  };

  getBooks().then(r =>{
      r.map((item) => {
        console.log(item.author)
      })
    // console.log(r[0]["author"]);
  }).catch(() => {
    console.log('error');
  });
  const getTitle = (bookId) => {
    return new Promise((resolve, reject) => {
      switch (bookId) {
        case 1:
          resolve({ title: "Greeting the World" });
          break;
        case 2:
          resolve({ title: "Hello World!" });
          break;
        default:
          reject(new Error("404 - book not found"));
      }
    });
  };

 

