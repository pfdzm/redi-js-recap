/**
 * TODO: Implement the FizzBuzz algorithm by following these steps:
 *
 * 1. Create a function called fizzBuzz that takes a number parameter n
 *
 * 2. Inside the function, write a for loop that:
 *    - Starts counting from 1
 *    - Continues until it reaches n
 *    - Increments by 1 each time
 *
 * 3. For each number in the loop, add if/else conditions to:
 *    - Print "FizzBuzz" if the number is divisible by both 3 and 5
 *    - Print "Fizz" if the number is divisible by 3
 *    - Print "Buzz" if the number is divisible by 5
 *    - Print the number itself if none of the above conditions are met
 *
 * 4. Test your function by calling it with different numbers
 *
 * Hint: Use the modulo operator (%) to check if a number is divisible by another number
 * For example: 15 % 3 === 0 means 15 is divisible by 3
 */
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(100);

/**
 * BONUS: Implement a function that prints the Fibonacci sequence up to n
 *
 * 1. Create a function called fibonacci that takes a number parameter n
 *
 * 2. Inside the function:
 *    - Create variables to track the previous two numbers in the sequence
 *    - Start with 0 and 1 as the first two numbers
 *
 * 3. Use a while loop that:
 *    - Continues as long as the next number is less than or equal to n
 *    - Calculates the next number by adding the previous two numbers
 *    - Prints each number in the sequence
 *    - Updates the previous two numbers for the next iteration
 *
 * 4. Test your function with different values of n
 *
 * Example: fibonacci(10) should print: 0, 1, 1, 2, 3, 5, 8
 *
 * Hint: The Fibonacci sequence is formed by adding the previous two numbers
 * to get the next number in the sequence
 */
function fibonacci(n) {
  let prev = 0;
  let current = 1;
  while (current <= n) {
    console.log(current);
    prev = current;
    current = prev + current;
  }
}

fibonacci(100);

/**
 * This function adds "Hello DOM" text to the webpage
 *
 * Step by step:
 * 1. First, we create a new paragraph element using document.createElement()
 * 2. Next, we set the text content of that element using textContent
 * 3. Finally, we add the element to the body of the page using appendChild()
 */
function addHelloDOM() {
  const p = document.createElement("p");
  p.textContent = "Hello DOM";
  document.body.appendChild(p);
}

addHelloDOM();

const exampleData = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jim", age: 35 },
];

/**
 * TODO: Implement a function that takes the exampleData array and adds each person's name and age to the page
 *
 * Step by step:
 * 1. We need to loop through each person in the exampleData array
 *    - Use a for...of loop or forEach to iterate through the array
 *    - Each iteration will handle one person's data
 *
 * 2. For each person in the array:
 *    a. Create a new paragraph element using document.createElement('p')
 *    b. Format the text content by combining name and age
 *       Hint: Use string template literals like `${person.name} is ${person.age} years old`
 *    c. Set this formatted text as the paragraph's textContent
 *
 * 3. Add each paragraph to the page:
 *    - Use document.body.appendChild() to add the paragraph
 *    - Make sure to do this for each person inside the loop
 *
 * Hint: The structure will look something like:
 * for (const person of exampleData) {
 *   // Create and add paragraph for this person
 * }
 */
function addPeopleToPage() {
  for (const person of exampleData) {
    const p = document.createElement("p");
    p.textContent = `${person.name} is ${person.age} years old`;
    document.body.appendChild(p);
  }
}

addPeopleToPage();

/**
 * TODO: Add a button to the page. Add an event listener to the button for the click event and change the background-color style property of the document body to toggle between light and dark.
 *
 * Step by step:
 * 1. Create a button element using document.createElement('button')
 * 2. Set the text content of the button to "Toggle Theme"
 * 3. Add the button to the page by appending it to the body
 * 4. Add an event listener to the button for the click event
 * 5. Inside the event listener, toggle the background color of the body between light and dark
 *
 * Hint: You can use the classList.toggle() method to toggle a class on the body element. Remember to add a light and dark class to the body element in the CSS (style.css).
 */
function toggleTheme() {
  const button = document.createElement("button");
  button.textContent = "Toggle Theme";
  document.body.appendChild(button);
  button.addEventListener("click", () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
  });
}

toggleTheme();

/**
 * Create an async function that fetches data from an API and prints it to console
 *
 * Step by step:
 * 1. Create an async function called fetchData
 * 2. Use fetch to get data from the API endpoint
 *    You can use whatever API you want, but here are some ideas:
 *      - https://fakestoreapi.com/docs/
 *      - https://pokeapi.co/
 *      - https://rickandmortyapi.com/documentation
 * 3. Print the data to the console
 *
 * Hint: Remember to handle errors with a try/catch block
 */
async function fetchData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

await fetchData();
// ^ note the use of `await` here, since it's an async function

/**
 * TODO: Instead of simply printing to console, create UI components using the data returned from the API and insert them into your webpage
 *
 * Step by step:
 * 1. Create a new div element using document.createElement('div')
 * 2. Set the innerHTML of the div to include an h1, p, and img
 * 3. Add the div to the page by appending it to the body
 *
 * Hint: You can use template literals to create the HTML content for the div like for example:
 * const html = `<h1>${data.title}</h1><p>${data.description}</p><img src="${data.image}" alt="${data.title}" />`
 * element.innerHTML = html
 */
async function renderData(data) {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";
  for (const product of data) {
    const div = document.createElement("div");
    div.innerHTML = `<h1>${product.title}</h1><p>${product.description}</p><img src="${product.image}" alt="${product.title}" />`;
    productsContainer.appendChild(div);
  }
}

renderData(await fetchData());

/**
 * TODO: Add a button that will fetch new data when clicked and replace the page contents with this new data
 *
 * Step by step:
 * 1. Create a new button element using document.createElement('button')
 * 2. Set the text content of the button to "Fetch New Data"
 * 3. Add the button to the page by appending it to the body
 * 4. Add an event listener to the button for the click event
 * 5. Inside the event listener, fetch new data using the fetchData function
 * 6. Replace the page contents with the new data using the createUI function
 *
 * Hint: You can use element.innerHTML = '' to clear the page contents before adding the new data
 */
async function fetchNewDataAndRender() {
  const button = document.createElement("button");
  button.textContent = "Fetch New Data";
  document.body.appendChild(button);
  button.addEventListener("click", async () => {
    renderData(await fetchData());
  });
}
fetchNewDataAndRender();

// Search functionality
async function fetchFilterAndRender(searchValue) {
  const data = await fetchData();
  const filteredData = data.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  renderData(filteredData);
}

document.getElementById("search").addEventListener("input", async (event) => {
  await fetchFilterAndRender(event.target.value);
});

document
  .getElementById("search-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault(); // prevent the default action of a form submit, which would reload the page
    await fetchFilterAndRender(event.target.search.value);
  });
