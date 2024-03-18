---
sidebar_position: 4
---

# Service Container

The foundation of the Laravel framework is its powerful Service Container. To truly understand the framework, a strong grasp of the container is necessary. However, we should note that an Service Container is simply a convenience mechanism for achieving a software design pattern: **Dependency Injection**. A container is not necessary to perform **dependency injection**, it simply makes the task easier.

Let's look at a simple example:

How to initialize a Service class `UserRepository` for example, to use it inside our Controller?

The most most straightforward way would be:

```php
// UserController.php:
use App\Repositories\UserRepository;

public function store(StoreUserRequest $request) {
    $users = new UserRepository();
    $users->create($request->validated());
}
```

But what if I told you that you don't need to initialize the service with `new UserRepository()`? And maybe you would guess how exactly Service Container could help us?

The answer is this:

```php
public function store(StoreUserRequest $request, UserRepository $users) {
    $userService->create($request->validated());
}
```

With this approach Laravel will automatically create its variable to be used inside the method. And you can do that in any method in your Controllers. More technically we can say it  resolves the `UserRepository` instance from the container and injects it into the constructor.

And also we can we initialize the `UserRepository` for the whole Controller using the constructor:

```php
// UserController.php:
use App\Repositories\UserRepository;

public function __construct(
    protected UserRepository $users,
) {}

public function show(string $id): View
{
    $user = $this->users->find($id);

    return view('user.profile', ['user' => $user]);
}
```

## Using the `app()` function

Without using Dependency Injection, we can access the Service Container (also known as the **IoC container**) through the `app()` function:

```php
$users = app()->make('App\Repositories\UserRepository');
```

This would retrieves an instance of the `UserRepository` from the container.

## Using Facades

We can also use Facades to access services registered in the container. Facades provide a convenient static interface to classes registered in the service container.

```php
use Illuminate\Support\Facades\App;
use App\Repositories\UserRepository;

$userRepository = App::make(UserRepository::class);
// or
$userRepository = App::get(UserRepository::class);
```
