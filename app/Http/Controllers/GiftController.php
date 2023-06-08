<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class GiftController extends Controller
{
    public function index()
    {
        return Inertia::render('Gift/Index');
    }

    public function redeem()
    {
        // $stripe = new \Stripe\StripeClient("sk_test_51MBVjXCvgue6XtiPN3YyuT2SVSZw1iJmLzQzi8PaZh9kKVXOM3DZCoVjkLaaPjlrdcvFp8ZdUSPpBbO5gwkMpMsF00VYVN3qjy");
        return redirect()->back()->withErrors([
            'email' => 'wrong email',
            'code' => 'worng code'
        ]);
        // return redirect(route('redeem.index'));
    }
}
