---
sidebar_position: 2
---

# Blade Directives

Blade directives are special commands that allow you to embed PHP code directly into your Blade templates. They provide a convenient way to execute PHP logic and control the template's structure.

## Variables

### Syntax of a Variable

In Laravel Blade templates, variables are enclosed within double curly braces `{{ }}`.

### Using Variables

You can use variables in Blade templates by passing an associative array of data to the `view()` function when rendering the view.

```php
return view('index', ['variable' => $value]);
```

### Example of Using Variables

Assuming you have a variable `$favorite_book` in your controller, you can use it in the Blade template as follows:

```php
<p>My favorite book is {{ $favorite_book }}</p>
```

## Control Structures

### `@if`, `@elseif`, and `@else` Directives

Laravel Blade templates use `@if`, `@elseif`, and `@else` directives for conditionals. They control the flow of the template based on conditions.

```php
@if ($condition)
    // Content if true
@elseif ($another_condition)
    // Content if another condition is true
@else
    // Content if none of the conditions are true
@endif
```

### `@foreach` Directive

The `@foreach` directive is used for looping over arrays or collections.

```php
@foreach ($array as $item)
    {{ $item }}
@endforeach
```

## Filters

In Laravel Blade templates, you can use filters (also known as directives) to modify variables for display.

### Syntax of Filters

Filters are applied using a pipe `|`.

```php
{{ $variable | filter_name }}
```

### Example of Using Filters

Laravel provides various built-in filters like `str_limit`, `ucfirst`, `lower`, `upper`, etc.

```php
{{ $name | ucfirst }}
```

## Comments

### Syntax of Comments

Comments in Blade templates use double curly braces with an exclamation mark `{{-- --}}`.

### Example of Using Comments

You can add comments to Blade templates to improve code readability.

```php
{{-- This is a comment --}}
```
