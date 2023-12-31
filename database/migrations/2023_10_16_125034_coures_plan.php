<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('course_plan',function(Blueprint $table){
            $table->bigIncrements('id');
            $table->string('title',1000);
            $table->string('short_des',1000);
            $table->string('key_points',2000);
            $table->string('video',1000);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
