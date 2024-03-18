---
sidebar_position: 3
---

# Example of a Laravel Blade Template

Let's go through an example of creating a Laravel Blade template. We'll create a template that displays user information using variables, loops, conditionals, and filters.

Assuming we have a Laravel application with a controller that retrieves user data and passes it to the view, let's create the necessary files:

### **Step 1: Create a Blade Template**

Create a Blade template named `profile.blade.php` in the `resources/views` directory. This will be the template to display user information.

```php
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>User Profile</title>
</head>
<body>
    <h1>Welcome, {{ $user->name }}!</h1>

    <p>Email: {{ $user->email }}</p>

    @if ($user->is_admin)
        <p>This user is an administrator.</p>
    @else
        <p>This user is not an administrator.</p>
    @endif

    <h2>Posts</h2>
    <ul>
        @foreach ($user->posts as $post)
            <li>{{ $post->title }}</li>
        @endforeach
    </ul>

    <h2>Interests</h2>
    <ul>
        @forelse ($user->interests as $interest)
            <li>{{ $interest | ucfirst }}</li>
        @empty
            <li>No interests found.</li>
        @endforelse
    </ul>
</body>
</html>
```

In this template:

- We use the `{{ $user->name }}` syntax to display the user's name.
- We use the `@if` directive to conditionally display whether the user is an administrator or not.
- We use the `@foreach` directive to loop through the user's posts and display their titles.
- `@forelse` is a directive that works like `@foreach`, but it has a special `@empty` section that is displayed when the array is empty.
- We use the `@forelse` directive to loop through the user's interests and apply the `ucfirst` filter to capitalize the first letter of each interest. If there are no interests, a message is displayed.

### **Step 2: Controller**

Assuming you have a UserController, your method might look like this:

```php
public function showProfile($userId)
{
    $user = User::find($userId);
    return view('profile', ['user' => $user]);
}
```

### **Step 3: Routes**

Define a route that maps to the `showProfile` method of your UserController.

```php
Route::get('/profile/{userId}', 'UserController@showProfile')->name('show-profile');
```

### **Step 4: Use the `url()` Helper**

In your template, you can use the `url()` helper function to generate URLs instead of hardcoding them. For example, instead of:

```php
<a href="/profile/{{ $user->id }}">View Profile</a>
```

You can use:

```php
<a href="{{ url('show-profile', ['userId' => $user->id]) }}">View Profile</a>
```

The `url()` function takes the route name and an array of route parameters.
