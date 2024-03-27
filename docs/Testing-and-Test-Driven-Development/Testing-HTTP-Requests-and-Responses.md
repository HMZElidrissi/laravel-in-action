---
sidebar_position: 3
---

# Testing HTTP Requests and Responses

Testing HTTP requests and answers is critical for verifying that your Laravel application behaves correctly, especially when dealing with routes, controllers, and middleware.

Laravel provides a strong testing environment for feature tests, allowing you to replicate HTTP queries and validate the results. Let’s get started with HTTP requests and responses in Laravel.

## Writing Feature Tests

Feature tests are used to test the behavior of your application from the user's perspective. They simulate HTTP requests to your application and verify the responses returned by the server.

To create a new feature test class, you can use the `make:test` Artisan command with the `--feature` option. This command will generate a new feature test class in the `tests/Feature` directory.

```bash
php artisan make:test ExampleFeatureTest --feature
```

Here's an example of a simple feature test that verifies the response status code of a route:

```php
// tests/Feature/ExampleFeatureTest.php

namespace Tests\Feature;

use Tests\TestCase;

class ExampleFeatureTest extends TestCase
{
    public function test_example_route_returns_200()
    {
        $response = $this->get('/example-route');

        $response->assertStatus(200);
    }
}
```

### Simulating HTTP Requests

Laravel provides a collection of testing aids in feauture tests to simulate HTTP queries to your site. You can use these testing aids to send GET, POST, PUT, PATCH, DELETE, and other forms of requests to your application.

For example, let's assume you have a simple Laravel route that returns a JSON response:

```php
// routes/web.php
Route::get('/api/users', function ($id) {
    $user = User::find($id);
    return response()->json($user);
});
```

You can test this route using the `get` method in your feature test:

```php
// tests/Feature/UserApiTest.php

namespace Tests\Feature;

use App\Models\User;
use Tests\TestCase;

class UserApiTest extends TestCase
{
    public function test_get_user_by_id()
    {
        $user = User::factory()->create();

        $response = $this->get('/api/users/' . $user->id);

        $response->assertStatus(200)
            ->assertJson([
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ]);
    }
}
```

### Making POST Requests

You can also simulate POST requests in your feature tests to test the behavior of your application when receiving form submissions or API endpoints that require data to be sent in the request body.

```php
Route::post('/api/users', function (Request $request) {
    $data = $request->validate([
        'name' => 'required|string',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|string|min:8',
    ]);
    $user = User::create($data);
    return response()->json($user);
});
```

```php
namespace Tests\Feature;

use App\Models\User;
use Tests\TestCase;

class UserApiTest extends TestCase
{
    public function test_create_user()
    {
        $userData = [
            'name' => 'John Doe',
            'email' => 'john.doe@example.com',
            'password' => 'password123',
        ];

        $response = $this->post('/api/users', $userData);
        $response->assertStatus(201)
            ->assertJson($userData);
    }
}
```

### Verifying Responses

- `assertStatus($code)`: Assert that the response status code matches the given code.
- `assertJson($data)`: Assert that the response contains the given JSON data.
- `assertJsonFragment($data)`: Assert that the response contains the given JSON fragment.
- `assertJsonStructure($structure)`: Assert that the response JSON structure matches the given structure.
- `assertSee($text)`: Assert that the response contains the given text.
- `assertDontSee($text)`: Assert that the response does not contain the given text.

### Testing Middleware

You can also test middleware in your feature tests by adding the middleware to the route definition. This allows you to simulate requests that pass through the middleware and verify the behavior of the middleware.

For example, let's assume you have a middleware that checks if the user is authenticated:

```php
// app/Http/Middleware/Authenticate.php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Authenticate
{
    public function handle(Request $request, Closure $next)
    {
        if (!auth()->check()) {
            return response('Unauthorized', 401);
        }

        return $next($request);
    }
}
```

You can test this middleware by adding it to the route definition and sending a request in your feature test:

```php
Route::get('/api/protected', function () {
    return response('Protected data', 200);
})->middleware('auth');
```

```php
namespace Tests\Feature;

use Tests\TestCase;

class AuthMiddlewareTest extends TestCase
{
    public function test_protected_route_requires_authentication()
    {
        $response = $this->get('/api/protected');

        $response->assertStatus(401);
    }
}
```
