//2.1
console.log("Hello Ardie! Welcome to my Portfolio Site.")

//2.2

// -------------------------------1. Strings-------------------------------
console.log('---------------');
console.log('Strings lesson');
console.log('-');

var text1 = "Hello there";
var text2 = "Hello, spaces are also OK!";
var text3 = 'Single quotes are valid too.';

var escapedText1 = "He said: \"Yes!\", that's for sure";
var escapedText2 = 'He said: "Yes!", that\'s for sure';

// a single console.log()
console.log(text1);
// Or combine the variables separated by commas in a single console.log()
console.log(text2, text3);
console.log(escapedText1, escapedText2);

console.log('---------------');

//-------------------------------2. Numbers-------------------------------
console.log('Numbers lesson:');
console.log('-');
var numberInteger = 456;
var numberInteger2 = -345; // This is negative integer
var numberFloat = 50.25;

console.log(numberInteger); // try console.logging the next two numbers
console.log('change me to a number!'); // try it out
console.log('I\'m feeling kinda blank :(');

console.log('---------------');

//var { thisVariableDoesntExist, doesntExist } = require('./helpers'); // don't mind me I'm just a helper.


// -------------------------------3. Booleans-------------------------------
console.log('Booleans lesson:');
console.log('-');

var boolean1 = true;
var boolean2 = false;
var notABoolean = "false"; // This is just the string "false", not false!

console.log(boolean1);
console.log(boolean2);

console.log(notABoolean);

console.log('---------------');

// -------------------------------4. Null and Undefined-------------------------
console.log('Null and Undefined lesson:');
console.log('-');

//console.log(thisVariableDoesntExist); // Will output undefined

var emptyVariable = null;
var notNullButAString = "null";
//console.log(doesntExist); // Outputs undefined
console.log(emptyVariable); // Outputs Null
console.log(notNullButAString); // Outputs "null" - not the same as null!

console.log('---------------');

// -------------------------------5. Objects-------------------------------4
console.log('---------------');
console.log('Objects lesson');
console.log('-');

var person = {
  name: "John",
  age: 39
};

console.log(person);
console.log('-');

// or nested
console.log('------ nested ------');
var age = 39;
var name = "John";
var personParent = {
  name: name,
  age: age,
  child: {
    name: "Sara"
  }
};
console.log(personParent);
console.log('-')

// access via dot-notation:
console.log('------ dot-notation ------');
personParent.name = "Anne"; // Set the name property to "Anne"
personParent.child.size = 175; // Set new values that weren't set before
console.log(personParent.child.name); // Output "Sara" to the console
console.log(personParent.child); // Output child Object to the console
console.log('-');

// access using bracket notation:
console.log('------ bracket notation ------');
console.log(personParent["name"]); // The same as personParent.name
var weWantThisField = "age";
console.log(personParent[weWantThisField]); // The same as personParent.age
console.log('-');

// one lined objects
console.log('------ one lined objects ------');
var shortObject = { name: "John", age: 31};
console.log(shortObject);
var emptyObject = {}; // Objects can be empty. You can add properties later
console.log('I\'m an empty object: ', emptyObject);

delete shortObject.name; // Will remove the "name" property
console.log('name property removed: ', shortObject); // note that the name property is now removed


console.log('---------------');

// ------------------------------- 6. Arrays-------------------------------5
console.log('---------------');
console.log('Arrays lesson');
console.log('-');

var shortArray = [1, 2, 3];
var mixedArray = [
	1,
	"Hello",
	{},
	["nested array"]
];

console.log(shortArray[0]); // Outputs "1", the first value
console.log(mixedArray[3][0]); // Outputs "nested array"

shortArray[0] = 100; // Overwrites the prior value, 1, with 100 (we refer to this as reassigning a value)
console.log(shortArray[0]);

// the native Array push:
var myArray = [1, 2];
myArray.push(3);
myArray.push("Test");
console.log(myArray); // Will output: [1, 2, 3, "Test"]

console.log('---------------');

// You can press the green "run" button to execute the lesson from above
// Feel free to experiment with the code by changing some values here or "open in repl.it button" on the right

// ------------------------------- 7.Functions-------------------------------
console.log('---------------');
console.log('Functions lesson');
console.log('-');

