// 3. Using concatenation, add the 2 strings from 2 and 3 together to create the text: 'My Name is:'___' (replace ___ with your name).

console.log("My name is: " + "Nishant" + "."); // My Name is Nishant.

// 4. At a restaurant, your order 1 coffee ($5) and 1 bagel ($3). Using math, calculate the total cost, and using concatenation, create the text: 'Total cost $___'(replace ___ with the total you calculated).

console.log("Total Cost: $" + (5 + 3)); // Total Cost: $8

// 5.Do the same thing as 4, but use a template string and interpolation.

console.log(`Total cost: $${5 + 3}`); // Total Cost: $8

// 6.Display the text from 5 in a popup using alert();

alert(`Total Cost: $${5 + 3}`);

// 7. You order 1 coffee ($5.99) and 1 bagel ($2.95). Using math, calculate the total cost, and using concatenation, create the text: 'Total cost: $___'(hint: calculate in cents to avoid inaccuracies).

let totalCost = 599 + 295;
console.log("Total Cost: $" + totalCost / 100); // Total Cost: $8.94

// 8.Do the same thing as 7, but use a template string and interpolation.

console.log(`Total Cost: $${totalCost / 100}`); // Total Cost: $8.94

// 9. Display the text from 8 in a popup.

alert(`Total Cost: $${totalCost / 100}`);

// 10. Using a multi-line string, create the text from 3h and add a line of text underneath: 'Thank you, come again!'. Display both lines in a popup.

alert(`Total cost: $${totalCost / 100}\nThank  you, come again!`);

// In the amazon project, update the cart to 2 basketballs ($20.95 each) with $4.99 shipping, and 2 t-shirts ($7.99 each) with $4.99 shipping.

// 11. Using interpolation, create the first line of text (use math to calculate the numbers 4 and 57.88).

console.log(
  `Items (${2 * 1 + 2 * 1}): $${(2 * 20.95 * 100 + 2 * 7.99 * 100) / 100}`
); // Items (4): $57.88

// 12. Create second line of text: 'Shipping & handling: $9.98' (use math).

console.log(`Shipping & handling: $${(4.99 * 2 * 100) / 100}`); // Shipping & handling: $9.98

// 13. Create third line:'Total before text: $67.86' (use math).

console.log(`Total before tax: $${(2 * 2095 + 2 * 799 + 2 * 499) / 100}`); // Total before tax: $67.86

// 14. Create fourth line of text: 'Estimated text (10%): $5.79' (use math and Math.round(); to calculate the exact number).
console.log(
  `Estimated tax (10%): $${Math.round((2 * 2095 + 2 * 799) * 0.1) / 100}`
); // Estimated tax (10%): $5.79

// 15. Create fifth line of tet: 'Order total: $74.65'

console.log(
  `Order total: $${
    (2 * 20.95 * 100 +
      2 * 7.99 * 100 +
      4.99 * 2 * 100 +
      Math.round((2 * 2095 + 2 * 799) * 0.1)) /
    100
  }`
); // Order total: $73.65
