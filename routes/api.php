<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('user/add', ['as'=>'postAddUser','uses' => 'UserController@postAddUser']);
Route::post('user/login', ['as'=>'postLogin','uses' => 'UserController@postLogin']);
Route::post('user/token','UserController@Token')->name('token');