<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class course_plan_seeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('course_plan')->insert([
            ['title'=>'Laravel Course Plan','short_des'=>'About 76% web application runs on PHP.Laravel is the most powerful and popular framework of PHP. 
            This series start from laravel basic and ends with laravel live project.The overall skills gained from this project based courses will prepare you 
            for any type of project development.','key_points'=>'<ul><li>Creatign Api by php react js</li><li>Use of JSON in application</li><li>React requires plugin to project</li><li>React Bootstrap for designing</li></ul>','video'=>'http://codesilicon.com/paidvideos/Laravel/Video/1.mp4']
            ]);
    }
}
