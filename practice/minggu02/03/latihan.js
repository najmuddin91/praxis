// //contoh pemograman fungsional
// //latihan fungsi Array

// let meetups = [
//     {name:'JS', isActive:true, members:450},
//     {name:'Angular', isActive:true, members:900},
//     {name:'Node', isActive:false, members:900}
// ];

// let activeMeetups = [];
// for (let i = 0; i < meetups.length; i++) {
//     let m = meetups[i];
//     if (m.isActive) {
//         activeMeetups.push(m);
//     }
// }
// console.log(activeMeetups);

// let activeMeetupsFP = [];
// activeMeetupsFP = (meetups.filter( (m)=>{
//     return m.isActive;
// }));
// console.log(activeMeetupsFP);

//ini contoh Rantai Fungsi tapi masih tidak bisa

// let meetups = [
//     {name:'JavaScript', isActive:true, members:700},
//     {name:'Angular', isActive:true, members:900},
//     {name:'Node', isActive:false, members:600},
//     {name:'React' isActive:true, members:500}
// ];
// let sumFPChain = meetups.filter((m)=>{
//     return m.isActive;
// })
// .map((m)=>{
//     return m.members- (0.1*m.members);
// })
// .reduce((acc, m)=>{
//     return acc + m;
// },0);
// console.log(sumFPChain);

// // Pengulangan
// let list = [1, 2, 3, 4, 5];
// let accumulator = 0;

// function sum(list, accumulator) {
//     if (list.length == 0) {
//         return accumulator;
//     }

//     return sum(list.slice(1), accumulator + list[0]);
// }

// sum(list, accumulator);
// list;
// accumulator;