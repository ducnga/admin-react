<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;
use App\Http\Requests\Admin\Company\InfoRequest;
use Validator,File;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return resource_path();
        $item=Company::where(['Locale'=>'vi-vn','ParentId'=>0])->first();
        if ($item) {
            return response()->json(['item'=>$item],200);
        } else {
            return response()->json(['msg'=>'Chưa có dữ liệu'], 422);
        }
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return resource_path();
        $item=Company::where(['Locale'=>'vi-vn','ParentId'=>0])->first();
        if ($item) {
            return response()->json(['item'=>$item],200);
        } else {
            return response()->json(['msg'=>'Chưa có dữ liệu'], 422);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $item=Company::where(['Locale'=>'vi-vn','id'=>$id])->first();
        if ($item) {
            return response()->json(['item'=>$item],200);
        } else {
            return response()->json(['msg'=>'Thông tin không chính xác'], 422);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateInfo(Request $request, $id)
    {
        $ruler=[
            'Name'      =>      'bail|required|max:191',
            'Email'     =>      'bail|required|email|max:191',
            'Address'   =>      'bail|required|max:191',
            'Hotline'   =>      'bail|required|max:191',
            'Phone'     =>      'nullable|max:191',
            'TaxCode'   =>      'nullable|max:191',
            'Website'   =>      'nullable|max:191'
        ];
        $validator=Validator::make($request->all(),$ruler);

        if ($validator->fails()) {
           return response()->json($validator->errors(), 422);
        }
        $item=Company::where(['Locale'=>'vi-vn','id'=>$id])->first();
        if ($item) {
            $item->Name         =    $request->Name;
            $item->Email        =    $request->Email;
            $item->Address      =    $request->Address;
            $item->Hotline      =    $request->Hotline;
            $item->Phone        =    $request->Phone;
            $item->TaxCode      =    $request->TaxCode;
            $item->Website      =    $request->Website;
            if ($item->save()) {
                return response()->json(['item'=>$item], 200);
            } else {
                return response()->json(['msg'=>'Cập nhập thông tin thất bại'], 422);
            }
            
        } else {
             return response()->json(['msg'=>'Thông tin không chính xác'], 422);
        }
    }

    public function updateSocial(Request $request, $id)
    {
        $ruler=[
            'Facebook'          =>      'nullable|max:191',
            'GooglePlus'        =>      'nullable|email|max:191',
            'Youtube'           =>      'nullable|max:191',
            'Twitter'           =>      'nullable|max:191',
            'Zalo'              =>      'nullable|max:191',
            'Viber'             =>      'nullable|max:191',
            'Skype'             =>      'nullable|max:191'
        ];
        $validator=Validator::make($request->all(),$ruler);

        if ($validator->fails()) {
           return response()->json($validator->errors(), 422);
        }
        $item=Company::where(['Locale'=>'vi-vn','id'=>$id])->first();
        if ($item) {
            $item->Facebook         =    $request->Facebook;
            $item->GooglePlus        =    $request->GooglePlus;
            $item->Youtube      =    $request->Youtube;
            $item->Twitter      =    $request->Twitter;
            $item->Zalo        =    $request->Zalo;
            $item->Viber      =    $request->Viber;
            $item->Skype      =    $request->Skype;
            if ($item->save()) {
                return response()->json(['item'=>$item], 200);
            } else {
                return response()->json(['msg'=>'Cập nhập thông tin thất bại'], 422);
            }
            
        } else {
             return response()->json(['msg'=>'Thông tin không chính xác'], 422);
        }
    }

    public function updateSeo(Request $request, $id)
    {
        $ruler=[
            'MetaTitle'        =>      'nullable|max:191',
            'MetaKeyword'      =>      'nullable|max:300',
            'MetalDescription' =>      'nullable|max:300',
        ];
        $validator=Validator::make($request->all(),$ruler);

        if ($validator->fails()) {
           return response()->json($validator->errors(), 422);
        }
        $item=Company::where(['Locale'=>'vi-vn','id'=>$id])->first();
        if ($item) {
            $item->MetaTitle         =    $request->MetaTitle;
            $item->MetaKeyword        =    $request->MetaKeyword;
            $item->MetalDescription      =    $request->MetalDescription;
            if ($item->save()) {
                return response()->json(['item'=>$item], 200);
            } else {
                return response()->json(['msg'=>'Cập nhập thông tin thất bại'], 422);
            }
            
        } else {
             return response()->json(['msg'=>'Thông tin không chính xác'], 422);
        }
    }

    public function updateMap(Request $request, $id)
    {
        $ruler=[
            'Lat'       =>      'nullable|max:191',
            'Lng'       =>      'nullable|max:191'
        ];
        $validator=Validator::make($request->all(),$ruler);

        if ($validator->fails()) {
           return response()->json($validator->errors(), 422);
        }
        $item=Company::where(['Locale'=>'vi-vn','id'=>$id])->first();
        if ($item) {
            $item->Map         =    json_decode([
                                                'Lat'=>$request->Lat,
                                                'Lng'=>$request->Lng
                                            ]);
            if ($item->save()) {
                return response()->json(['item'=>$item], 200);
            } else {
                return response()->json(['msg'=>'Cập nhập thông tin thất bại'], 422);
            }
            
        } else {
             return response()->json(['msg'=>'Thông tin không chính xác'], 422);
        }
    }

    public function updateLogo(Request $request, $id)
    {
        $ruler=[
            'Logo'       =>      'bail|required|mimes:jpg,png,jpeg|max:3072'
        ];
        $validator=Validator::make($request->all(),$ruler);

        if ($validator->fails()) {
           return response()->json($validator->errors(), 422);
        }
        $logo='';
        $image=$request->file('Logo');
        $file_name=time().'-'.str_slug(str_replace($image->getClientOriginalExtension(),'',$image->getClientOriginalName()));
        $path='upload/company/';
        $logo=$path.$file_name;
        if($request->isCrop=='on'){
            $img = Image::make($image->getRealPath());
            $img->fit(235, 148)->save($logo,100);
        }
        else{
            $image->move(public_path($path),$file_name);
        }
        $item=Company::where(['Locale'=>'vi-vn','id'=>$id])->first();
        if ($item) {
            File::delete($item->Logo);
            $item->Logo         =   $logo;
            if ($item->save()) {
                return response()->json(['item'=>$item], 200);
            } else {
                return response()->json(['msg'=>'Cập nhập thông tin thất bại'], 422);
            }
            
        } else {
             return response()->json(['msg'=>'Thông tin không chính xác'], 422);
        }
    }

    public function updatePlugin(Request $request, $id)
    {
        $ruler=[
            'Analytic'          =>      'nullable|max:5000',
            'ChatBox'           =>      'nullable|max:5000',
        ];
        $validator=Validator::make($request->all(),$ruler);

        if ($validator->fails()) {
           return response()->json($validator->errors(), 422);
        }
        $item=Company::where(['Locale'=>'vi-vn','id'=>$id])->first();
        if ($item) {
            $item->Analytic     =    $request->Analytic;
            $item->ChatBox      =    $request->ChatBox;
            if ($item->save()) {
                return response()->json(['item'=>$item], 200);
            } else {
                return response()->json(['msg'=>'Cập nhập thông tin thất bại'], 422);
            }
            
        } else {
             return response()->json(['msg'=>'Thông tin không chính xác'], 422);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
