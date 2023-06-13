<?php

namespace App\Http\Controllers;

use App\Models\User;
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
        /* return redirect()->back()->withErrors([
            'email' => 'wrong email',
            'code' => 'worng code'
        ]); */
        /* $user = User::where('email', request('email'));
        $emailExists = $user->exists();
        
        if(!$emailExists) {
            return redirect()->back()->withErrors([
                'email' => 'wrong email'
            ]);
        } */

        // $validCode = explode('-', $user->first()->id)[0] === request('code');
        $validCode = true;
        if(!$validCode) {
            return redirect()->back()->withErrors([
                'code' => 'wrong code'
            ]);
        }

        return redirect(route('redeem.index'));
    }
}
