<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>@yield('title')</title>
</head>

<body>
<div id="root">



    
</div>
    @viteReactRefresh
    {{-- @vite('resources/css/app.css') --}}
    @vite('resources/js/app.js')

</body>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script> 
</html>