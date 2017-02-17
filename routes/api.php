<?php
# @Author: Onemax <onemax>
# @Date:   2016-12-29T10:28:42+07:00
# @Email:  hotro@onemax.com.vn
# @Project: Onemax
# @Last modified by:   onemax
# @Last modified time: 2017-02-17T15:07:29+07:00
# @Copyright: Onemax.ltd.co

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group([], function() {
    Route::resource('/users', 'Api\UserController');
    Route::resource('/media', 'Api\MediaController');
    Route::resource('/posts', 'Api\PostController');
    Route::resource('/comments', 'Api\CommentController');
    Route::resource('/pages', 'Api\PageController');
    Route::resource('/categories', 'Api\CategoryController');
});
