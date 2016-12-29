<?php
# @Author: Onemax <onemax>
# @Date:   2016-12-29T10:28:42+07:00
# @Email:  hotro@onemax.com.vn
# @Project: Onemax
# @Last modified by:   onemax
# @Last modified time: 2016-12-29T11:00:16+07:00
# @Copyright: Onemax.ltd.co


use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
    }
}
