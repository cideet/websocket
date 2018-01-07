/**
 * Created by sf on 2018/1/1.
 */

var Local = function () {
    var game;  //游戏对象
    var INTERVAL = 200;  //时间间隔
    var timer = null;  //定时器

    // 绑定键盘事件
    var bindKeyEvent = function () {
        document.onkeydown = function (e) {
            console.log(e.keyCode);
            if (e.keyCode == 38) {  //up
                game.rotate();
            } else if (e.keyCode == 39) {  //right
                game.right();
            } else if (e.keyCode == 40) {  //down
                game.down();
            } else if (e.keyCode == 37) {  //left
                game.left();
            } else if (e.keyCode == 32) {  //space
                game.fall();
            }
        }
    };

    // 移动
    var move = function () {
        if (!game.down()) {
            game.fixed();  //固定
            game.checkClear();  //消行
            var gameOver = game.checkGameOver();  //检查游戏结束
            if (gameOver) {
                stop();
            } else {
                game.performNext(generateType(), generateDir());  //下一个方块
            }
        }
    };

    // 随机生成一个方块种类
    var generateType = function () {
        return Math.ceil(Math.random() * 7) - 1;  //0-6
    };

    // 随机生成一个旋转次数
    var generateDir = function () {
        return Math.ceil(Math.random() * 4) - 1;  //0-3
    };

    // 开始
    var start = function () {
        var doms = {
            gameDiv: document.getElementById('game'),
            nextDiv: document.getElementById('next')
        };
        game = new Game();
        game.init(doms);
        bindKeyEvent();
        timer = setInterval(move, INTERVAL);
    };

    // 结束
    var stop = function () {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
        document.onkeydown = null;
    };

    // 导出API
    this.start = start;
};