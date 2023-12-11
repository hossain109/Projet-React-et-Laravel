<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class carosel extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('caurosel')->insert([
            ['img'=>"storage/laravellogo.png",'title'=>"Laravel","des"=>'what about laravel',"url"=>'www.hossainmohammad.eu'],
            ['img'=>"storage/androidlogo.png",'title'=>"Android","des"=>'what about adnorid',"url"=>'www.hossainmohammad.eu'],
            ['img'=>"storage/reactlogo.png",'title'=>"React JS","des"=>'what about react',"url"=>'www.hossainmohammad.eu'],
            ['img'=>"storage/reactlogo_native.png",'title'=>"React native","des"=>'what about react native',"url"=>'www.hossainmohammad.eu'],
            ['img'=>"storage/javalogo.png",'title'=>"Java","des"=>'what about java',"url"=>'www.hossainmohammad.eu'],
            ['img'=>"storage/dartlogo.png",'title'=>"Dart","des"=>'what about dart',"url"=>'www.hossainmohammad.eu'],
            ['img'=>"storage/asp.png",'title'=>"Asp","des"=>'what about asp',"url"=>'www.hossainmohammad.eu']
            ]
            );
    }
}
