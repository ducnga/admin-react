<?php

use Illuminate\Database\Seeder;

class create_user_table extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'Fullname' => 'Admin',
            'Email' => 'admin@gmail.com',
            'Phone' => '123',
            'password' => bcrypt('admin'),
            'CodeUser' => 1,
            'IsActive' => 1,
            'Address' => 1,
            'Social' => 1,
        ]);
    }
}
