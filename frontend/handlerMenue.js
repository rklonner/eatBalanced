$('#mainHome').on('click', function() {
  $('#content').empty();
});

$('#mainRecipes').on('click', function() {
  var compiledTemplate = Handlebars.getTemplate('mainRecipes');
  var html = compiledTemplate({});
  $('#content').empty();
  $(html).appendTo('#content');
  
  $('#getRecipes').on('click', function() {
	  $.getJSON('data/recipes.json', function (data) {
		console.log(data);
		var compiledTemplate = Handlebars.getTemplate('tableRecipes');
		var html = compiledTemplate(data);
		$('#recipesBox').empty();
		$(html).appendTo('#recipesBox');
	  });
  });
  
  $('#showRecipe').on('click', function() {
	  $.getJSON('data/recipe_example.json', function (data) {
		console.log(data);
		var compiledTemplate = Handlebars.getTemplate('recipe');
		var html = compiledTemplate(data);
		$('#recipesBox').empty();
		$(html).appendTo('#recipesBox');
	  });
  });
  
});
  
$('#mainShopping').on('click', function() {
  var compiledTemplate = Handlebars.getTemplate('mainShopping');
  var html = compiledTemplate({});
  $('#content').empty();
  $(html).appendTo('#content');
});
  