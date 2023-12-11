<?php

namespace App\Http\Controllers;

use App\Models\Caurosel;
use App\Models\CourseFeatureModel;
use App\Models\CoursePlanModel;
use App\Models\FindMore;
use App\Models\PaymentGuideModel;
use App\Models\StudensModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class HomeController extends Controller
{   //home function
    function home(){
        return view('index');
    }
    //retrive data by model
    function getCourseFeautre(){
      $result = CourseFeatureModel::get();
      return $result;
    }
    //function for course plan
    function getCoursePlan(){
      $result = CoursePlanModel::get();
      return $result;
    }
    //function for payment guide
    function getPaymentGuide(){
      $result = PaymentGuideModel::get();
      return $result;
    }
    //function get more
    function getMore(){
      $result = FindMore::get();
      return $result;
    }
        //function 
        function getCaurosel(){
          $result = Caurosel::get();
          return $result;
        }
  //function data insert into table for registration
  function sendData(Request $request){
      $name =  $request->input('name');
      $email = $request->input('email');
      $password = Hash::make($request->input('password')) ;
      $sendingMobile = $request->input('sendingMobile');
      $confirmaionNumber = $request->input('confirmaionNumber');
      //var_dump($name);die;
      $result = StudensModel::insert(['name'=>$name,'email'=>$email,'password'=>$password,'sendingMobile'=>$sendingMobile,'confirmaionNumber'=>$confirmaionNumber]);
      
      if($result){
        $message = 'data inserted';
      }else {$message = 'data not inserted';}
      return $message;

  }
  //login function
  function login(Request $request){
    $email = $request->input('email');
    $password = $request->input('password');
    //return $email;
    $result = StudensModel::where(['email'=>$email, 'password'=>$password])->select('email','password')->get();
    if(count($result)===1)return 'ok';
    else return 'failed';
  }
}

