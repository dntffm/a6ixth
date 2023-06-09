<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    public function information()
    {
        return Inertia::render('Checkout/Information');
    }
    
    public function paymentdetails()
    {
        return Inertia::render('Checkout/PaymentDetail');
    }

    public function finish()
    {
        return Inertia::render('Checkout/Finish');
    }
}
