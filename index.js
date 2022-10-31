// console.log('kenyan boy');
'use strict';
function logger(){
    console.log('my name is mwenda')
}
logger();//calling back the function || invoking the function || running the code
logger();
logger();//we can re-use the function by calling it as many times as we want
logger();


function fruitProcessor(apples, oranges){  //oragnes and apple are paramaters they represent the input datd of this function
        const juice = `juice with ${apples} apples and ${oranges} oranges.`;
        return juice;
}
fruitProcessor(5,0); //we call the function and give the parameters the arguments value 5 and 0;
const appleProduct = fruitProcessor(5,0);//we get the results of what was returned by stroring it in a variable appleproduct and then we call the apple product
console.log(appleProduct);
console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(4,3);//here we have re-used the fruitprocessor function with diffrent arguments to create a apple and orange juice 
console.log(appleOrangeJuice);

const appleMangoJuice = fruitProcessor(5,3);
console.log(appleMangoJuice);

function morningFood(spinach,milk,arrowroots){
    const breakFast = `a dish with ${spinach} spinach,${milk} and ${arrowroots} arrowroots`;
    return breakFast;
}
morningFood(5,1,3);
const mwendaBreak = morningFood(5,1,3);
console.log(mwendaBreak);

function dinnerDish(ugali,meat,greens){
    const eveningDish = `a full course with ${ugali} ugali,${meat} meat and ${greens} greens`;
    return eveningDish;
}
dinnerDish(2,0.5,1.0);
const homeDinner = dinnerDish(2,0.5,1.0);
console.log(homeDinner);