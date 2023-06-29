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
        $products = [];
        
        $productSuggestions = [];
        
        $seriesSuggestions = [];
        
        $suggestions = collect([
            ...$productSuggestions,
            ...$seriesSuggestions
        ]);

        return Inertia::render('Search/Index', [
            'suggestions' => request()->has('search') ? $suggestions : [],
            'products' => $products,
            'product_total' => count($products),
            'search' => request('search')
            // 'user' => $user
        ]);
    }
}
