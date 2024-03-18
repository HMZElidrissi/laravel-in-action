---
sidebar_position: 5
---

# Using Eloquent Collections and Serialization

Eloquent provides powerful features for working with query results as collections and serializing data in various formats. In this section, we will explore how to leverage Eloquent collections and serialization capabilities.

## Eloquent Collections

Eloquent collections are objects that represent sets of Eloquent models returned from queries. Collections provide a variety of useful methods for manipulating and transforming data. Here are some key points:

- Eloquent collections are objects that represent a set of Eloquent models.
- They provide an array-like interface with additional helpful methods.
- Collections can be used to perform operations on query results, such as filtering, mapping, and sorting.

Let’s consider an example to understand the use of Eloquent collections:

```php
$users = User::where('active', true)->get();

// Filter users based on a condition
$activeUsers = $users->filter(function ($user) {
    return $user->age > 18;
});

// Map the users' names to uppercase
$upperCaseNames = $users->map(function ($user) {
    return strtoupper($user->name);
});

// Sort the users by their age in descending order
$sortedUsers = $users->sortByDesc('age');
```

## Serialization

Serialization refers to the process of converting objects or data structures into a format that can be stored or transmitted. Eloquent provides built-in serialization capabilities to convert Eloquent models and collections into JSON or array representations. Here are some key points:

- Eloquent models and collections can be serialized into JSON or arrays.
- Serialization allows you to convert complex Eloquent objects into a simpler format for storage or transmission.

```php
$user = User::find(1);

// Serialize the user model into JSON
$json = $user->toJson();

// Serialize the user model into an array
$array = $user->toArray();
```

- In this example, we retrieve a User model using the `find()` method and serialize it into JSON and an array. The `toJson()` method converts the model into a JSON string, while the `toArray()` method converts the model into an array representation.
- Serialization is particularly useful when you need to pass Eloquent data to APIs, store it in a cache, or send it as a response from your application.
