---
sidebar_position: 4
---

# Laravel Blade Layouts

Laravel's Blade templating engine also provides a concept of layouts that allow you to define a common structure for your views and reuse them across multiple pages.

Here's how you can achieve similar functionality using Laravel Blade layouts:

## Create a Layout

Create a Blade layout named `app.blade.php` in the `resources/views` directory. This layout will define the common structure of your pages.

```php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="<https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css>">
</head>
<body>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">My App</a>
</nav>

<div class="container">
    @yield('content')
</div>

</body>
</html>
```

In this layout:

- The `@yield('title')` directive will be replaced with the title from child views.
- The `@yield('content')` directive will be replaced with the content from child views.

You can add also:

- `@stack('name')`: This directive is used in a layout file to define a placeholder for content that will be appended from child views. For example, `@stack('scripts')` creates a stack where JavaScript scripts can be added.
- `@push('name')`: This directive is used in child views to add content to a named stack in the layout. For example, using `@push('scripts')` in a child view will append the content enclosed within this directive to the 'scripts' stack in the layout.
- `@endpush`: This directive ends a `@push` block.

## Create a Child View

Create a child view that extends the `app.blade.php` layout. For example, create a view named `home.blade.php`:

```php
@extends('app')

@section('title', 'Home')

@section('content')
    <h1>Welcome to the Home Page</h1>
    <p>This is the content of the home page.</p>
@endsection
```

In this view:

- The `@extends('app')` directive indicates that this view extends the `app.blade.php` layout.
- The `@section('title', 'Home')` directive defines the title for this page.
- The `@section('content')` directive defines the content of this page.
