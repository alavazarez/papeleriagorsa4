<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Requests\LoginFormRequest;

class UsuariosController extends Controller
{
    
    public function iniciarSesion(LoginFormRequest $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return response()->json('Has iniciado sesion', 200);
        }
        else{
            return response()->json(['errors' => ['login' => ['Los datos que ingresaste son incorrectos']]], 422);
        }

        
    }

    public function logout()
    {
        Auth::logout();
    }
}
