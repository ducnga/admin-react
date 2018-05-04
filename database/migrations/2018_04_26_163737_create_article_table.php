<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('article', function (Blueprint $table) {
            $table->increments('id');
            $table->string('Name'); // Tên bài viết
            $table->string('Alias'); // Tên bài viết không dấu (dùng làm link đường dẫn)
            $table->string('Url')->nullable(); // Tên bài viết không dấu (dùng làm link đường dẫn)
            $table->integer('CatId')->nullable(); // Loại bài viết
            $table->tinyInteger('IsHot')->default(0); // Bài viết nổi bật mặc định là 0
            $table->tinyInteger('IsHome')->default(0); // Chọn bài viết hiển thị lên Trang chủ mặc định là 0
            $table->tinyInteger('IsActive')->default(1); // Trạng thái của bài viết mặc định là hiển thị
            $table->integer('Idx'); // Vị trí của bài viết
            $table->string('Img',2083)->nullable(); // Tên hình ảnh kích thước trung bình của bài viết
            $table->text('Tag')->nullable(); // Tag bài viết
            $table->text('ShortContent')->nullable(); // Nội dung ngắn của bài viết
            $table->longText('Content')->nullable(); // Nội dung của bài viết
            $table->integer('CreateBy')->nullable(); // Id của người viết bài
            $table->integer('UpdateBy')->nullable(); // Id của người sửa bài
            $table->string('MetaTitle',255)->nullable(); // Tiêu đề của bài viết (Dùng SEO)
            $table->string('MetaDescription',350)->nullable(); // Mô tả của bài viết (Dùng SEO)
            $table->string('MetaKeyword',255)->nullable(); // Từ khóa của bài viết (Dùng SEO)
            $table->string('Locale')->default('vi-vn'); // Ngôn ngữ của bài viết
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
        Schema::dropIfExists('article');
    }
}
