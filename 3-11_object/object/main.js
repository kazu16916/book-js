'use strict'

// オブジェクトを定義
let jsbook = {
    // ↓key  ↓value
    title: 'JacaScript入門',
    price: 2500,
    stock: 3,
    // オブジェクトにオブジェクトを定義
    obj: {
        text: 'test',
        func:() => {
            console.log('this is callback function')
        }
    }
}
console.log(jsbook)

// オブジェクトのキーへのアクセス方法
let bookTitle = jsbook.title
console.log(bookTitle)
console.log(jsbook.price)

console.log(jsbook.obj.text)
console.log(jsbook.obj.func)

// オブジェクトの値を変える
jsbook.price = 2728
console.log(jsbook.price)

// 大かっこでアクセス
console.log(jsbook['price'])