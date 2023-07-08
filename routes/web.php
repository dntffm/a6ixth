<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AutonomyController;
use App\Http\Controllers\CareersController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\FacesController;
use App\Http\Controllers\GiftController;
use App\Http\Controllers\NotifiedController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SearchController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
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

Route::group(['prefix' => 'autonomy'], function() {
    Route::get('', [AutonomyController::class, 'index'])->name('autonomy.index');
});

Route::group(['prefix' => 'careers'], function() {
    Route::get('', [CareersController::class, 'index'])->name('careers.index');
});

Route::group(['prefix' => 'contact'], function() {
    Route::get('', [ContactController::class, 'index'])->name('contact.index');
});

Route::group(['prefix' => 'about-us'], function() {
    Route::get('', [AboutController::class, 'index'])->name('about.index');
});

Route::group(['prefix' => 'faces'], function() {
    Route::get('', [FacesController::class, 'index'])->name('faces.index');
    Route::post('sheet', [FacesController::class, 'submitFaces'])->name('faces.submit');
});

Route::post('gain-access', [NotifiedController::class, 'gainAccess'])->name('gain.access');
Route::post('autonomy', [NotifiedController::class, 'submitAutonomy'])->name('autonomy.submit');

Route::get('/profile', [ProfileController::class, 'index'])
    ->middleware('auth')
    ->name('profile');

Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('/exchange', [AuthController::class, 'exchange'])->name('exchange');
Route::post('/account-setup', [AuthController::class, 'setupName'])->name('account.setup');
Route::get('/logout', [AuthController::class, 'logout'])->name('logout');
Route::get('/callback', [AuthController::class, 'callback'])->name('callback');
Route::get('/signup', [AuthController::class, 'signup'])->name('signup');
