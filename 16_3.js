
// ~~~~~~~~~~~~~~~~~~~~~~~~~
//       While

// var index = 1;
// while (index <= 10){
//     console.log(` số thứ ${index}`);
//     index = index + 1;
// } Result : 1,2,3,4,5,6,7,8,9, 10


// var index = 1;
// while (true){
//     console.log(` số thứ ${index}`);
//     if(index == 10){
//         break;
//     }
//     index++;
// } result : 1,2,3,4,5,6,7,8,9,10


// var index = 1;
// while(true){
//     if(index == 10){
//         break;
//     }
//     console.log(`So thu ${index}`);
//     index++;
// } result : 1,2,3,4,5,6,7,8,9



// var index = 1;
// while (true) {
//     console.log(`so thu ${index}`);
//     index++;
//     if (index == 10) {
//         break;
//     }
// } result : 1,2,3,4,5,6,7,8,9


// var index = 2;
// while(index <= 10){
//     console.log(`so thu ${index}`)
//     // index = index + 2
//     index +=2;

// } result : 2,4,6,8, 10



// var index = 0;
// while(index < 10){
//     index +=2;
//     console.log(`so thu ${index}`);
// } result : 2,4,6,8,10


// var index = 0;
// while(index <=10 ){
//     if(index %2 == 0 && index >=2){
//         console.log(`so thu ${index}`);
//     }
//     index++;
// } result : k đáp ứng điều kiện nên k in ra


// ~~~~~~~~~~~~~~~~~~~~~~~~~
//            Do while

// let i = 5;

// do{
//     console.log(i);
    
// }while(i > 5);
// result : 5


// let i = 5 ;
// do{
//     console.log(i);
//     i++;
// }while(i > 5 && i <=20);
// résult : 5,6,7,8,9,10,...


// let i = 5;
// do{
//     console.log(i);
//     i++;
//     if(i <= 20){
//         break;
//     }
// }while(i > 5);

// result : 5


// let i = 5;
// do{
//     console.log(i);
//     i++;
//     if(i > 20){
//         break;
//     }
// }while(i > 5);
// result : 5,6,7,8,9,...20



// ~~~~~~~~~~~~~~~~~~~~~~~~~
//                For

// for (i=0;i<10;i++){
//     console.log(`${i}`);
// }
// result: 0,1,2,3,4,5,6,7,8,9. vì khi console.log(`${i}`) in ra 9 thì đáp ứng đc điều kiện cuối cùng 9<10 và vòng lặp sẽ kết thúc


// let i = 0;
// for(;i<10;i++){
//     console.log(`${i}`);
// } result : kết quả giống phần trên. Chỉ là cho let i = 0 ra khỏi for mà thôi. 


// let i = 0;
// for(;;i++){
//     console.log(`${i}`);
//     if(i >10){
//         break;
//     }
// } result : 0,1,2,3..10

let i = 0;
for(;;){
    console.log(`${i}`);
    if(i>10){
        break;
    }
}