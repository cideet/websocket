/**
 * Created by sf on 2018/1/1.
 */

var Square = function () {
    // 方块数据
    this.data = [
        [0, 2, 0, 0],
        [0, 2, 0, 0],
        [0, 2, 0, 0],
        [0, 2, 0, 0]
    ];

    // 原点
    this.origin = {x: 0, y: 0};
};

// 检测数据是否合法（下移）
Square.prototype.canDown = function (isValid) {
    var test = {};
    test.x = this.origin.x + 1;
    test.y = this.origin.y;
    return isValid(test, this.data);
};

// 下移
Square.prototype.down = function () {
    this.origin.x = this.origin.x + 1;
};

// 检测数据是否合法（左移）
Square.prototype.canLeft = function (isValid) {
    var test = {};
    test.x = this.origin.x;
    test.y = this.origin.y - 1;
    return isValid(test, this.data);
};

// 左移
Square.prototype.left = function () {
    this.origin.y = this.origin.y - 1;
};

// 检测数据是否合法（右移）
Square.prototype.canRight = function (isValid) {
    var test = {};
    test.x = this.origin.x;
    test.y = this.origin.y + 1;
    return isValid(test, this.data);
};

// 右移
Square.prototype.right = function () {
    this.origin.y = this.origin.y + 1;
};