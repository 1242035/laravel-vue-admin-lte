<?php

namespace App;

class Category extends BaseModel
{
    protected $fillable = [
        'name',
        'description'
    ];

    public function contents()
    {
        return $this->hasMany('App\Content');
    }

    public function setSlugAttribute($name)
    {
        $this->attributes['slug'] = $this->make_slug('categories', $name);
    }
}
