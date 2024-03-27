---
sidebar_position: 2
---

# Building RESTful APIs with Laravel

RESTful APIs are a popular approach for designing web APIs that follow the principles of Representational State Transfer (REST) architecture. 

## REST architecture

REST is an architectural style that defines a set of constraints for designing networked applications. It stands for Representational State Transfer and was introduced by Roy Fielding in his doctoral dissertation in 2000. RESTful APIs are designed to be stateless, scalable, and easy to consume.

### Key principles of REST

1. **Client-Server Architecture**: RESTful APIs follow a client-server architecture where the client and server are separate entities that communicate over the network. This separation of concerns allows for better scalability and flexibility.
2. **Statelessness**: RESTful APIs are stateless, meaning that each request from the client to the server must contain all the information necessary to process the request. The server does not store any client state between requests, which simplifies the architecture and improves scalability.
3. **Uniform Interface**: RESTful APIs use a uniform interface that defines how clients interact with the server. This interface typically includes standard HTTP methods (GET, POST, PUT, DELETE) and resource identifiers (URLs) to manipulate resources.
4. **Resource-Based**: RESTful APIs are resource-based, meaning that resources (such as users, products, or orders) are represented as URLs. Clients interact with these resources using standard HTTP methods to perform CRUD (Create, Read, Update, Delete) operations.
5. **Representation**: Resources in RESTful APIs are represented in a standard format, such as JSON or XML. Clients can request different representations of a resource by specifying the desired content type in the request headers.

## Resourceful Routing

In Laravel, resourceful routing allows you to define routes for CRUD operations on a resource (e.g., users, products) with a single line of code. Laravel provides a convenient way to define resourceful routes using the `Route::resource()` method.

```php
Route::resource('users', UserController::class);
```

This single line of code will generate the following routes for the `UserController` :

| Verb      | URI                      | Action     |
|-----------|--------------------------|------------|
| `GET`       | `/users`               | `index`    |
| `POST`      | `/users`               | `store`    |
| `GET`       | `/users/{user}`        | `show`     |
| `PUT/PATCH` | `/users/{user}`        | `update`   |
| `DELETE`    | `/users/{user}`        | `destroy`  |

## Controller and Model Setup

When building RESTful APIs with Laravel, you typically create a controller to handle the CRUD operations for a resource. You can generate a new controller using the `php artisan make:controller` command:

You can also create requests along with the controller:

```bash
php artisan make:controller UserController --api --requests --model=User
```

This command will generate a new controller named `UserController` along with the necessary request classes and a model named `User`.

```php
namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    public function store(Request $request)
    {
        $user = User::create($request->all());
        return response()->json($user, 201);
    }

    public function show(User $user)
    {
        return response()->json($user);
    }

    public function update(Request $request, User $user)
    {
        $user->update($request->all());
        return response()->json($user);
    }

    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(null, 204);
    }
}
```

## Route Model Binding

Laravel's route model binding feature allows you to automatically inject model instances into route methods based on the route parameters. This makes it easy to fetch the corresponding model instance without having to manually query the database.

```php
Route::get('/users/{user}', function (User $user) {
    return $user;
});
```

In this example, Laravel will automatically fetch the `User` instance with the specified ID and inject it into the route method. If the user does not exist, Laravel will automatically return a 404 response.

## Request Validation

When building RESTful APIs, it's important to validate the incoming requests to ensure that the data is valid and meets the required criteria. Laravel provides a convenient way to validate requests using form request classes.

```php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;

class CreateUserRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6',
        ];
    }
}
```
