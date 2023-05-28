<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index()
    {
        $user = [];
        
        return Inertia::render('Profile/Index', [
            'user' => $user
        ]);
    }
}
