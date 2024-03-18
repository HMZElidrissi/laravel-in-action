---
sidebar_position: 2
---

# Eloquent Relationships

Eloquent relationships define how different models are related to each other. They allow you to define relationships between models and retrieve related data easily. Eloquent provides several types of relationships, including one-to-one, one-to-many, many-to-one, many-to-many, and polymorphic relationships.

## **Many-to-One Relationship**

In a many-to-one relationship, multiple records from one model are associated with a single record in another model.

Example: A `Comment` belongs to a `Post`.

```php
class Post extends Model
{
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}

class Comment extends Model
{
    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
```

## **Many-to-Many Relationship**

In a many-to-many relationship, records from both models can have multiple connections to each other.

Example: A `Student` can enroll in multiple `Course` instances, and a `Course` can have multiple enrolled `Student` instances.

```php
class Student extends Model
{
    public function courses()
    {
        return $this->belongsToMany(Course::class);
    }
}

class Course extends Model
{
    public function students()
    {
        return $this->belongsToMany(Student::class);
    }
}
```

## **One-to-One Relationship**

In a one-to-one relationship, each record in one model corresponds to exactly one record in another model.

Example: A `Profile` is associated with a single `User`.

```php
class User extends Model
{
    public function profile()
    {
        return $this->hasOne(Profile::class);
    }
}

class Profile extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
```

## **Polymorphic Relationship**

In a polymorphic relationship, a model can belong to more than one other model on a single association.

Example: A `Photo` can belong to either a `Post` or a `User`.

```php
class Photo extends Model
{
    public function imageable()
    {
        return $this->morphTo();
    }
}

class Post extends Model
{
    public function photos()
    {
        return $this->morphMany(Photo::class, 'imageable');
    }
}

class User extends Model
{
    public function photos()
    {
        return $this->morphMany(Photo::class, 'imageable');
    }
}
```

### Using the Relationship

- To attach a photo to a post:

    ```php
    $post = Post::find(1);
    $photo = new Photo(['path' => 'path/to/photo.jpg']);
    $post->photos()->save($photo);
    ```
- To retrieve all photos associated with a post:

    ```php
    $post = Post::find(1);
    $photos = $post->photos;
    ```
