<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function index()
    {
        $products = Product::with(['Items'])->when(request()->has('search'), function($query) {
            $query->where('name', 'LIKE', '%'.request('search').'%')
            ->orWhereHas('Items', function($query) {
                $query->where('name', 'LIKE', '%'.request('search').'%');
            });
        })->get();
        
        $productSuggestions = Product::when(request()->has('search'), function($query) {
            $query->where('name', 'LIKE', '%'.request('search').'%');
        })->take(5)->get();
        
        $seriesSuggestions = ProductItem::when(request()->has('search'), function($query) {
            $query->where('name', 'LIKE', '%'.request('search').'%');
        })->take(5)->get();
        
        $suggestions = collect([
            ...$productSuggestions->toArray(),
            ...$seriesSuggestions->toArray()
        ]);
        
        
        // $user = auth()->user();

        return Inertia::render('Search/Index', [
            'suggestions' => request()->has('search') ? $suggestions : [],
            'products' => $products,
            // 'user' => $user
        ]);
    }
}
