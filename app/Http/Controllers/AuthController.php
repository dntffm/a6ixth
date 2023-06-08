<?php

namespace App\Http\Controllers;

use Auth0\SDK\Auth0;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Http;

class AuthController
{
    public function login()
    {
        $client = new Client();

        try {
            /* $response = $client->post('https://dev-8o7tvvfvkg4dnr0d.us.auth0.com/passwordless/start', [
                'headers' => [
                    'Content-Type' => 'application/json',
                ],
                'json' => [
                    'client_id' => 'umlULU9rBp210tigwCLFZvKm699Ze4jU',
                    'client_secret' =>  env('AUTH0_CLIENT_SECRET'),
                    'connection' => 'email',
                    'email' => 'dentamaulan88@gmail.com',
                    'send' => 'link',
                ],
            ]); */
        
            return redirect()->back()->with('success', 'mantap');
        } catch (\Exception $e) {
            echo "Guzzle Error: " . $e->getMessage();
        }
    }

    public function logout()
    {
        $auth0 = new \Auth0\SDK\Auth0([
            'domain' => env('AUTH0_DOMAIN'),
            'clientId' => env('AUTH0_CLIENT_ID'),
            'clientSecret' => env('AUTH0_CLIENT_SECRET'),
            'cookieSecret' => env('APP_KEY')
        ]);
        return redirect($auth0->logout(route('home')));
    }

    public function callback()
    {
        

        return redirect(route('discover.index'));
    }
}
