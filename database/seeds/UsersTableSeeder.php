<?php
# @Author: Onemax <onemax>
# @Date:   2016-12-29T10:57:48+07:00
# @Email:  hotro@onemax.com.vn
# @Project: Onemax
# @Last modified by:   onemax
# @Last modified time: 2016-12-29T11:04:59+07:00
# @Copyright: Onemax.ltd.co

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'LucTuyetKy',
            'email' => 'chidungdekiemtra@gmail.com',
            'password' => Hash::make('password')
        ]);
    }
}
