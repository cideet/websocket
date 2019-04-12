<?php

namespace app\index\controller;

class Index extends \think\Controller
{
    public function index()
    {
        $this->assign('fromid', input('fromid'));
        $this->assign('toid', input('toid'));
        return $this->fetch();
    }


}
