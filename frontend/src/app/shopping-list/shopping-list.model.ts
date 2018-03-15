import { Ingredient, RecipeMenuplan } from '../recipe';

export class ShoppingList {
  
  // container for accumulating ingredients
  // Object keys = Ingredient.name
  itemsContainer: {};
  // array of accumulated ingredients
  items: Ingredient[];
  
  constructor(ingredients) {
    this.items = [];
    this.itemsContainer = {};
    for (let i of ingredients) {
  	console.log(i);
  	this.addItem(i);
    }
  }
  
  addItem(ingredient: Ingredient) {
  	if (this.itemsContainer.hasOwnProperty(ingredient.name)) {
  	  console.log('has property')
  	  this.itemsContainer[ingredient.name].quantity += ingredient.quantity;
  	} else {
  	  console.log('has not property')
  	  this.itemsContainer[ingredient.name] = Object.assign( Object.create( Object.getPrototypeOf(ingredient)), ingredient);
  	}
  	this.itemsContainerToItemsArray();
  }
  
  deleteItem(index: number) {
  	this.items.splice(index,1);
  }
  
  itemsContainerToItemsArray() {
  	this.items = [];
  	for (let i in this.itemsContainer) {
  		this.items.push(this.itemsContainer[i]);
  	}
  	// default sort when creating array
	this.items = this.multisort(this.items, ['category', 'name'], ['ASC','ASC']);
  }
  
  // multidimensional sort function, integrated from
  // https://coderwall.com/p/5fu9xw/how-to-sort-multidimensional-array-using-javascript
  multisort(arr, columns, order_by) {
        if(typeof columns == 'undefined') {
            columns = []
            for(let x=0;x<arr[0].length;x++) {
                columns.push(x);
            }
        }

        if(typeof order_by == 'undefined') {
            order_by = []
            for(let x=0;x<arr[0].length;x++) {
                order_by.push('ASC');
            }
        }

        function multisort_recursive(a,b,columns,order_by,index) {  
            var direction = order_by[index] == 'DESC' ? 1 : 0;

            var is_numeric = !isNaN(+a[columns[index]] - +b[columns[index]]);


            var x = is_numeric ? +a[columns[index]] : a[columns[index]].toLowerCase();
            var y = is_numeric ? +b[columns[index]] : b[columns[index]].toLowerCase();



            if(x < y) {
                    return direction == 0 ? -1 : 1;
            }

            if(x == y)  {               
                return columns.length-1 > index ? multisort_recursive(a,b,columns,order_by,index+1) : 0;
            }

            return direction == 0 ? 1 : -1;
        }

        return arr.sort(function (a,b) {
            return multisort_recursive(a,b,columns,order_by,0);
        });
    }
}