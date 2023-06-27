<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AutonomyController extends Controller
{
    function index() {
        return Inertia::render('Autonomy/Index');
    }
}
