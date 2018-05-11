<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $table = 'company';
    public $timestamps = false;
    
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
