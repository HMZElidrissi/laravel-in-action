---
sidebar_position: 6
---

# Using Public Assets in Laravel

In Laravel, serving static assets like images, CSS, and JavaScript files is straightforward. Laravel provides a dedicated `public` directory that you can use to store your public assets. 

Inside this directory, you can create subdirectories like `images`, `css`, `js`, etc., to organize your assets.

### Link to Public Assets

To link to these assets in your Blade templates, you can use the `asset` helper function. This function generates a URL for the asset, taking into account the correct path.

For example, if you want to display the `gipsy_kings.jpg` image in your view, you can use the following code:

```php
<img src="{{ asset('images/gipsy_kings.jpg') }}" alt="Gipsy Kings">
```

In this code, `asset('images/gipsy_kings.jpg')` generates the correct URL for the image.

### Using CSS and JavaScript Files

Similarly, you can link to your CSS and JavaScript files using the `asset` helper function. If you have a CSS file named `styles.css` in the `public/css` directory, you can include it in your Blade template like this:

```php
<link rel="stylesheet" href="{{ asset('css/styles.css') }}">
```

For JavaScript files, the process is the same:

```php
<script src="{{ asset('js/script.js') }}"></script>
```

### Organizing Assets

You can organize your assets into subdirectories under the `public` directory to keep things neat and organized. For example:

- Images: `public/images`
- CSS: `public/css`
- JavaScript: `public/js`
- Fonts: `public/fonts`

### Using Mix (Optional)

Laravel also provides a feature called Mix that simplifies asset compilation and versioning. It's built on top of the webpack asset compiler. Mix allows you to define your assets in a more structured way, use modern JavaScript features, and easily compile and minify your assets.

To use Mix, you can install Laravel Mix using npm and define your asset configuration in the `webpack.mix.js` file located in your project's root directory. You can then use the `mix` helper function in your Blade templates to link to compiled assets.

> 🚧 Using public assets in Laravel is efficient and flexible. By placing your assets in the `public` directory and using the `asset` helper function, you can easily manage and serve static files for your application.
