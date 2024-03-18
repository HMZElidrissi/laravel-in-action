---
sidebar_position: 6
---

# Laravel Controllers

Controllers in Laravel are responsible for handling user requests and managing the flow of data in the application. Controllers contain methods, also known as actions, that are invoked when a specific route is accessed. They receive user input, interact with models and services, and return responses to the user. Controllers help separate the logic of an application from the routing layer.

## Basic Controllers

To quickly generate a new controller, you may run the `make:controller` Artisan command. By default, all of the controllers for your application are stored in the `app/Http/Controllers` directory:

```bash
php artisan make:controller UserController
```

Let's take a look at an example of a basic controller. A controller may have any number of public methods which will respond to incoming HTTP requests:

```php
<?php
 
namespace App\Http\Controllers;

class UserController extends Controller {
    public function index() {
        $users = User::all();
        return view('users.index', ['users' => $users]);
    }
}
```

## Single Action Controllers

If a controller action is particularly complex, you might find it convenient to dedicate an entire controller class to that single action. To accomplish this, you may define a single `__invoke` method within the controller:

```php
<?php
 
namespace App\Http\Controllers;
 
class ProvisionServer extends Controller
{
    /**
     * Provision a new web server.
     */
    public function __invoke()
    {
        // ...
    }
}
```

When registering routes for single action controllers, you do not need to specify a controller method. Instead, you may simply pass the name of the controller to the router:

```php
use App\Http\Controllers\ProvisionServer;
 
Route::post('/server', ProvisionServer::class);
```

You may generate an invokable controller by using the `--invokable` option of the `make:controller` Artisan command:

```bash
php artisan make:controller ProvisionServer --invokable
```

## Resource Controllers

If you think of each Eloquent model in your application as a "resource", it is typical to perform the same sets of actions against each resource in your application. For example, imagine your application contains a `Photo` model and a `Movie` model. It is likely that users can create, read, update, or delete these resources.

We can use the `make:controller` Artisan command's `--resource` option to quickly create a controller to handle these actions:

```bash
php artisan make:controller PhotoController --resource
```

This command will generate a controller at `app/Http/Controllers/PhotoController.php`. The controller will contain a method for each of the available resource operations. Next, you may register a resource route that points to the controller:

```php
use App\Http\Controllers\PhotoController;
 
Route::resource('photos', PhotoController::class);
```

### Actions Handled by Resource Controllers

| Verb         | URI                    | Action  | Route Name      |
| ------------ | ---------------------- | ------- | --------------- |
| GET          | `/photos`              | index   | photos.index    |
| GET          | `/photos/create`       | create  | photos.create   |
| POST         | `/photos`              | store   | photos.store    |
| GET          | `/photos/{photo}`      | show    | photos.show     |
| GET          | `/photos/{photo}/edit` | edit    | photos.edit     |
| PUT/PATCH    | `/photos/{photo}`      | update  | photos.update   |
| DELETE       | `/photos/{photo}`      | destroy | photos.destroy  |

