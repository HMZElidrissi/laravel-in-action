---
sidebar_position: 2
---

# Writing Unit Tests with PHPUnit

## Generating a Test Class

To generate a new test class, you can use the `make:test` Artisan command. This command will create a new test class in the `tests/Feature` directory by default. You can specify the `--unit` option to create a unit test class in the `tests/Unit` directory instead.

Here's an example of how to generate a new feature test class:

```bash
php artisan make:test ExampleTest
```

And here's an example of how to generate a new unit test class:

```bash
php artisan make:test ExampleTest --unit
```

## Writing Test Methods

Within your test class, you define test methods that correspond to the units or features you want to test. Each test method should start with the word `test` followed by a descriptive name that explains what the test is doing.

Let's take a simple example of testing a basic math utility class that performs addition and subtraction:

```php title="app/Utils/MathUtils.php"

namespace App\Utils;

class MathUtils
{
    public function add($a, $b)
    {
        return $a + $b;
    }

    public function subtract($a, $b)
    {
        return $a - $b;
    }
}
```

Here's how you can write test methods for this class:

```php title="tests/Unit/MathUtilsTest.php"

namespace Tests\Unit;

use App\Utils\MathUtils;
use Tests\TestCase;

class MathUtilsTest extends TestCase
{
    public function testAdd()
    {
        $mathUtils = new MathUtils();
        $result = $mathUtils->add(2, 3);
        $this->assertEquals(5, $result);
    }

    public function testSubtract()
    {
        $mathUtils = new MathUtils();
        $result = $mathUtils->subtract(5, 3);
        $this->assertEquals(2, $result);
    }
}
```

## Running Tests

To run your tests, you can use the `phpunit` command in the terminal. By default, PHPUnit will run all the tests in the `tests` directory. You can also specify a specific test file or directory to run.

Here's an example of how to run all the tests in the `tests` directory:

```bash
vendor/bin/phpunit
```

And here's an example of how to run a specific test file:

```bash
vendor/bin/phpunit tests/Unit/MathUtilsTest.php
```

Or you can use test Artisan command, which will run all the tests in the `tests` directory. The Artisan command will also display a summary of the test results:

```bash
php artisan test
```

### Tests arguments

1. `--filter`: Filter which tests to run based on their name. (i.e., match the test name with the provided string. and it can be a regular expression.)

```bash
vendor/bin/phpunit --filter testAdd
```

2. `--testsuite`: Run tests from a specific suite.

```bash
vendor/bin/phpunit --testsuite Feature
```

3. `--group`: Run tests that belong to a specific group.

```bash
vendor/bin/phpunit --group slow
```

4. `--exclude-group`: Exclude tests that belong to a specific group.

```bash
vendor/bin/phpunit --exclude-group fast
```

5. `--stop-on-failure`: Stop the test execution on the first failure.

```bash
vendor/bin/phpunit --stop-on-failure
```

6. `--testdox`: Generate test documentation in plain text format.

```bash
vendor/bin/phpunit --testdox
```

7. `--list-groups`: List available test groups.

```bash
vendor/bin/phpunit --list-groups
```

8. `--list-suites`: List available test suites.

```bash
vendor/bin/phpunit --list-suites
```

9. `--list-tests`: List available tests.

```bash
vendor/bin/phpunit --list-tests
```

## Mocking Dependencies

Unit tests should test individual units of code in isolation, which means that they should not rely on external dependencies. If a unit depends on external resources or services, you can use mocking to create fake objects or stubs to simulate the behavior of those dependencies.

In Laravel, you can use the ‘Mockery’ library, which is included by default, to create mock objects. Alternatively, you can use PHPUnit’s built-in mocking features for simpler cases.

Here’s an example of using mocking to test a class that depends on an external service:

```php title="app/Services/WeatherService.php"
class WeatherService
{
    public function getTemperature($city)
    {
        // Call an external API to get the temperature
        // For testing purposes, we'll mock the response
        return 25;
    }
}
```

```php title="app/Utils/WeatherReporter.php"
class WeatherReporter
{
    protected $weatherService;

    public function __construct(WeatherService $weatherService)
    {
        $this->weatherService = $weatherService;
    }

    public function getWeatherReport($city)
    {
        $temperature = $this->weatherService->getTemperature($city);

        if ($temperature > 20) {
            return 'It\'s a hot day!';
        } else {
            return 'It\'s a cold day!';
        }
    }
}
```

```php title="tests/Unit/WeatherReporterTest.php"
use Tests\TestCase;
use App\Services\WeatherService;
use App\Utils\WeatherReporter;
use Mockery;

class WeatherReporterTest extends TestCase
{
    public function testGetWeatherReport()
    {
        $weatherService = Mockery::mock(WeatherService::class);
        $weatherService->shouldReceive('getTemperature')->with('London')->andReturn(25);

        $weatherReporter = new WeatherReporter($weatherService);
        $result = $weatherReporter->getWeatherReport('London');

        $this->assertEquals('It\'s a hot day!', $result);
    }
}
```

In this example, we use Mockery to create a mock object of the `WeatherService` class and define the behavior of the `getTemperature` method. This allows us to test the `WeatherReporter` class in isolation without relying on the actual `WeatherService` implementation.

## Best Practices for Unit Testing

- Test each method in isolation and ensure they return the correct outputs for various inputs.
- Name your test methods descriptively to indicate what they are testing.
- Use PHPUnit assertion methods like `assertEquals`, `assertTrue`, `assertFalse`, etc., to validate the expected results.
- Avoid testing methods or functions that solely contain framework-specific logic (e.g., Eloquent models, controllers, etc.). Instead, focus on testing business logic and utility classes.
- Mock external dependencies or services to focus on the unit being tested.
- Always run your unit tests before deploying your application to ensure that new changes do not break existing functionality.
