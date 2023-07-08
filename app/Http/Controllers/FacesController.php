<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Validator;

class FacesController extends Controller
{
    public function index() {
        return Inertia::render('Faces/Index');
    }

    public function submitFaces() {
        Validator::make(request()->all(), [
            'email' => ['required']
        ])->validateWithBag('gainAccessFormNull');

        $client = new Client([
            'headers' => [
                'Content-Type' => 'application/json'
            ]
        ]);

        $data = [
            'data' => [
                'Email' => request('email')
            ]
        ];

        $response = $client->post('https://sheetdb.io/api/v1/im0453q0bsllc?sheet=Faces', [
            'body' => json_encode($data),
        ]);

        return redirect()->back();
    }
}
