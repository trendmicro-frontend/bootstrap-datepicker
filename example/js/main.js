var $datePicker = $("#datepicker-input");
var cd = new Date('2017-05-08');
$datePicker.datepicker({
  format: 'yyyy-mm-dd'
});
$datePicker.datepicker('disable');