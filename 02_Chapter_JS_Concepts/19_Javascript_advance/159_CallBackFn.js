function placeOrder(item , callback){

    console.log(`Order placed for ${item}`);
    callback();
}   

function orderDelivered(){  //
    console.log('Order delivered');
}

placeOrder('Pizza', orderDelivered);

// Output:
// Order placed for Pizza
// Order delivered

//Second way , with ananymos function
placeOrder('Burger', function(){  // Calling function using anonymous function
    console.log('Order delivered');
});
 