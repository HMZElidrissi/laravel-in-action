---
sidebar_position: 5
---

# Laravel Routing

Routing in Laravel refers to defining how incoming HTTP requests should be handled. Routes define the URLs and map them to specific controller actions. For example, you can define a route that maps the `/users` URL to a UserController's index action. Routes provide a clean and expressive way to handle different HTTP methods (`GET`, `POST`, `PUT`, and `DELETE`) and parameters.

Here's an illustration for reference:

```php
Route::get('/users', 'UserController@index');
// OR
Route::get('/users', [UserController::class, 'index']);
```

## Static Routing

Static routing in Laravel is a direct mapping of URLs to specific controller methods. For example:

```php
Route::get('/home', 'HomeController@index');
Route::get('/about', 'AboutController@index');
```

Here, `/home` is linked to the `index` method of `HomeController`, and `/about` to `AboutController`.

## Dynamic Routing

Dynamic routing uses placeholders in URLs to handle variable data, like user IDs in a profile page. An example is:

```php
Route::get('/profile/{user_id}', 'ProfileController@show');
```

`{user_id}` dynamically captures a value from the URL and passes it to `ProfileController`'s `show` method.

## Implementing Static Routing

To set up static routing:

1. Define routes in `routes/web.php`:
    
    ```php
    Route::get('/home', 'HomeController@index');
    Route::get('/about', 'AboutController@index');
    ```
    

> Routes can also return views directly or use callback functions for simpler operations:
> 
> 
> ```jsx
> Route::get('/welcome', function () {
>     return view('welcome');
> });
> ```
> 

## Implementing Dynamic Routing

Dynamic routing setup involves:

1. Defining a dynamic route in `routes/web.php` with placeholders:
    
    ```php
    Route::get('/profile/{user_id}', 'ProfileController@show');
    ```
    
2. Creating a corresponding controller method to handle the dynamic data:
    
    ```php
    public function show($user_id) {
        // Logic to display user profile using $user_id
    }
    ```
    

Both routing types in Laravel facilitate the efficient mapping of URLs to controller methods. Static routing is ideal for fixed URLs, while dynamic routing excels in handling variable URL components.

## Routing to a Single Controller Method

A route can be set up to handle all requests through a single controller method:

```php
Route::any('/single-method', 'SingleMethodController');
```

## Route Parameters

Routes can accept parameters, which are passed to controller methods:

```php
Route::get('/user/{id}', 'UserController@show');
```

## Route Naming

Naming routes simplify referencing them in redirects and URL generation:

```php
Route::get('/user/profile', 'UserProfileController@show')->name('profile');
```

## Route Groups

Grouping routes under a common path or middleware simplifies route management:

```php
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', 'DashboardController@index');
});
```

## **CRUD Routing**

Let's now create CRUD (Create, Read, Update, Delete) routes for managing blog posts:

```php title="routes/web.php"

use App\\Http\\Controllers\\BlogController;

// Show the list of blog posts
Route::get('/posts', [BlogController::class, 'index']);

// Show the form for creating a new blog post
Route::get('/posts/create', [BlogController::class, 'create']);

// Store a newly created blog post
Route::post('/posts', [BlogController::class, 'store']);

// Show a specific blog post
Route::get('/posts/{post}', [BlogController::class, 'show']);

// Show the form for editing a blog post
Route::get('/posts/{post}/edit', [BlogController::class, 'edit']);

// Update a specific blog post
Route::put('/posts/{post}', [BlogController::class, 'update']);

// Delete a specific blog post
Route::delete('/posts/{post}', [BlogController::class, 'destroy'])
```

In the preceding example, we constructed routes for complete CRUD actions on blog posts. These pathways correspond to the actions listed in the following:

- `index`: This function displays a list of all blog posts.
- `create`: Display a form for creating a new blog post.
- `store`: Save the freshly created blog post to the database.
- `show`: Display a certain blog post.
- `edit`: Show a form for editing an existing blog entry.
- `update`: In the database, update an existing blog post.
- `destroy`: Removes a particular blog post from the database.
