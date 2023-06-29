<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'user' => function () {
                if(Session::get('user')) {
                    /* $token = json_decode(Session::get('user'))->id_token;
                    $tokenParts = explode(".", $token);  
                    $tokenPayload = base64_decode($tokenParts[1]);
                    $jwtPayload = json_decode($tokenPayload); */

                    return Session::get('user');
                } else {
                    return null;
                }
            },
        ]);
    }
}
