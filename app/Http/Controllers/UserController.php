<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Hash,JWTAuth,Validator;

class UserController extends Controller
{
	private $user;

    public function __construct(User $user){
        $this->user = $user;
    }

	public function postAddUser(Request $request)
	{
		$user = $this->user->create([
          'FullName' => $request->get('FullName'),
          'Email' => $request->get('Email'),
          'password' => Hash::make($request->get('Password'))
        ]);
        
        return response()->json([
            'status'=> 200,
            'message'=> 'Tạo thành công',
            'data'=>$user
        ]);
	}
	public function postLogin(Request $request){
        $ruler = [
            'Email'         =>       'required|max:255| email',
            'Password'      =>       'required | max:255'
        ];
 		$validator=Validator::make($request->all(),$ruler);

 		if ($validator->fails()) {
           return response()->json($validator->errors(), 422);
        }

        $token = null;
        try {
           if (!$token = JWTAuth::attempt(['Email'=>$request->Email, 'password'=>$request->Password, 'IsActive'=>1])) {
            return response()->json(['Msg'=>'Thông tin đăng nhập không chính xác'], 422);
           }
        } catch (JWTAuthException $e) {
            return response()->json(['Không thể tạo token'], 500);
        }
        return response()->json(compact('token'));
    }

    public function Token(Request $request){
        $token = $request->token;
        // $decode = JWTAuth::decode($token);

        try{
            $user = JWTAuth::toUser($token);
            return response()->json($user);
        }catch(JWTAuthException $e){
            return response()->json(['Lỗi'], 500);
        }
    }
}
