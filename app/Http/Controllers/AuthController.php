<?php

namespace App\Http\Controllers;

use Auth0\SDK\Auth0;
use Auth0\SDK\Utility\HttpResponse;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Session;

class AuthController
{
    public function login()
    {
        $user = DB::connection('mysql')->select('
            select * from users WHERE phone_number = ? LIMIT 1',
            [
                request('phone_number')
            ]
        );

        if(!$user) {
            DB::connection('mysql')->insert('
                INSERT INTO users (name, phone_number, email) VALUE(?, ?, ?)',
                [
                    null,
                    request('phone_number') ?? null,
                    request('email') ?? null,
                ]
            );
        }

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

            $user = DB::connection('mysql')->select('
                select * from users WHERE phone_number = ? LIMIT 1',
                [
                    request('phone_number')
                ]
            );

            if(!$user) {
                Session::put('user.userprof', []);
            }

            Session::put('user.userprof', $user[0]);

            return redirect()->back()->with('success', true);
        } catch (\Exception $e) {
            throw $e;
            /* return redirect()->back()->withErrors([
                'otp' => true
            ]); */
        }
    }

    public function setupName()
    {
        DB::connection('mysql')->update('
            update users set name = ? where phone_number = ?',
            [
                request('name'),
                request('phone_number')
            ]
        );

        $user = DB::connection('mysql')->select('
            select * from users WHERE phone_number = ? LIMIT 1',
            [
                request('phone_number')
            ]
        );

        if(!$user) {
            Session::put('user.userprof', []);
        }

        Session::put('user.userprof', $user[0]);

        $client = new Client([
            'headers' => [
                'Content-Type' => 'application/json'
            ]
        ]);

        $data = [
            'data' => [
                'Name' => request('name') ?? null,
                'Phone number' => request('phone_number') ?? null
            ]
        ];

        $response = $client->post('https://sheetdb.io/api/v1/im0453q0bsllc?sheet=sheet2', [
            'body' => json_encode($data),
        ]);
        return redirect()->back()->with('success', true);
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
