function orderFood(foodItem,callBack){
    console.log(`Order is placed ${foodItem}`);
    console.log(`Restaurant is preparing the food ...`);

    setTimeout(()=>{
        console.log(`${foodItem} is ready`);
        callBack();
    },3000)
}

function confirmDelivery(){
    console.log("Food is delivered to the customer");
}

orderFood("Pizza",confirmDelivery);