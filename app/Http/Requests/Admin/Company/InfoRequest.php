<?php

namespace App\Http\Requests\Admin\Company;

use Illuminate\Foundation\Http\FormRequest;
class InfoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'Name'=>'bail|required|max:191',
            'Email'=>'bail|required|email|max:191',
            'Address'=>'bail|required|max:191',
            'Hotline'=>'bail|required|max:191',
            'Phone'=>'nullable|max:191',
            'TaxCode'=>'nullable|max:191',
            'Website'=>'nullable|max:191'
        ];
    }
}
