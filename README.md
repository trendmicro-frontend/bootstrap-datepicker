# jQuery Date Picker

jQuery Date Picker is developed base on jQuery plugin ([uxsolutions-bootstrap-datepicker-plugin](https://github.com/uxsolutions/bootstrap-datepicker/blob/master/docs/index.rst)), and adopted the Style Portal.

Demo: https://trendmicro-frontend.github.io/react-table

## Usage
### HTML
```html
<!DOCTYPE html>
<html>
  <head>
    <link href="datepicker.css" media="screen" rel="stylesheet">
  </head>
  <body>
    <input id="datepicker" type="text" class="form-control input-width-xs">
    <script src="datepicker.js"></script>
  </body>
</html>
```

### JavaScript
```javascript
$('#datepicker').datepicker(options);
```

## Dependencies
* [uxsolutions-bootstrap-datepicker-plugin homepage and documentation](http://bootstrap-datepicker.readthedocs.io/en/latest/)
* [Style Portal - Date Picker](http://style-portal.tw.trendnet.org/#/styles/minimalism/1.7.0/f67b16d7-2d35-4c9c-bc5a-02e2824e46c3)


## API

### Properties

#### Table

Name                | Type                              | Default | Description
:---                | :---                              | :------ | :----------
averageColumnsWidth | Boolean                           | true    | Whether average table cell width.
bordered            | Boolean                           | true    | Whether table border is shown.
columns             | Object[]                          | []      | The columns config of table, see table below.
data                | Object[]                          | []      | Data record array to be rendered.
emptyText           | Function                          | () => { return 'No Data'; } | Display text when data is empty.
expandedRowKeys     | String[]                          |         | Current expanded rows keys.
expandedRowRender   | Function(record, key)             |         | Expanded content render function.
footer              | React Node or Function(): React Node|       | Table footer render function.
hoverable           | Boolean                           | true    | Whether use row hover style.
loading             | Boolean                           | false   | Whether table is loading.
maxHeight           | Number                            |         | Table maximum height.
onRowClick          | Function(record, key)             |         | Handle rowClick action.
showHeader          | Boolean                           | true    | Whether table head is shown.
sortable            | Boolean                           | false   | Whether use sortting event at table head.
title               | React Node or Function(): React Node|       | Table title render function.
useFixedHeader      | Boolean                           | false   | Whether table head is fixed.
rowClassName        | Function(record, key):string      |         | Get row's className.
rowKey              | string or Function(record):string | 'key'   | If rowKey is string, `record[rowKey]` will be used as key. If rowKey is function, the return value of `rowKey(record)` will be use as key.

## License
[MIT License (MIT)](http://opensource.org/licenses/MIT)
