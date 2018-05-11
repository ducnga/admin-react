<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompanyTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company', function (Blueprint $table) {
            $table->increments('id');
            $table->string('Name')->nullable();
            $table->string('Email')->nullable();
            $table->string('Address')->nullable();
            $table->string('Hotline')->nullable();
            $table->string('Phone')->nullable();
            $table->string('TaxCode')->nullable();
            $table->string('Website')->nullable();
            /*----------------------------*/
            $table->string('Facebook')->nullable();
            $table->string('GooglePlus')->nullable();
            $table->string('Youtube')->nullable();
            $table->string('Skype')->nullable();
            $table->string('Zalo')->nullable();
            $table->string('Twitter')->nullable();
            $table->string('Viber')->nullable();
            /*-----------------------------*/
            $table->text('Map')->nullable();
            $table->text('Logo')->nullable();
            /*-----------------------------*/
            $table->text('Analytic')->nullable();
            $table->text('ChatBox')->nullable();
            /*-----------------------------*/
            $table->string('MetaTitle')->nullable();
            $table->string('MetaKeyword',300)->nullable();
            $table->string('MetaDescription',300)->nullable();
            /*-----------------------------*/
            $table->string('ParentId')->nullable();
            $table->string('Locale')->default('vi-vn');
            /*-----------------------------*/

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('company');
    }
}
