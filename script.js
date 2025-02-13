//your JS code here. If required.
console.log('Program started');

// Simulating Macrotask - setTimeout (runs after the current execution context)
setTimeout(() => {
  console.log('Macrotask 1');
}, 0);

// Simulating Microtask - Promise (runs before any macrotask)
Promise.resolve().then(() => {
  console.log('Microtask 1');
});

// Simulating another Macrotask
setTimeout(() => {
  console.log('Macrotask 2');
}, 0);

// Simulating another Microtask
Promise.resolve().then(() => {
  console.log('Microtask 2');
});

// A macro task at the very end
setTimeout(() => {
  console.log('Macrotask 3');
}, 0);

console.log('Program finished');

