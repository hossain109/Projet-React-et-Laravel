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
        Schema::create('students',function(Blueprint $table){
            $table->bigIncrements('id');
            $table->string('name',100);
            $table->string('email',100);
            $table->string('password',100);
            $table->string('sendingMobile',100);
            $table->string('confirmaionNumber',100);
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
