$('#showRecipe').on('click', function() {
  $.getJSON('data/recipe_example.json', function (data) {
    console.log(data);
	
	var compiledTemplate = Handlebars.getTemplate('recipe');
	var html = compiledTemplate(data);
	$('#recipesBox').empty();
	$(html).appendTo('#recipesBox');
  });
});
