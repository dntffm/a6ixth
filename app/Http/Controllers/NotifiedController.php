<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class NotifiedController extends Controller
{
    public function index()
    {
        return Inertia::render('Notified/Index');
    }

    public function gainAccess() {
        Validator::make(request()->all(), [
            'name' => ['required'],
            'email' => ['required']
        ])->validateWithBag('gainAccessFormNull');

        $client = new Client([
            'headers' => [
                'Content-Type' => 'application/json'
            ]
        ]);
        
        $data = [
            'data' => [
                'Name' => request('name'),
                'Email' => request('email')
            ]
        ];
        
        $response = $client->post('https://sheetdb.io/api/v1/im0453q0bsllc', [
            'body' => json_encode($data),
        ]);
        
        return redirect()->back();
    }
}
