<?php

namespace App;

class Group extends BaseModel
{
    protected $fillable = ['name', 'description'];

    public function users()
    {
        return $this->belongsToMany('App\User');
    }
}
