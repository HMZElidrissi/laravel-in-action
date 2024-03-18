---
sidebar_position: 3
---

# Querying the Database with Eloquent

## Retrieving Models

To retrieve models from the database using Eloquent, you can use the `get` method on the model class. This method returns a collection of model instances that match the specified query conditions:

```php
$users = User::get();
```

In this example, the `get` method retrieves all user records from the `users` table and returns them as a collection of `User` model instances.

You can also use various query methods to filter and customize the retrieval process.

For example, you can use the `where` method to add conditions to your query:

```php
$admins = User::where('role', 'admin')->get();
// This query retrieves all user records where the ‘role’ column is set to “admin”
```

## Query Constraints

Eloquent provides a wide range of query constraints to help you retrieve specific data from the database. Some commonly used query constraints include:

- `where`: Adds a basic where clause to the query.
- `orWhere`: Adds an "or" where clause to the query.
- `whereIn`: Adds a where in clause to the query.
- `whereBetween`: Adds a where between clause to the query.
- `orderBy`: Orders the query results by a specified column.
- `limit`: Limits the number of records returned by the query.

```php
$users = User::where('role', 'admin')
             ->orWhere('role', 'editor')
             ->orderBy('created_at', 'desc')
             ->limit(10)
             ->get();
```

## Creating and Updating Models

To create a new model instance and save it to the database, you can use the `create` method:

```php
$user = User::create([
    'name' => 'John Doe',
    'email' => 'john@example.com',
    'password' => bcrypt('password'),
]);
```

To update an existing model, you can retrieve it from the database, modify its attributes, and call the `save` method:

```php
$user = User::find(1);
$user->name = 'Jane Smith';
$user->save();
```

## Deleting Models

To delete a model from the database, you can call the `delete` method on the model instance:

```php
$user = User::find(1);
$user->delete();
```

## **Lazy Loading and Eager Loading**

In Laravel's Eloquent ORM, relationships between database tables are defined using Eloquent models. When querying related data, there are two approaches:

### Eager loading

Eager loading allows you to retrieve the main model along with its related models in a single query. It uses the `with()` method to specify the relationships to be loaded up front, reducing the number of database queries and improving performance:

```php
// Eager loading example
$users = User::with('posts')->get();
```

### Lazy loading

Lazy loading, on the other hand, loads related models only when they are accessed for the first time. It avoids loading unnecessary data but may lead to the N+1 query problem, where additional queries are executed when accessing related data in a loop, causing potential performance issues:

```php
// Lazy loading example
$users = User::all();
foreach ($users as $user) {
    $posts = $user->posts; 
// Lazy loading the 'posts' relationship for each user
}
```

:::tip
📌 The **N+1 query problem** is a common performance issue encountered in relational database systems, particularly in the context of Object-Relational Mapping (ORM) frameworks like Laravel's Eloquent ORM. It occurs when an application executes a query to fetch a collection of objects (typically referred to as the "N" query), and then for each object in that collection, it executes an additional query to fetch related data (the "+1 query").
:::
