---
sidebar_position: 4
---

# Handling API Errors and Exceptions

When building APIs, it's essential to handle errors and exceptions gracefully to provide a good user experience and ensure the security and reliability of your API. 

## Exception Handling

Laravel's exception handling mechanism allows you to catch and handle exceptions that occur during the execution of your application. By default, Laravel provides a `Handler` class located at `app/Exceptions/Handler.php` that contains methods for handling various types of exceptions.

```php
namespace App\Exceptions;
use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Validation\ValidationException;

class Handler extends ExceptionHandler
{
    public function render($request, Exception $exception): JsonResponse
    {
        if ($exception instanceof NotFoundHttpException) {
            return response()->json(['error' => 'Resource not found'], 404);
        }

        if ($exception instanceof ValidationException) {
            return response()->json(['message' => 'Validation error', 'errors' => $exception->errors()], 422);
        }

        return parent::render($request, $exception);
    }
}
```

In the example above, we override the `render` method of the `Handler` class to customize the error responses for `NotFoundHttpException` and `ValidationException`. If a `NotFoundHttpException` occurs, we return a JSON response with a `404` status code and an error message. If a `ValidationException` occurs, we return a JSON response with a `422` status code, a message indicating a validation error, and the validation errors.

## Error Formatting

Laravel allows you to format error responses consistently across your API endpoints. You can define error formats using the `format` method in the `Handler` class.

```php
protected function formatValidationErrors(Validator $validator): array
{
    return [
        'message' => 'Validation error',
        'errors' => $validator->errors(),
    ];
}
```

## Error Responses

When returning error responses from your API, it's important to include relevant information to help clients understand the error and take appropriate action. Here are some common elements to include in error responses:

1. **Status Code**: Use appropriate HTTP status codes to indicate the type of error (e.g., `404` for not found, `422` for validation errors).
2. **Error Message**: Include a descriptive error message that explains the cause of the error.
3. **Error Details**: Provide additional details or error codes to help clients troubleshoot the issue.

```json
{
    "error": {
        "status": 404,
        "message": "Resource not found",
        "details": "The requested resource could not be found."
    }
}
```

