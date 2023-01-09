// 連想配列の定義
let fruits = {
   apple: 'りんご',
   strawberry: 'いちご',
   grape: 'ぶどう',
   lemon: 'レモン'
};

console.log(fruits['grape']);

// -----------------------------------------------------------
for (key of Object.keys(fruits)) {
   console.log(key);
}

//-------------------------------------------------------------- 

for ([key, value] of Object.entries(fruits)) {
   console.log(key, value); 
}