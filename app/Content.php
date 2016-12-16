<?php

namespace App;

class Content extends BaseModel
{
    protected $guarded = [];
    protected $dates = ['created_at', 'updated_at', 'published_at'];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function category()
    {
        return $this->belongsTo('App\Category');
    }

    public function template()
    {
        return $this->belongsTo('App\Template');
    }

    public function setSlugAttribute($title)
    {
        if(! isset($this->attributes['slug']) || $this->attributes['slug'] != str_slug($title)) {
            $this->attributes['slug'] = $this->make_slug('contents', $title);
        }
    }

}
