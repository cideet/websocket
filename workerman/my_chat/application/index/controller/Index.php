<?php

namespace app\index\controller;

class Index extends \think\Controller
{
    public function index()
    {
        $this->assign('username', 'user'.rand());
        return $this->fetch();
    }
}
