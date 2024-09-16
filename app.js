let a;
let b;
let c;

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

function askForA() {
    rl.question('Enter the value of a? ', (answer) => { 
        a = parseFloat(answer);

        if (isNaN(a)) {
            console.log("Given value is not a number. Enter value again");
            askForA();
        } else {
            console.log(`Value of a is: ${a}`);
            askForB(); 
        }
    });
}

function askForB() {
    rl.question('Enter the value of b? ', (answer) => { 
        b = parseFloat(answer);

        if (isNaN(b)) {
            console.log("Given value is not a number. Enter value again");
            askForB(); 
        } else {
            console.log(`Value of b is: ${b}`);
            askForC(); 
        }
    });
}

function askForC() {
    rl.question('Enter the value of c? ', (answer) => { 
        c = parseFloat(answer);

        if (isNaN(c)) {
            console.log("Given value is not a number. Enter value again");
            askForC(); 
        } else {
            console.log(`Value of c is: ${c}`);
            PerformCalculations(a, b, c); 
            rl.close(); 
        }
    });
}

function PerformCalculations(a, b, c)
{
    let delta;

    delta = Math.pow(b, 2) - (4*a*c);

    if(delta > 0)
    {
        let x1 = (-b - Math.sqrt(delta)) / (2*a);
        let x2 = (-b + Math.sqrt(delta)) / (2*a);

        console.log(`Your equation has got 2 possible solutions: \n x1: ${x1} \n x2: ${x2} \n delta: ${delta}`);
    }
    else if(delta === 0)
    {
        let x0 = (-b) / (2*a);
        console.log(`Your equation has got 1 possible solution: \n x0: ${x0} \n delta is equal to 0`);
    }
    else
    {
        console.log(`There is no possible solutions for quadratic equation with provided parameters because delta is less than zero \n delta: ${delta}`);
    }
}

askForA();
