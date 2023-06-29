<?php

namespace App\Http\Controllers;

use Auth0\SDK\Auth0;
use Auth0\SDK\Utility\HttpResponse;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Session;

class AuthController
{
    public function login()
    {
        $client = new Client();

        try {
            $response = $client->post('https://dev-8o7tvvfvkg4dnr0d.us.auth0.com/passwordless/start', [
                'headers' => [
                    'Content-Type' => 'application/json',
                ],
                'json' => [
                    'client_id' => 'umlULU9rBp210tigwCLFZvKm699Ze4jU',
                    'client_secret' =>  env('AUTH0_CLIENT_SECRET'),
                    'connection' => 'sms',
                    //'email' => request('email'),
                    'phone_number' => request('phone_number'),
                    'send' => 'code',
                ],
            ]);
            
            return redirect()->back()->with('success', true);
        } catch (\Exception $e) {
            throw $e;
        }
    }

    public function exchange()
    {
        
        $client = new Client();

        try {
            $response = $client->request('POST', 'https://dev-8o7tvvfvkg4dnr0d.us.auth0.com/oauth/token', [
                'headers' => [
                    'Content-Type' => 'application/json',
                ],
                'json' => [
                    'grant_type' => 'http://auth0.com/oauth/grant-type/passwordless/otp',
                    'client_id' => 'umlULU9rBp210tigwCLFZvKm699Ze4jU',
                    'client_secret' => env('AUTH0_CLIENT_SECRET'),
                    'username' => request('phone_number'),
                    'otp' => request('code'),
                    'realm' => 'sms',
                    //'audience' => 'your-api-audience',
                    'scope' => 'openid profile email',
                ],
            ]);

            $authResponse = $response->getBody()->getContents();
            
            Session::put('user', $authResponse);

            return redirect()->back()->with('success', true);
        } catch (\Exception $e) {
            return redirect()->back()->withErrors([
                'otp' => true
            ]);
        }
    }

    public function setupName()
    {
        
        $client = new Client();

        try {
            $response = $client->request('POST', 'https://dev-8o7tvvfvkg4dnr0d.us.auth0.com/oauth/token', [
                'headers' => [
                    'Content-Type' => 'application/json',
                ],
                'json' => [
                    'grant_type' => 'http://auth0.com/oauth/grant-type/passwordless/otp',
                    'client_id' => 'umlULU9rBp210tigwCLFZvKm699Ze4jU',
                    'client_secret' => env('AUTH0_CLIENT_SECRET'),
                    'username' => request('phone_number'),
                    'otp' => request('code'),
                    'realm' => 'sms',
                    //'audience' => 'your-api-audience',
                    'scope' => 'openid profile email',
                ],
            ]);

            $authResponse = $response->getBody()->getContents();
            
            Session::put('user', $authResponse);

            return redirect()->back()->with('success', true);
        } catch (\Exception $e) {
            throw $e;
        }
    }

    public function logout()
    {
        Session::put('user', null);
        return redirect()->route('home');
    }

    public function callback()
    {
        

        return redirect(route('discover.index'));
    }
}
