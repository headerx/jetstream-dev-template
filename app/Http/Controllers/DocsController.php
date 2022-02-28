<?php
namespace App\Http\Controllers;

use File;
use Illuminate\Http\Request;

class DocsController extends Controller
{
    public function index(Request $request, $file = 'index')
    {
        if ($file != 'index') {
            $file = $file . '/index';
        }

        return File::get(public_path() . '/docs/' . $file . '.html');
    }
}
