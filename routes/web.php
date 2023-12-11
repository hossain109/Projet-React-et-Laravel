<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::post('/getCourseFeature',[HomeController::class,'getCourseFeautre']);
Route::get('/getCoursePlan',[HomeController::class,'getCoursePlan']);
Route::get('/getPaymentGuide',[HomeController::class,'getPaymentGuide']);
Route::get('/getMore',[HomeController::class,'getMore']);
Route::get('/getCaurosel',[HomeController::class,'getCaurosel']);
Route::post('/sendData',[HomeController::class,'sendData']);
Route::post('/login',[HomeController::class,'login']);




Route::get('/',function(){
    return view('index');
});
//Route::get('/',[HomeController::class,'home']);

//default react route
Route::get('{reactRoutePath}',function(){
    return view('index');
})->where('reactRoutePath','.*');

