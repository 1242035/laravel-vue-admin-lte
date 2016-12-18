<?php
use Laravel\Passport\Passport;
// api for admin pages
Route::group(['middleware' => 'auth:api'], function()
{
    Passport::routes();
    Passport::enableImplicitGrant();

    Route::get('contents', 'ContentsController@index');

    Route::get('categories', 'CategoriesController@index');

    Route::get('templates', 'TemplatesController@index');
    // route used by content-create.js
    Route::post('content', 'AdminController@postContent');
    // route used by content-view.js
    Route::get('content/{id}', 'AdminController@getContent');
    // route used by content-settings.js
    Route::put('content/{id}', 'AdminController@updateContent');
    // route used by editor.js
    Route::post('content/{id}', 'AdminController@postEditor');
    // route used by file-manager.js
    Route::post('upload/{id}', 'AdminController@postUpload');
});
