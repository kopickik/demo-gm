# Angular / REST API Demo

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development
1. Run `npm install` to install project dependencies.
2. Run `bower install` to install client dependencies.
3. Copy `.env.json.defaults` to `.env.json`.
3. Run `mkdir data/db` in the root of this app.
4. Run `mongod --dbpath ./data/db` in one terminal window to start the database.
    *Unable to run mongod locally*?  [Email me](mailto:spoonfedweb+ghrmtrap@gmail.com) and request cloud database credentials.
    Or, create a cluster yourself at [cloud.mongodb.com](https://cloud.mongodb.com) and
    copy your own mongodb connection credentials to `.env.json`.
5. Run `nodemon server.js` to start our express API and kick off the connect web server.
6. In a separate terminal window, run `grunt serve` to wire dependencies, start livereload, and 
    give you a nice seamless development experience.  The app should fire up at `localhost:9000`.

## Testing

Running `grunt test` will run the unit tests with karma. (there are no tests). The grunt serve task will fire up nodemon in debug mode, and you can use a debugger to pause the app while interacting with the API. You can also use a REST testing application, such as Postman.

## Structure

The `Customer` model is derived from a [mongoose](http://mongoosejs.com/docs/api.html) Schema. Backend routes are defined in `routes/`. Angular UI Router routes are defined in `app/scripts/app.js`.

## Validation

The requirements called for validating user inputs. These should trigger from `_form.html`. **Now working!**

## WIP - use at your own peril.

I may end up using $http instead of $resource in the `customersService.js` as $http provides a clearer path to intercepting API errors. I may just need to keep experimenting with the [$resource interceptor](https://docs.angularjs.org/api/ngResource/service/$resource) and try a few more things.

## Tips

To force rebuild your styles while `grunt serve` is churning, just save `main.scss`. The load order for styles can be affected in `index.html`.
