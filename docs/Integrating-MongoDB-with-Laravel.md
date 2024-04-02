---
sidebar_position: 11
---

# Integrating MongoDB with Laravel

MongoDB is a popular NoSQL database that is known for its flexibility and scalability. In this guide, we will explore how to integrate MongoDB with a Laravel application. 

## Step 1: Install MongoDB

To install MongoDB on your system, follow the official installation guide for your operating system. You can find the installation instructions for various platforms [here](https://docs.mongodb.com/manual/administration/install-community/).

## Step 2: Install the MongoDB PHP Driver

To interact with MongoDB from your Laravel application, you need to install the MongoDB PHP driver. You can install the driver using the following command:

```bash
pecl install mongodb
```

Once the installation is complete, you need to add the following line to your `php.ini` file to enable the MongoDB extension:

```bash
extension=mongodb.so
```

## Step 3: Add Laravel MongoDB Package to Your Project Dependencies

Run the following command to add the Laravel MongoDB dependency to your application:

```bash
composer require mongodb/laravel-mongodb:^4.2
```

## Step 4: Create a MongoDB Deployment

You can create a MongoDB deployment using a cloud-based service like MongoDB Atlas or deploy MongoDB on your local machine. Follow the instructions provided by the MongoDB documentation to set up your MongoDB deployment.

## Step 5: Save your credentials

After you create your database user, save that user's username and password to a safe location for use in an upcoming step.

## Step 6: Create a Connection String

Create a connection string that includes the username, password, and other connection details for your MongoDB deployment. The connection string should look like this:

```bash
mongodb://username:password@hostname:port/database
```

Replace the placeholders with your actual credentials and connection details.

## Step 7: Configure Your MongoDB Connection

1. Set the connection string in the database configuration file (`config/database.php`) of your Laravel application. Add the following configuration to the `connections` array:

```php
'connections' => [
    // highlight-start
  'mongodb' => [
    'driver' => 'mongodb',
    'dsn' => env('DB_URI', '<connection string>'),
    'database' => 'test_database',
  ],
    // highlight-end

// ...
```

2. Set the default database connection in the same file:

```php
'default' => env('DB_CONNECTION', 'mongodb'),
```

3. Add the Laravel MongoDB provider to the list of service providers in the `config/app.php` file:

```php
'providers' => [
    // highlight-start
    MongoDB\Laravel\MongoDBServiceProvider::class,
    // highlight-end
    // ...
```

## Step 8: Edit the model to use Laravel MongoDB

- Replace the `use Illuminate\Database\Eloquent\Model;` with `use MongoDB\Laravel\Eloquent\Model;` in your model file.
- Specify mongodb in the `$connection` field.
- In the User model, replace `use Illuminate\Foundation\Auth\User as Authenticatable;` with `use MongoDB\Laravel\Auth\User as Authenticatable;`.

```php title="app/Models/Movie.php"
<?php
namespace App\Models;
use MongoDB\Laravel\Eloquent\Model;
class Movie extends Model
{
    protected $connection = 'mongodb';
}
```

