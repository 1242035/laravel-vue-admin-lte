/**
* @Author: Onemax <onemax>
* @Date:   2016-12-29T10:28:42+07:00
* @Email:  hotro@onemax.com.vn
* @Project: Onemax
* @Last modified by:   onemax
* @Last modified time: 2016-12-29T13:53:43+07:00
* @Copyright: Onemax.ltd.co
*/

const elixir = require('laravel-elixir');

//require('laravel-elixir-vue-2');
require('laravel-elixir-browserify-official');
require('laravel-elixir-vueify');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.sass('app.scss')
       .browserify('app.js');
});
