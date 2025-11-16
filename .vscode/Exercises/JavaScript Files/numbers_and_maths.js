// 1. At a restaurant, you order 1 soup for $10, 3 burgers for $8 each, and 1 ice cream for $5. Use JavaScript to calculate the cost of the order.

console.log(`Total Amount: $${1 * 10 + 3 * 8 + 1 * 5}`); // $39

// 2. You're at a restaurant with 2 friends (3 people in total) and make the same order as 1. Calculate how much each person pays.

console.log(
  `Amount paid by each person: $${(2 * (1 * 10 + 3 * 8 + 1 * 5)) / 3}`
); // $26

// 3. Calculate the total cost of a toaster ($18.50) and 2 shirts ($7.50 each).

console.log(`Total Cost: $${18.5 + 2 * 7.5}`); // $33.5

// 4. Calculate a 10% tax for the total in exercise 3.

console.log(`Total tax: $${((18.5 + 2 * 7.5) * 10) / 100}`); // $3.35

// 5. Calculate a 20% tax for the total in 3 (remember that 1% = 1/ 100, so 20% = 20 / 100 = 0.2)

console.log(`Total tax: $${((18.5 + 2 * 7.5) * 20) / 100}`); // $6.7

// 6 Setup: in the Amazon project, go to the home page and add a toaster ($18.99) to your cart so you have 1 basketball, 1 t-shirt, and 1 toaster Choose $4.99 shipping for the toaster.

console.log(`Total cost: $${18.99 + 20 + 7.99}`); // $46.98

// 7. Calculate the cost of the products
// (before shipping and taxes).
// Items: 1 toaster ($18.99), 1 basketball ($16) and 1 t-shirt ($ 7.99)
// Hint: calculate in cents to avoid inaccuracies.

// Order Summary
// Items (3): ${__}
// Shipping & handling:  $4.99
// Total Before Tax : {__}
// Estimated Tax (10 %): ${__}
// Order Total: ${__}

console.log(`Cost of Items: $${(1899 + 1600 + 799) / 100}`); // $42.98
console.log(`Total Before tax: $${(1899 + 1600 + 799 + 499) / 100} `); // $47.97
console.log(`Estimated Tax: $${Math.round((1899 + 1600 + 799) * 0.1) / 100}`); // $4.3
console.log(
  `Total Order:$${
    (1899 + 1600 + 799 + 499 + Math.round((1899 + 1600 + 799) * 0.1)) / 100
  }`
); // $52.27

// 8. Temperature: 25 degree Celsius to Fahrenheit

console.log(
  `Temperature in Fahrenheit: ${(25 * 9) / 5 + 32} degree Fahrenheit`
); // 77 degree Fahrenheit

// 9. Temperature: 86 degree Fahrenheit to Celsius
console.log(`Temperature in Celsius: ${((86 - 32) * 5) / 9} degree Celsius`); // 30 degree Celsius

// 10. Temperature: -5 degree Celsius to Fahrenheit
console.log(
  `Temperature in Fahrenheit: ${(-5 * 9) / 5 + 32} degree Fahrenheit`
); // 23 degree Fahrenheit
