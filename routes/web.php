<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\GiftController;
use App\Http\Controllers\NotifiedController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SearchController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Landing/Index');
})->name('home');

Route::group(['prefix' => 'discover'], function() {
    Route::get('', [SearchController::class, 'index'])->name('discover.index');
});

Route::group(['prefix' => 'gift'], function() {
    Route::post('redeem', [GiftController::class, 'redeem'])->name('redeem.gift');
    Route::get('', [GiftController::class, 'index'])->name('redeem.index');
});

Route::group(['prefix' => 'notified'], function() {
    Route::get('', [NotifiedController::class, 'index'])->name('get-notified.index');
});

Route::group(['prefix' => 'checkout'], function() {
    Route::get('information', [CheckoutController::class, 'information'])->name('checkout.information');
    Route::get('payment', [CheckoutController::class, 'paymentdetails'])->name('checkout.payment.details');
    Route::get('finish', [CheckoutController::class, 'finish'])->name('checkout.finish');
});



Route::get('/profile', [ProfileController::class, 'index'])
    ->middleware('auth')
    ->name('profile');

Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::get('/logout', [AuthController::class, 'logout'])->name('logout');
Route::get('/callback', [AuthController::class, 'callback'])->name('callback');
Route::get('/signup', [AuthController::class, 'signup'])->name('signup');
