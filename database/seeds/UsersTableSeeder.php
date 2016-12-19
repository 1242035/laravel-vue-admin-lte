<?php
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        \App\User::create([
            'name' => 'Admin',
            'email' => 'email@email.com',
            'password' => Hash::make('password')
        ]);
    }
}
