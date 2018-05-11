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
Route::post('checkToken', ['as'=>'postLogin','uses' => 'UserController@postCheckToken']);
Route::group(['prefix' => 'company'], function() {
    Route::get('/','CompanyController@index');
    Route::get('/{id}','CompanyController@edit')->where(['id'=>'[0-9]+']);
    Route::post('/info/{id}','CompanyController@updateInfo')->where(['id'=>'[0-9]+']);
});