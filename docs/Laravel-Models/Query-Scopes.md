---
sidebar_position: 4
---

# Query Scopes

Query scopes are a powerful tool in Eloquent that allows you to define reusable query constraints. Scopes enable you to encapsulate commonly used query conditions into methods, improving code organization and reusability. They help keep your code **DRY (Don’t Repeat Yourself )** and make it easier to maintain.

**Key points:**

- Query scopes allow you to define reusable query constraints.
- They improve code organization and reusability.
- Scopes are defined as methods in the model, prefixed with `scope`.

Here’s an example to illustrate query scopes:

Consider a scenario where you frequently need to retrieve only active users from the User model. You can define a scope to encapsulate this condition in the User model:

```php
class User extends Model
{
    public function scopeActive($query)
    {
        return $query->where('active', true);
    }
}
```

With this scope defined, you can easily retrieve active users:

```php
$users = User::active()->get();
```

You can also chain multiple scopes together:

```php
$users = User::active()->orderBy('name')->get();
```
