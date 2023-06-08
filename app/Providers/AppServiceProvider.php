<?php

namespace App\Providers;

use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use Illuminate\View\View as ViewObject;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        Inertia::share(
                'auth0' , [
                    'auth0_domain' => config('auth0_domain'),
                    'auth0_client_id' => config('auth0_client_id'),
                    'auth0_client_secret' => config('auth0_client_secret'),
                ]
        );
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        View::composer('*', function (ViewObject $view) {
            $view->with('isAuthenticated', !auth()->guest());
        });
    }
}
