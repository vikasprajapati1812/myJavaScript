// const p1=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//     resolve("P1 Success")        
//     }, 3000);
// })
// const p2=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//     resolve("P2 Success")        
//     }, 1000);
// })
// const p3=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//     resolve("P3 Success")        
//     }, 2000);
// });

// Promise.all([p1,p2,p3])
// .then((res)=>{
//     console.log(res)
// })
//// Since all the promises got settled so wait untill all the promise get settled so then after the result is shown.

///////////////////////////////////////

// const p1=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//     resolve("P1 Success")        
//     }, 3000);
// })
// const p2=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//     // resolve("P2 Success")        
//     reject("P2 Fails")
//     }, 1000);
// })
// const p3=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//     resolve("P3 Success")        
//     }, 2000);
// });

// Promise.all([p1,p2,p3])
// .then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.error(err)
// })

//it will return the value as error since the P2 promise got failed to the, value comes after the 1 sec
//  and it will not wait for the other promises to get settled


///////////////////////////////////////////


// const p1=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//     resolve("P1 Success")        
//     }, 3000);
// })
// const p2=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//     resolve("P2 Success")        
//     // reject("P2 Fails")
//     }, 1000);
// })
// const p3=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//     // resolve("P3 Success")        
//     reject("P3 Fails")

//     }, 2000);
// });

// Promise.all([p1,p2,p3])
// .then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.error(err)
// })

//it will return the value as error since the P3 promise got failed to the, value comes after the 2 sec
