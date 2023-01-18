// 大分類
let cate1 = [
   '---',                  // 未選択
   '家具',
   'ベッド・マットレス',
   '収納家具・収納グッズ',
   '子ども家具'
];
cate1.push('調理器具');  //大分類の追加


// 小分類
let cate2 = [
   ['---'],  // 未選択
   ['ベッド', 'ソファ', '棚・ラック', 'テーブル・椅子'],  // 家具のカテゴリ
   ['ベッド', '寝具', 'マットレス'],                      // ベッド・マットレスのカテゴリ
   ['家具・ラック', '収納システム'],                      // 収納家具・収納グッズ'のカテゴリ
   ['子ども部屋家具', 'ベビー家具・ベビーグッズ']         // 子ども家具
];
cate2.push(['包丁', 'フライパン', 'まな板']);  //小分類の追加


// 商品の定義
var itemList = [
   { id: '0001', name: 'ソファベッド', tags: ['ベッド', 'ソファ', '寝具'] },
   { id: '0002', name: 'シングルベッド', tags: ['ベッド', 'ソファ', '寝具'] },
   { id: '0003', name: '子ども用ベッド', tags: ['ベッド', 'ソファ', '寝具', '子ども部屋家具'] },
   { id: '0004', name: 'ソファ', tags: ['ソファ'] },
   { id: '0005', name: 'キューブボックス', tags: ['家具・ラック', '収納システム'] },
   { id: '0006', name: 'オープンラック', tags: ['家具・ラック', '収納システム'] },
   { id: '0007', name: 'コンピュータデスク', tags: ['テーブル・椅子'] },
   { id: '0008', name: 'サイドテーブル', tags: ['テーブル・椅子'] },
   { id: '0009', name: 'ダイニングテーブル', tags: ['テーブル・椅子'] },
   { id: '0010', name: '子ども部屋用収納', tags: ['収納システム', '子ども部屋家具'] },
];
//商品の追加
itemList.push({ id: '0011', name: 'チタンのフライパン', tags: ['フライパン'] });
itemList.push({ id: '0012', name: '鉄のフライパン', tags: ['フライパン'] });
itemList.push({ id: '0013', name: 'チタンの包丁', tags: ['包丁'] });
itemList.push({ id: '0014', name: '傷の付きにくいまな板', tags: ['まな板'] });

//商品のカラムを追加
itemList[0].price ='400';
itemList[1].price ='500';
itemList[2].price ='450';
itemList[3].price ='200';
itemList[4].price ='100';
itemList[5].price ='800';
itemList[6].price ='700';
itemList[7].price ='550';
itemList[8].price ='850';
itemList[9].price ='600';
itemList[10].price ='350';
itemList[11].price ='250';
itemList[12].price ='800';
itemList[13].price ='900';


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
   // 大分類の配列に保存されている数だけoptionとして追加する
   for (let i = 0; i < cate1.length; i++) {
      let option = document.createElement('option');
      option.value = cate1[i];
      option.text = cate1[i];
      cate1Element.appendChild(option);
   }
}

// 小分類のoptionを追加する関数
function setSubMenu(idx) {
   cate2Element.innerHTML = '';

   for (let i = 0; i < cate2[idx].length; i++) {
      let option = document.createElement('option');
      option.value = cate2[idx][i];
      option.text = cate2[idx][i];
      cate2Element.appendChild(option);
   }
}

// 商品一覧の表示
function viewItemList(tag) {
   itemListElement.innerHTML = '';
   for (let i = 0; i < itemList.length; i++) {
      if (itemList[i].tags.some(t => t === tag)) {
         let li = document.createElement('li');
         let text = document.createTextNode(itemList[i].id + ':' + itemList[i].name + ' : ' + itemList[i].price + '円');
         li.appendChild(text);
         itemListElement.appendChild(li);
      }
   }
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
   var val = cate2Element.value;
   viewItemList(val);
});


//--- プログラムの実行 ---
// 大分類の生成
setMainMenu();
