<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BaseModel extends Model
{
    protected function make_slug($model, $title)
    {
        return str_slug($title);
    }
}
