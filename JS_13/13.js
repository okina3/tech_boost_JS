// 大分類
let cate1 = [
   '---',                  // 未選択
   '家具',
   'ベッド・マットレス',
   '収納家具・収納グッズ',
   '子ども家具',
   '調理器具'  //大分類の追加
];

// 小分類
let cate2 = [
   ['---'],  // 未選択
   ['ベッド', 'ソファ', '棚・ラック', 'テーブル・椅子'],  // 家具のカテゴリ
   ['ベッド', '寝具', 'マットレス'],                      // ベッド・マットレスのカテゴリ
   ['家具・ラック', '収納システム'],                      // 収納家具・収納グッズ'のカテゴリ
   ['子ども部屋家具', 'ベビー家具・ベビーグッズ'],         // 子ども家具
   ['包丁', 'フライパン', 'まな板']                        //小分類の追加
];

// 商品の定義
var itemList = [                       //商品のカラムを追加
   { id: '0001', name: 'ソファベッド', price: '400', tags: ['ベッド', 'ソファ', '寝具'] },
   { id: '0002', name: 'シングルベッド', price: '500', tags: ['ベッド', 'ソファ', '寝具'] },
   { id: '0003', name: '子ども用ベッド', price: '450', tags: ['ベッド', 'ソファ', '寝具', '子ども部屋家具'] },
   { id: '0004', name: 'ソファ', price: '200', tags: ['ソファ'] },
   { id: '0005', name: 'キューブボックス', price: '100', tags: ['家具・ラック', '収納システム'] },
   { id: '0006', name: 'オープンラック', price: '800', tags: ['家具・ラック', '収納システム'] },
   { id: '0007', name: 'コンピュータデスク', price: '700', tags: ['テーブル・椅子'] },
   { id: '0008', name: 'サイドテーブル', price: '550', tags: ['テーブル・椅子'] },
   { id: '0009', name: 'ダイニングテーブル', price: '850', tags: ['テーブル・椅子'] },
   { id: '0010', name: '子ども部屋用収納', price: '600', tags: ['収納システム', '子ども部屋家具'] },
   //商品の追加
   { id: '0011', name: 'チタンのフライパン', price: '350', tags: ['フライパン'] },
   { id: '0012', name: '鉄のフライパン', price: '250', tags: ['フライパン'] },
   { id: '0013', name: 'チタンの包丁', price: '800', tags: ['包丁'] },
   { id: '0014', name: '傷の付きにくいまな板', price: '900', tags: ['まな板'] }
];


//--- 共通で使用する要素を取得 ---
// 大分類のselectをid属性により取得
let cate1Element = document.getElementById('mainMenu');
// 小分類のselectをid属性により取得
let cate2Element = document.getElementById('subMenu');
// 商品リストを表示する要素を取得
var itemListElement = document.getElementById('itemList');


//--- 定義した関数 ---
// 大分類のoptionを追加する関数
function setMainMenu() {
   cate1Element.innerHTML = '';
   // debugger;
   cate1.forEach(e => {
      let option = document.createElement('option');
      option.value = e;
      option.text = e;
      cate1Element.appendChild(option);
   });
}

// 小分類のoptionを追加する関数
function setSubMenu(idx) {
   cate2Element.innerHTML = '';

   cate2[idx].forEach(e => {
      let option = document.createElement('option');
      option.value = e;
      option.text = e;
      cate2Element.appendChild(option);
   });
}

// 商品一覧の表示
function viewItemList(tag) {
   itemListElement.innerHTML = '';

   itemList.forEach((e ,i) => {
      if (itemList[i].tags.some(t => t === tag)) {
         let li = document.createElement('li');
         let text = document.createTextNode(itemList[i].id + ':' + itemList[i].name + ' : ' + itemList[i].price + '円');
         li.appendChild(text);
         itemListElement.appendChild(li);
      }
   });
}


//--- イベントリスナーの定義 ---
// 大分類の選択された時のイベントリスナー
cate1Element.addEventListener('change', function () {
   let idx = cate1Element.selectedIndex;
   setSubMenu(idx);
   viewItemList(cate2[idx][0]);
});

//小分類の選択された時のイベントリスナー
cate2Element.addEventListener('change', function () {
   let val = cate2Element.value;
   viewItemList(val);
});


//--- プログラムの実行 ---
// 大分類の生成
setMainMenu();
