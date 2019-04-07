/**
 * Created by sf on 2017/12/28.
 */

var local = new Local();
local.start();

var remote = new Remote();
remote.start(2,2);
remote.bindEvents();
