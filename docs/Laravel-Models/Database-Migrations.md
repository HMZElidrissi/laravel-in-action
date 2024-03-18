---
sidebar_position: 6
---

# Database Migrations

## Creating Migrations

In Laravel, you use migrations to define the structure of your database tables. Migrations allow you to version-control your database schema and collaborate with others.

Example: Creating a migration for the `posts` table.

```
php artisan make:migration create_users_table
```

In the generated migration file, you can define the schema of the `users` table using the Schema builder.

```php
class CreateUsersTable extends Migration {
    public function up() {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamps();
        });
    }
    public function down() {
        Schema::dropIfExists('users');
    }
}
```

## **Running Migrations**

To apply the database schema changes, you run migrations using the `migrate` command:

```
php artisan migrate
```

## Modifying Migrations

As your application evolves, you may need to modify existing migrations or create new ones to update the database schema. However, it’s important to note that modifying a migration file that has already been executed can lead to inconsistencies in the database. In such cases, you should create a new migration to handle the desired changes.

To create a new migration file for modifying an existing table, you can use the `make:migration` command with a descriptive name:

```bash
php artisan make:migration add_role_to_users_table
```

This will generate a new migration file that you can open and define the necessary changes, such as adding a new column to the ‘users’ table:

```php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
class AddRoleToUsersTable extends Migration
{
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('role')->nullable();
        });
    }
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('role');
        });
    }
}
```

In this example, the `up` method adds a new `nullable` ‘role’ column to the ‘users’ table, while the `down` method defines the rollback operation, which drops the ‘role’ column if needed.

Once the new migration is defined, you can run the migrations again using the `migrate` command:

```bash
php artisan migrate
```

This will apply the new migration and update the database schema accordingly.

## Migration Rollback and Refresh

To roll back the last batch of migrations, you can use the `migrate:rollback` command:

```bash
php artisan migrate:rollback
```

If you want to roll back all migrations and then rerun them, you can use the `migrate:refresh` command:

```bash
php artisan migrate:refresh
```
