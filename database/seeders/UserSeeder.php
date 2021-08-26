<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Manuel Alavazarez',
            'email' => 'admin@admin.com',
            'password' => bcrypt('password'),
            'remember_token' => Str::random(60),
            ]);
    }
}