function add(number1, number2) {
	return number1 + number2;
}

var result = add(10, 100); // The value of "result" will now be 110
console.log(result);

//var { addAge } = require('./helpers'); // don't mind me I'm just a helper.

// function scoping
console.log('------ function scoping ------');

var age = 76;
function doSomething() {
	var addAge = 10;
	return age + addAge; // We can access age inside of the function
};

console.log(age); // Returns 76, as age was defined outside of functions
//console.log(addAge); // Returns undefined, as addAge was defined inside of func.

function doSomething(variable1, variable2) {
	// In this case, variable2 will be undefined
	return variable1 + ' ' + variable2; // we are just adding a space in between the two variables.
}
doSomething(1); // Only one parameter given

console.log(doSomething(1)); // you can console log functions as well, but for best practice, assign it to a variable

function doSomethingElse(variable1, variable2) {
	return variable1 + variable2;
}

// assigning functions to variables
var add = doSomethingElse(1, 2); // we give this function Numbers to add
console.log(add);

var somethingWithStrings = doSomethingElse('1', '2'); // we give this function Strings to "concatenate"
console.log(somethingWithStrings); // whoa, why 12? what happened here is that we are "concatenating" two string values.

var somethingWithNumberAndString = doSomethingElse(1, '2'); // we give this function Strings to "concatenate"
console.log(somethingWithNumberAndString); // whoa weird, I have one Number and one String, why still 12? There are many nuances in JavaScript, this is called type coercion.

// To find out more about this please refer to this article: https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/
// The amount of JavaScript we will be coding in this course will most likely not encounter these quirks.

// Assign functions to object properties, this function on an Object is now referred to as a 'method'
console.log('------ Assign functions to object properties (methods) ------');
var myObject = {};
myObject.add = function(number1, number2) {
	return number1 + number2;
};
// to execute a method from our myObject, we have to 'invoke' it (a way to describe that you want to execute the function method on myObject)
myObject.add(10, 2);
console.log(myObject.add(10, 10));

// Or as we learned, assigning to a variable
var addResult = myObject.add(10, 50);
var addResult2 = myObject.add(20, 667);
var addResult3 = myObject.add(17, 577);
console.log(addResult, addResult2, addResult3); // logging out multiple results in one invocation of console.log

var a = { age: 1 };
var b = a;
b.name = "John"; // a.name will now also be "John"
console.log(a);
console.log(b);

// Let's practice with a basic Todo function.
// The functionality will let us retrieve the list of todos, add a todo, edit a todo, and delete a todo from our list.
console.log('------ A todo list ------');

var todoList = []; // let's create an empty todo list with an empty array.

var getTodoList = function() {
	if (todoList.length) {
		return console.log('My todo list:', todoList);
	}
	return console.log('No todos today hurray 🎉');
}


// Our addAtodo function specifies that it takes a todo as it's argument
// we can add all sorts of data types.
var addAtodo = function(todo) {
	return todoList.push(todo);
}

// Our removeAtodo function specifies that it takes an index as it's argument
var removeAtodo = function(index) {
	// here we've seen the delete functionality in action before, here it will delete data at the specified array location given the index
	return delete todoList[index];
}

// Our updateAtodo function specifies that it takes an index and a newTodo as it's arguments
var updateAtodo = function(index, newTodo) {
	// here we have seen this before to access and override existing data in an array.
	return todoList[index] = newTodo;
}

var v = getTodoList();
console.log(v);

// let's create and add a todo item to our empty array list.
var myFirstTodo = 'Make coffee and take out the trash.';
var mySecondTodo = 'Order more stuff I might need from Amazon Prime.';
var myThirdTodo = 'Work on CareerFoundry assigments :)';

addAtodo(myFirstTodo);
addAtodo(mySecondTodo);
addAtodo(myThirdTodo);

console.log('-');
console.log(getTodoList()); // as we can see, the result is an array with 3 Strings.

