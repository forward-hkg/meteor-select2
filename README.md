Select2
===================


Package for [Select2](http://ivaynberg.github.io/select2/)



## How to install

Add package
```
meteor add akora:select2
```

## How to use

Add a specific class in your template for the select element you want to apply Select2 to:

```html
<select class="select2-dropdown" name="state">
  <option value="value1">value1</option>
  <option value="value2">value2</option>
</select>
```


Enable Select2 for the specific class in the .js file of your template:

```javascript
Template.MyTemplate.onRendered(function() {
    // Enable select2
    $('.select2-dropdown').select2();
});
```

See also the [Select2 documentation](https://select2.org/).