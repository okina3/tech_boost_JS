// オブジェクトの生成
let Apple = {        // 「Apple」オブジェクト
   name: 'りんご',
   colour: 'red',
   size: 12,
   weight: 300,
};

let Orange = {        // 「Orange」オブジェクト
   name: 'みかん',
   colour: 'orange',
   size: 12,
   weight: 310,
};

let Grape = {      // 「Grape」オブジェクト
   name: 'ぶどう',
   colour: 'purple',
   size: 16,
   weight: 500,
};

// 三つオブジェクトを配列に保存
let fruits = [Apple, Orange, Grape];



// weightを計算する関数
let total = 0;
function weight_calc(weight) {
   total = total + weight;
   return total;
}

// 三つのオブジェクトの合計weightを出力
fruits.forEach(e => {
   let total_weight = weight_calc(e.weight);
   console.log('合計: ' + total_weight + 'g');
});