// So now let's say we completed our second todo item and want to delete it, and we see that our delete function requires an index as it's argument.
// remember going over indexes? If not please refer back to the array section.
// Our second todo item is at index 1, remember Arrays start at 0 index.
console.log('-');
removeAtodo(1);
console.log(getTodoList()); // as you can see the todo item at index 1 has been removed and a "<1 empty item>" is stated. This is generated when using the delete function. There are many ways to remove or "delete" data in JavaScript, this is the most basic implementation.
console.log('-');
updateAtodo(2, 'Assignments are all done, and I can chill for the day.');
console.log(getTodoList());

// here we are adding an Object (complex data type)
var myFourthTodo = {
	id: 1, // here we are just adding an id to identify our fourth todo with a Number data type
	item: 'go to the gym.',
	completed: false // false is a boolean
};

console.log('-');
addAtodo(myFourthTodo);
console.log(getTodoList());

var amoutToDeposit = 1280.52 + 99 + 25877.15;
// Lets just update our second todo with something
var anotherTodoItem = {
	bankName: 'The bank of cats and dogs',
	depositToBank: 'check amout (cause I can\'t do math :X):' + '🐱 ' + amoutToDeposit
};

console.log('-');
updateAtodo(1, anotherTodoItem);
console.log(getTodoList()); // as we can see the Object is now added to our todo list.

// Resources on the JavaScript native delete functionality https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
// https://codeburst.io/javascript-what-is-the-return-statement-97d8b11a1a0c
console.log('---------------');

// You can press the green "run" button to execute the lesson from above
// Feel free to experiment with the code by changing some values here or "open in repl.it button" on the right

// -----------------How Primitive and Complex Data Types Differ-----------------
console.log('---------------');
console.log('------ Primitive Data Types ------');
console.log('-');

var a = 1;
var b = a; // Both a & b now have the value 1
console.log('value of a: ', a);
console.log('value of b: ', b);

console.log('-');

a = 2; // Now, a = 2 and b remains 1
console.log('value of a: ', a);
console.log('value of b: ', b);


console.log('------ Complex Data Types ------');
// Arrays
var a = [1, 2];
var b = a; // Both a & b contain the same array instance
console.log('value of a: ', a);
console.log('value of b: ', b);

a.push(3); // Both a & b will be [1, 2, 3]
// so when we add to a (or b), the other will always stay exactly the same
console.log('value of a: ', a);
console.log('value of b: ', b);

// Objects
var a = { age: 1 };
var b = a;
b.name = "John"; // a.name will now also be "John"

console.log('value of a: ', a);
console.log('value of b: ', b);

// Unexpected behaviour
var john = {
	age: 30
};

var person = john;

function testFunction() {
	person.age = 40;
	//do something else
}

testFunction();
console.log(john.age); // this will now output 40 as the object was changed
console.log(person.age); // this will also output 40

console.log('---------------');

// ---------------------Conditionals with If & Else---------------------
console.log('---------------');
console.log('Conditionals with If & Else');
console.log('-');

var age = 10; // feel free to change the age

if (age === 20) {
	console.log("You are 20 years old!");
} else {
	console.log("You are not 20 years old...");
}

var myCondition = true;
if (myCondition) {
	console.log('hey! myCondition variable is equal to: ', myCondition);
	// do something else
}

console.log('------ Comparisons ------');

var condition1 = 1 < 2; // is smaller than -> true
var condition2 = 1 > 2; // is greater than -> false
var condition3 = 1 >= 1; // is greater than or equal -> true
var condition4 = 1 <= 2; // is smaller than or equal -> true
var condition5 = 1 === 2; // is equal -> false
var condition6 = 1 !== 2; // is not equal -> true

// Try console.log(condition1, condition2, ...) yourself!

// JavaScript will also try to auto-convert any value into a boolean when putting it in a condition
var condition = 10;
if (condition) {
  console.log('Hello there!');
}


// --------------------------Truthy vs. Falsy------------------------------
console.log('---------------');
console.log('Truthy vs. Falsy');
console.log('-');

// Keep in mind!
// Strings: “” (an empty string) is false; anything else is true
// Numbers: 0 is false; any other number is true
// Null, Undefined: false
// Arrays: always true (even an empty array!)
// Objects: always true (even an empty object without properties!)

var userInput = ""; // empty string
if (userInput) {
	 // Do something with the user input!
} else {
	console.log('I will execute when all "else" fails...');
}//  I will execute when all "else" fails... because the empty striing is false

