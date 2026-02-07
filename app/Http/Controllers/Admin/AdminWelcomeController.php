<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;


class AdminWelcomeController extends Controller
{

    public function index()
    {
        $usuarios = User::all();
      
        return Inertia::render(
            'Admin/WelcomeAdmin',
            ["usuarios" => $usuarios]
        );
    }
}
