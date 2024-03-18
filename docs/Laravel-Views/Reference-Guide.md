---
sidebar_position: 5
---

# Reference Guide: Blade Directives

| Directive                | Use Case                                                                                           |
| ------------------------ | -------------------------------------------------------------------------------------------------- |
| @yield('name')           | Used to display the contents of a section. Often used in a layout file to display content from child views. |
| @section('name')         | Starts a section of content. This is usually used in a child view to define content for a @yield in the layout. |
| @endsection              | Ends a @section block.                                                                             |
| @extends('name')         | Indicates that the view uses a layout file.                                                        |
| @include('name')         | Includes another Blade file in the current view. Useful for reusable components.                   |
| @each('item.view', $items, 'item') | Loops through a collection and includes a view for each item. Useful for rendering lists. |
| @if                      | Starts an if statement.                                                                            |
| @elseif                  | Adds an else-if statement in an if block.                                                          |
| @else                    | Adds an else statement in an if block.                                                              |
| @endif                   | Ends an if block.                                                                                  |
| @foreach                 | Starts a foreach loop. Useful for iterating over arrays or collections.                            |
| @endforeach             | Ends a foreach loop.                                                                                |
| @for                     | Starts a for loop.                                                                                 |
| @endfor                  | Ends a for loop.                                                                                   |
| @while                   | Starts a while loop.                                                                               |
| @endwhile                | Ends a while loop.                                                                                 |
| @switch                  | Starts a switch statement.                                                                         |
| @case                    | A case in a switch statement.                                                                      |
| @break                   | Breaks out of a loop or switch.                                                                    |
| @default                 | The default case in a switch statement.                                                            |
| @endswitch               | Ends a switch block.                                                                               |
| @php                     | Starts a block of raw PHP code.                                                                    |
| @endphp                  | Ends a block of raw PHP code.                                                                      |
| @csrf                    | Outputs a CSRF token field in a form. Mandatory for POST forms in Laravel.                         |
| @method('PUT')           | Spoofs form methods other than GET/POST (e.g., PUT, PATCH, DELETE).                                |
| @error('name')           | Used to display an error message for a specific form field.                                         |
| @enderror                | Ends an error block.                                                                               |
| @auth                    | Renders content if the user is authenticated.                                                      |
| @endauth                 | Ends an auth block.                                                                                |
| @guest                   | Renders content if the user is a guest (not authenticated).                                        |
| @endguest                | Ends a guest block.                                                                                 |
| @can('permission')       | Checks if the authenticated user has a specific permission.                                         |
| @endcan                  | Ends a permission block.                                                                           |
| @env('environment')      | Checks if the application environment matches the specified one.                                   |
| @endenv                  | Ends an environment check block.                                                                   |