// here we are inverting from false to true using the "!" operator.
var userInput = "";
if (!userInput) {
	// This is equal to if (userInput == false)
	console.log('Hey I\'m true!');
} else {
	console.log('I will execute when all "else" fails...');
}   //Hey I'm true! because empty string is false
// Why is this true? It's also known as type coercion, see resource at the end for a good read on it.

if (userInput == false) { // userInput initially is an empty String, but JavaScript coerced the "" on the left side into a false boolean, which then compared to the right side false boolean, and ultimately equal which is a truthy.
	console.log('Hey I\'m true!, confused? Yeah me too... but don\'t worry it\'ll get better!');
} else {
	console.log('I will execute when all "else" fails...');
}
console.log('------ Diving deeper ------');

var input1 = "10";
var input2 = 10;
console.log(input1 == input2); // true - it converts the string "10" into the number 10
console.log(input1 === input2); // false - different data types!

var input3 = "";
var input4 = 0;
console.log(input3 == input4); // true - these end up being (internally) converted to false

var a = [1, 2];
var b = a; // b is now sharing the same array instance as a.
// Remember, adding a value to a would also add it to b
var c = [1, 2]; // c has the same content as a & b, but is a different instance.
// Changing it has no effect on a & b.

a === b; // true
a === c; // false
b == c; //false - the non-strict comparator also returns false here
console.log('{ age: 1 } === { age: 1 } is', { age: 1 } === { age: 1 }); // false - the objects have the same content, but are not the same instances!

// If you really want to compare array or object content, you’ll need to do so manually. The following example uses chaining of conditions, which we’ll explain in more detail in the next section:

var a = [1, 2];
var b = [1, 2];
var isEqual = a[0] === b[0] && a[1] === b[1];
console.log('isEqual value:', isEqual);

// https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/
console.log('---------------');


//  --------------------------Chaining Conditions --------------------------
console.log('---------------');
console.log('Chaining Conditions');
console.log('-');

if (true && true) {
	// Yes!
	// Try console.log in these statements to test it out
}
if (true && false) {
	// No...
}
if ("text" && 0) {
	// No - 0 is not truthy!
}
var age = 15;
if (age > 12 && age <= 20) {
	// Yes!
}
var isTeenager = age > 12 && age <= 19; // the variable will now contain "true"
console.log('isTeenager', isTeenager);

// The OR operator works in a similar manner, but will result in a truthy value even if only one of the values (or both) is truthy:

if (true || true) {
	// Yes!
}
if (true || false) {
	// Yes
}
if (false || 10 < 5) {
	// No...
}

console.log('------ Diving deeper ------');

var field1 = true || false; // will be true
var field2 = false || true; // will also be true
var field3 = false || "hello"; // will be "hello"
var field4 = 100 || "hello"; // will be 100

// When using the OR operator in an if-condition, this distinction doesn’t make much difference. It can, however, also be used for other things. For example, if you want to provide a default value:

var userInput = ""; // This might come from somewhere else

function someFunction(userInput) {
	// If userInput was empty, use "Default text", else use the userInput...
	var myValue = userInput || "Default text";
	// Do something more
	return myValue;
}
// Finally, you can also chain multiple conditions together. You can use parentheses the same way as with any other mathematical equation:

if (true && (false || true) && (10 > 5)) {
	// Yes!
	var result = someFunction(); // testing the someFunction
	console.log(result);

	var result2 = someFunction('hey what\s going on'); // testing the someFunction with custom input
	console.log(result2);

	var test3 = true;
	var result3 = someFunction(test3); // testing the someFunction with custom input through a variable
	console.log(result3);
}

// https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/
console.log('---------------');

//----------------------------------- Loops-------------------------------------
console.log('---------------');
console.log('Loops');
console.log('-');

console.log(1);
console.log(2);
console.log(3);

console.log('-');

// for loop
for (var i = 1; i <= 3; i++) {
	console.log(i);
}

console.log('-');

var ages = [15, 20, 25, 30];
for (var i = 0; i < ages.length; i++) {
	console.log('ages: ', ages[i]);
}

console.log('---------------');
