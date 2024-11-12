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
  // Your code here
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
  // Your code here
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
  // Your code here
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
  // Your code here
}

addPeopleToPage();
