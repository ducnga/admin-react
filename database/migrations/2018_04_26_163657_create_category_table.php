<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categorys', function (Blueprint $table) {
            $table->increments('id');
            $table->string('Name')->nullable();
            $table->string('Alias')->nullable();
            $table->text('Description')->nullable();
            $table->integer('ParentId')->nullable();
            $table->integer('Level')->nullable();
            $table->integer('Idx')->nullable();
            $table->integer('Type')->nullable();
            $table->integer('IsActive')->nullable();
            $table->string('Url')->nullable();
            $table->string('Icon',2083)->nullable();
            $table->string('Img',2083)->nullable();
            $table->string('Banner',2083)->nullable();
            $table->string('MetaTitle',255)->nullable(); // Tiêu đề của Category (Dùng SEO)
            $table->string('MetaDescription',350)->nullable(); // Mô tả của Category (Dùng SEO)
            $table->string('MetaKeyword',255)->nullable(); // Từ khóa của Category (Dùng SEO)
            $table->string('Locale')->default('vi-vn');
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
        Schema::dropIfExists('categorys');
    }
}
