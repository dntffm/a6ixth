<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FacesController extends Controller
{
    public function index() {
        return Inertia::render('Faces/Index');
    }
}
