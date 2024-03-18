---
sidebar_position: 1
---

# Defining Models

In Laravel, you define models by creating a class that extends the `Illuminate\Database\Eloquent\Model` class. Each model is associated with a database table, and by convention, the table name is the pluralized lowercase form of the model name.

To create a new model using the command-line tool:

```
php artisan make:model Post
```

This will generate a **`Post`** model class file in the **`app`** directory. You can then open the generated model file and customize it as needed, including specifying the **`$fillable`** and other properties.

```php
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ['title', 'content'];
}
```

> **Note:** If the table name doesn't follow the convention of pluralizing the model name, you can specify it explicitly in the model:
> 
> 
> ```php
> protected $table = 'my_custom_table';
> ```
> 

### **Model Fields**

***Model Fields*** in Laravel are attributes that define the structure of a database table within an Eloquent model. 

Eloquent supports a variety of field types, such as:

- **`$primaryKey`**: Specifies the primary key field of the table.
- **`$fillable`**: Specifies which fields can be mass assigned using the **`create()`** method.
- **`$guarded`**: Specifies fields that are not mass assignable.
- **`$timestamps`**: Indicates whether the model should automatically manage the `created_at` and `updated_at` fields.
- **`$hidden`**: Specifies fields that should be hidden when the model is serialized to an array or JSON.
- **`$casts`**: Specifies the data types of fields and allows you to cast them to native PHP types.
