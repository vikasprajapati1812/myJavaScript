
// const p1=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//     resolve("P1 Success")        
//     // reject("P1 fails")
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
//     resolve("P3 Success")        
//     // reject("P3 Fails")

//     }, 2000);
// });

// Promise.any([p1,p2,p3])
// .then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.error(err)
// })

// //// which ever may resolve the first successfully




// const p1=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//     resolve("P1 Success")        
//     // reject("P1 fails")
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
//     // reject("P3 Fails")

//     }, 2000);
// });

// Promise.any([p1,p2,p3])
// .then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.error(err)
// })


////// which ever resolve  succcessfully will be the value





// const p1=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//     resolve("P1 Success")        
//     // reject("P1 fails")
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

// Promise.any([p1,p2,p3])
// .then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.error(err)
// })


////whichever will resolve will be the value ..




//////////suppose if all the promises get rejected
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

// Promise.any([p1,p2,p3])
// .then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.error(err)
// })

// above code will throw a error  and the error will be AGGREGATE ERROR 
//  as the all the promises get failed thats why aggregate error







const p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
    // resolve("P1 Success")        
    reject("P1 fails")
    }, 3000);
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
    // resolve("P2 Success")        
    reject("P2 Fails")
    }, 1000);
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(() => {
    // resolve("P3 Success")        
    reject("P3 Fails")

    }, 2000);
});

Promise.any([p1,p2,p3])                  // change any to allSetlled, race , all and see results , take differnces
.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.error(err)
})
