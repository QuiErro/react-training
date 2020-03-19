// 直接修改数据----------------------------------
var player = {score: 1, name: 'Jeff'};
player.score = 2;
// player 修改后的值为 {score: 2, name: 'Jeff'}


// 新数据替换旧数据------------------------------
var player = {score: 1, name: 'Jeff'};

var newPlayer = Object.assign({}, player, {score: 2});
// player 的值没有改变, 但是 newPlayer 的值是 {score: 2, name: 'Jeff'}

// 使用对象展开语法，就可以写成：
// var newPlayer = {...player, score: 2};