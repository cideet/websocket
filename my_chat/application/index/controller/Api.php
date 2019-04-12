<?php
/**
 * Created by PhpStorm.
 * User: proudkids
 * Date: 2019/4/12
 * Time: 10:50
 */

namespace app\index\controller;
use think\Controller;

class Api extends Controller
{
    public function getAllUser()
    {
        $cates = model('User')->getAllData();
        return json_encode($cates);
    }
}