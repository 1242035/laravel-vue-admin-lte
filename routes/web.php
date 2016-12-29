<?php
# @Author: Onemax <onemax>
# @Date:   2016-12-29T10:50:22+07:00
# @Email:  hotro@onemax.com.vn
# @Project: Onemax
# @Last modified by:   onemax
# @Last modified time: 2016-12-29T11:01:06+07:00
# @Copyright: Onemax.ltd.co


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

Auth::routes();

Route::get('/', 'HomeController@index');
