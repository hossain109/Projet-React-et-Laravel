<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class course_feature_seeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('course_feature')->insert([
            ["img"=>'storage/reactlogo.png','title'=>'React A-Z','des'=>'This series provides you A-Z knowledge of React according to React official features'],
            ["img"=>'storage/axiosLaravel.svg','title'=>'AXIOS & LARAVEL','des'=>'Series Cover Axios,whice is a powerful to create ajax request inside laravel project'],
            ["img"=>'storage/ts.png','title'=>'TypeScript','des'=>'This series covers all of basics of Typescript framework focusing on React JS'],
            ["img"=>'storage/laravel.svg','title'=>'LARAVEL PROJECT','des'=>'This series covers website project & shop management project,necessary mini projects'],
        ]);
    }
}
