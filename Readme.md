### HTML
structure been created with html5 semantic elements.
used boostrap grid system and best practices.
localization can be done with angularjs, for example builtin currency filter.

### CSS
css been done with Sass.
used mixins and variables to avoid duplication.

### JavaScript
app build as module can be easily extended or modified.
used di to inject ui.boostrap and ng-router, and mvc for whole app.
decoupled data retrieving to productService.
reused comparingTool controller for two views (desctop/mobile).


desktop and mobile layouts are separated in two partials and require different css files
the switching is done by media queries, but can be implemented with angular routing.