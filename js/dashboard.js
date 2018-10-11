

$('#my-year').on('change', function (e) {
  //var optionSelected = $("option:selected", this);
  var valueSelected = this.value;
  gYear.barChart(valueSelected);
  
});
