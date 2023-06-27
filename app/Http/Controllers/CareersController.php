<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CareersController extends Controller
{
    public function index() {
        return Inertia::render('Careers/Index');
    }
}
