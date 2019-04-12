<?php

namespace app\index\model;
use think\Model;

/**
 * Created by PhpStorm.
 * User: proudkids
 * Date: 2019/4/12
 * Time: 10:29
 */
class User extends Model
{
    public function getAllData()
    {
        $a = $this->select();
        return $a;
    }
}