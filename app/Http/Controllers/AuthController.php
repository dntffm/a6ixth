<?php

namespace App\Http\Controllers;

use Auth0\SDK\Auth0;

class AuthController
{
    public function login()
    {
        
        $auth0 = new \Auth0\SDK\Auth0([
            'domain' => env('AUTH0_DOMAIN'),
            'clientId' => env('AUTH0_CLIENT_ID'),
            'clientSecret' => env('AUTH0_CLIENT_SECRET'),
            'cookieSecret' => env('APP_KEY')
        ]);
        $auth0->clear();
        return redirect($auth0->login(route('callback')));
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
        $auth0 = new \Auth0\SDK\Auth0([
            'domain' => env('AUTH0_DOMAIN'),
            'clientId' => env('AUTH0_CLIENT_ID'),
            'clientSecret' => env('AUTH0_CLIENT_SECRET'),
            'cookieSecret' => env('APP_KEY')
        ]);
        $auth0->exchange(route('home'));

        return redirect(route('discover.index'));
    }
}
