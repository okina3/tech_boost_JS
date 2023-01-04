// for (let i = 0; i < 10; i++) {
//    let s = '(' + i + '):';
//    //
//    for (let j = 0; j < 10; j++) {
//       s = s + '*';
//    }
//    console.log(s);
// }

// for (let i = 0; i < 3; i++) {
//    console.log('繰り返し処理１:' + i);
//    // break;
//    continue
//    console.log('繰り返し処理２:' + i);
// }

// console.log('for文終了後の処理');


//課題05-----------------------------------------------------------

for (let i = 10; i >= 1; i--) {
   let s = '(' + i + '):';
   for (let j = 0; j < i; j++) {
      s = s + '*';
   }
   console.log(s);
}
