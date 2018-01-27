$('#getRecipes').on('click', function() {
  $.getJSON('data/recipes.json', function (data) {
    console.log(data);
	
	var compiledTemplate = Handlebars.getTemplate('tableRecipes');
	var html = compiledTemplate(data);
	$('#recipesBox').empty();
	$(html).appendTo('#recipesBox');
  });
});
