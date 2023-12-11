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
       Schema::create('caurosel',function(Blueprint $table){
        $table->bigIncrements('id');
        $table->string('img',1000);
        $table->string('title',1000);
        $table->string('des',1000);
        $table->string('url',500);
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
