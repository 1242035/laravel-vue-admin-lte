<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// routes for auth
Auth::routes();

Route::get('admin', ['middleware' => ['auth'], function () {
    $user = Auth::user();
    $user = array_except($user, ['created_at', 'updated_at']);
    if (Auth::user()->hasGroup('admin')) {
        $customClaims = ['group' => 'admin'];
        $token = JWTAuth::fromUser($user, $customClaims);
    }
    return view('admin', compact('token'));
}]);

Auth::routes();

Route::get('/home', 'HomeController@index');
