<?php

Route::get('/authenticate', ['middleware' => ['auth'], function() {
    // this works internaly to the app
    $user = Auth::user();

    try {
        // verify the credentials and create a token for the user
        if (! $token = JWTAuth::fromUser($user)) {
            return response()->json(['error' => 'invalid_credentials'], 401);
        }
    }
    catch (JWTException $e) {
        // something went wrong
        return response()->json(['error' => 'could_not_create_token'], 500);
    }
    // if no errors are encountered we can return a JWT
    return response()->json(compact('token'));
}]);

// api for admin pages
Route::group(['prefix' => 'api', 'middleware' => 'jwt.auth'], function()
{
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
