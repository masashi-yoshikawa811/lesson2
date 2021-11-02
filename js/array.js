let arr1 = ['リンゴ', 'バナナ', 'イチゴ'];

console.log('arr1追加前:' + arr1)

arr1.push('メロン','ミカン');

console.log('arr1追加後:' + arr1)

let arr2 = ['リンゴ', 'バナナ', 'イチゴ','メロン','ミカン'];

console.log('arr2削除前:' + arr2)

let arr2item = arr2.shift();

console.log('arr2shift後:' + arr2)

arr2.unshift(arr2item);

console.log('arr2unshift後:' + arr2)

arr2.pop();

console.log('arr2pop後:' + arr2)

arr2.push('ミカン');

console.log('arr2push後:' + arr2)

arr2.splice(1,2);

console.log('arr2splice後:' + arr2)

// jsエラー
delete arr2[1];
console.log('arr2delete後:' + arr2[1])

console.log('arr2delete後:' + arr2)

let arr3 = ['リンゴ', 'バナナ', 'イチゴ','メロン','ミカン','スイカ'];

console.log('arr3取得前:' + arr3)

console.log('arr3取得0番目' + arr3[0])

console.log('arr3取得3番目' + arr3[3])

console.log('arr3取得6番目' + arr3[6])

let arr4 = [1,2,3,4,5,6];

let arr5 = [1,3,5,7,9,11];

console.log('arr4:' + arr4)

console.log('arr5:' + arr5)

//配列を1つにまとめる
let arrs = [arr4, arr5];

let resultArr = arrs.reduce(function(previousValue, currentValue, index, array) {
	//比較したい配列をreduceで結合して1つにまとめる
	return previousValue.concat(currentValue);

}).filter(function (x, i, self) {
	//重複を削除
	return self.indexOf(x) === i;

}).filter(function(val) {
	//比較したい配列(arr4,arr5)のすべてに含まれるもののみ抽出
	var flg = true;

	arrs.forEach(function(compArr) {
		flg = (compArr.indexOf(val) !== -1) && flg;
	});

	return flg;
});
console.log(resultArr);


//htmlに表示する
window.onload = function () {
	for (let i = 0; i < arr1.length; i++) {
		let getData = document.getElementById('getData');
		const arrData = document.createTextNode(arr1[i]);
		getData.appendChild(arrData);
		if(i < arr1.length - 1) {
			// カンマをいれる
		}
	}

	// let getData = document.getElementById('getData');

	// let arrData = document.createTextNode(arr1);

	// getData.appendChild(arrData);

}