// // JSON形式でのデータ（文字列）
// const json_data = '{"message":null,"results":[{"address1":"北海道","address2":"美唄市","address3":"上美唄町協和","zipcode":"0790177"},{"address1":"北海道","address2":"美唄市","address3":"上美唄町南","zipcode":"0790177"}],"status":200}';

// // データ型の確認
// console.log(typeof (json_data));

// // JSON形式のデータ（文字列）をJavaScriptのオブジェクトに変換
// let obj = JSON.parse(json_data);

// // データ型の確認
// console.log(typeof (obj));

// // オブジェクト型に変換した結果の出力
// console.log(obj);


const obj = {
   'message': null,
   'results': [
      { 'address1': '北海道', 'address2': '美唄市', 'address3': '上美唄町協和', 'zipcode': '0790177' },
      { 'address1': '北海道', 'address2': '美唄市', 'address3': '上美唄町南', 'zipcode': '0790177' }
   ],
   'status': 200
};

// データ型の確認
console.log(typeof (obj));

// JavaScriptのオブジェクトをJSON形式の文字列に変換
let json_data = JSON.stringify(obj);

// データ型の確認
console.log(typeof (json_data));

// 変換結果の出力
console.log(json_data);
