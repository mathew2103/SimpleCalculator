# Simple Calculator

## Description
This is a simple calculator project built using JavaScript. It has a very minimalist, yet pleasant design and performs basic arithmetic operations such as addition, subtraction, multiplication, and division.

## How to Use  

1. **Choose the First Number**  
   - Click the **"Press Me"** button to start a rapidly increasing counter.  
   - Click **"Stop"** to lock in the number as your first operand.  

2. **Select an Operation**  
   - Enter the operation as a full word: `addition`, `subtraction`, `multiplication`, or `division`.  

3. **Choose the Second Number**  
   - Play the video and pause at the desired timestamp (in seconds).
   - The timestamp value is your second operand.
  
4. **Pass the captcha test, and you have your result**
    - Solve the given captcha

## Tech Stack
React, Vite, TailwindCSS

## Anti Patterns and Rationale
**Selecting First operand:** No control whatsoever with the user. A start-stop button which starts a VERY fast counter. And as soon as you stop it, at God knows what point, the `next` button is flying all over the place. Come on, give that guy some freedom.

A loading bar after everytime you press next, serving no purpose, just randomly showing progress, that too not in the traditional increasing order, in a random assortment instead. Who doesnt like some unnecessary wait time?

**Selecting Operator:** We first ask them to fully fill in the operation they want to perform 
("addition", "subtraction"..) and then tell them that its Godric's Hat that shall decide (randomly)

**Backspace button:** To go back.. to the start.

**Selecting Second operand:** One of the best ways to choose a number? AH yes play through rickroll to the timestamp you want to use.
**Reset button:** incase they wanna go back.. in the video? NO, to the start of the calculator they go.

**Captcha:** And for the cherry on top, a simple captcha (as if theres bots attacking), asking them to solve the same question they have just inputted, (failure of which leads the website insulting them like an asian parent)

Does this actually work? Yep, absolutely, just have a good reaction time, be lucky enough and good at math.
