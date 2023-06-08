<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class NotifiedController extends Controller
{
    public function index()
    {
        return Inertia::render('Notified/Index');
    }
}
