
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

// Promise.allSettled([p1,p2,p3])
// .then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.error(err)
// })

//when all the promises got settled whether they are resolve or reject, thereafter the result is shown





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
//     // resolve("P3 Success")        
//     reject("P3 Fails")

//     }, 2000);
// });

// Promise.allSettled([p1,p2,p3])
// .then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.error(err)
// })
///////////////////////////////////////////////////


///suppose all the promises got rejected or failed


// const p1=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//     // resolve("P1 Success")        
//     reject("P1 fails")
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
//     // resolve("P3 Success")        
//     reject("P3 Fails")

//     }, 2000);
// });

// Promise.allSettled([p1,p2,p3])
// .then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.error(err)
// })
