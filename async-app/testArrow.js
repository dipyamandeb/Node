//Note x is refence to a function
// x--> (a,b)=>a+b;
//Callback is a function which is calling another function is callback
//Filteration is the highly applicable form of callback

function operation(a, b, x) {
    y = x(a, b);
    console.log(y);
}


operation(30, 20, (a, b) => a + b);
operation(30, 20, (a, b) => a * b);
operation(30, 20, (a, b) => a / b);
operation(30, 20, (a, b) => a - b);
