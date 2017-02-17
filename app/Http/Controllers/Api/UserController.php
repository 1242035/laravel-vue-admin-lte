<?php
# @Author: Onemax <onemax>
# @Date:   2017-02-17T14:53:05+07:00
# @Email:  hotro@onemax.com.vn
# @Project: Onemax
# @Last modified by:   onemax
# @Last modified time: 2017-02-17T15:18:10+07:00
# @Copyright: Onemax.ltd.co


namespace App\Http\Controllers\Api;

class UserController extends BaseController
{
    // path  => GET /users
    public function index()
    {
        $params = request()->all();
        return \App\Models\User::paginate(15);

    }

    // path  => GET /users/create
    public function create()
    {

    }

    // path  => POST /users
    public function store()
    {

    }

    // path  => GET /users/{user}
    public function show()
    {

    }

    // path  => GET /users/{user}/edit
    public function edit()
    {

    }

    // path  => PUT/PATCH /users/{user}
    public function update()
    {

    }

    // path  => DELETE /users/{user}
    public function destroy()
    {

    }
}
