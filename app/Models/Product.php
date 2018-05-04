<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';
    // public $timestamps = false;
    
    // protected $fillable = [
    //     'first_name',
    //     'surname',
    //     'email',
    //     'password',
    //     'active',
    //     'salt',
    //     'group'
    // ];
    
    protected $guarded = [
        'id'
    ];
    
    // protected $hidden = ['password', 'remember_token'];
}
