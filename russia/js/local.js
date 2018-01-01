/**
 * Created by sf on 2018/1/1.
 */

var Local = function () {
    var game; // 游戏对象
    // 开始
    var start = function () {
        var doms = {
            gameDiv: document.getElementById('game'),
            nextDiv: document.getElementById('next')
        };
        game = new Game();
        game.init(doms);
    };
    // 导师出API
    this.start = start;
}