// connecting the js file with html file so the application can have behavior

// PROMPT
  // When a user clicks on different elements on the table, either a green apple, red apple, or pie emoji will appear

// PLAN
  // ensure the html file is setup properly
    // table will have apple name, flavor, texture

  // connect the html and js files
    // insert link html tag at the bottom of the body html tag
    // <script src="apple.js"> </script>

  // create an alert message to inform the user to search the table for the emojis
  alert("Click the table to search for the treasure! ")

  // create a function named appleFinder that will take in data
    // const appleFinder = () => {}
    // that data will be called apple

  // determine how to identify the text that will be change to an emoji
  // return a different emoji for each apple
    // apple --> emoji
    // granny smith --> 🍏
    // pink lady --> 🍎
    // golden delicious --> 🥧

    // assign id attributes to the opening tag for the content we want to change
    // use built-in method to change the content to an emoji
      // document.getElementById("green").innerHTML = "🍏"
        // document: the html file
        // .getElementById("green"): searches for the id attribute, takes in a string
        // .innerHTML: the content between the opening and closing html tags
        // =: assignment operator
        // "🍏": new value

    // use conditional statements to let function display different emojis based on the id attributes 

  // function
  let count = 0;
const treasureHunt = (id) => {
  count += 1;
  
    if (id === "0") {
      document.getElementById("0").innerHTML = "&#x1f332";
      alert(`This is a tree, Go again.  `);
    } else if (id === "1") {
      document.getElementById("1").innerHTML = "&#x1f308";
      alert(`Congratulations, you found the treasure!  `);
    } else if (id === "2") {
      document.getElementById("2").innerHTML = "&#x1f332";
      alert(`This is a tree, Go again.  `);
    } else if (id === "3") {
      document.getElementById("3").innerHTML = "&#x2620";
      alert(`This is a bomb, you lose! Game Over  `);
    } else if (id === "4") {
      document.getElementById("4").innerHTML = "&#x2620";
      alert(`This is a bomb, you lose! Game Over.  `);
    } else if (id === "5") {
      document.getElementById("5").innerHTML = "&#x2620";
      alert(`This is a bomb, you lose! Game Over.  `);
    } else if (id === "6") {
      document.getElementById("6").innerHTML = "&#x2620";
      alert(`This is a bomb, you lose! Game Over.  `);
    } else if (id === "7") {
      document.getElementById("7").innerHTML = "&#x2620";
      alert(`This is a bomb, you lose! Game Over.  `);
    } else if (id === "8") {
      document.getElementById("8").innerHTML = "&#x1f332";
      alert(`This is a tree, Go again.  `);
    }
    if(count > 2 && id != 1)
  alert("You Have No More Chances! Game Over")
  };

  // will not do function call on js file because it will automatically invoke the function
  // console.log(appleFinder("green"))

  // perform function call through onclick attribute on the html file
    // each function call will have an argument as string that matches the applicable id attribute