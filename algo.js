// const myArray = [1, 2, 3, 4, 5, 6];

// myArray.map((item) => {
//   console.log(item);
  
// });


// for (var i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
//   }

// for(var i in myArray){
//   console.log(i);
// }

// for(var i of myArray){
//   console.log(i);
// }

// myArray.forEach(element => {
//   console.log(element);
// });

// 2 exercise
// 2. Demonstrate all the different ways to iterate the keys of
// the below object

// const myObject = { x: 1, y: "hi" };

// console.log(Object.keys(myObject));

// for (const i in myObject) {
//     console.log(i);
//   }

//   for (var i; myObject.length; i++) {
//     console.log(i);
//   }

// 3. Repeat #2, demonstrate different ways to iterate
// the values of "myObject"

// for (const i in myObject) {
//   console.log(myObject[i]);
// }

/**
 * DO NOT USE ASYNC/AWAIT
 * Using the below two functions produce the following output
 * {
 * authors: ['bob', 'sally'],
 * titles: ['Greeting the World', 'Hello World!']
 * }
 * */

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

getBooks()
  .then((r) => {
    r.map((item) => {
      console.log(item.author);
    });
  })
  .catch(() => {
    console.log("error");
  });

  var arr = [];
  for(i=1; i<=2;i++){

    getTitle(i)
    .then((r) => {
      arr.push(r.title)
      console.log(r.title)

    })
    .catch(() => {
      console.log("error");
    });

  }

  console.log(arr);

//   react-basic

/*
 What is wrong with this code?
*/

// import React from "react";
// import { DATA } from "./data";

// class App extends React.Component {
//   constructor(p) {
//     super(p);
//     this.state = {
//       items: []
//     };
//   }

//   componentDidMount() {
//     this.setState({ items: DATA });
//   }

//   render() {
//     let { items } = this.state;
//     return (
//       <ul>
//         {items.map(item => (
//           <li>{item.title}</li>
//         ))}
//       </ul>
//     );
//   }
// }

// export default App;

// // react hooks

// import React from "react";
// import axios from "axios";

// /**
//  * #1-Let's do this same example using React hooks.
//  * #2-Apply the componentWillUnmount lifecycle method with useEffect hooks.
//  */

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { posts: [] };
//   }

//   componentDidMount() {
//     this.getPosts();
//   }

//   async getPosts() {
//     try {
//       const posts = await axios
//         .get("https://jsonplaceholder.typicode.com/posts")
//         .then(res => res.data);

//       this.setState({ posts });
//     } catch (error) {
//       console.log(error.message);
//     }
//   }

//   render() {
//     const { posts } = this.state;
//     return (
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     );
//   }
// }

// export default App;


// // <jest-01

// // 1. Test  results with jest
// const add = (a, b) => a + b;
// const mul = (a, b) => a * b;
// const sub = (a, b) => a - b;
// const div = (a, b) => a / b;

// // 2. Test  results with jest
// // validate integers, stings and  types on resuly
// const users = [
//   {
//     id: 1,
//     first_name: "Robert",
//     last_name: "Schwartz",
//     email: "rob23@gmail.com"
//   },
//   {
//     id: 2,
//     first_name: "Lucy",
//     last_name: "Ballmer",
//     email: "lucyb56@gmail.com"
//   }
// ];