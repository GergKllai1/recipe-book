import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test for the recipe',
    // tslint:disable-next-line:max-line-length
    'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/enchiladas-aux-legumes-1a1102aa.jpg'),
    new Recipe('Another Test Recipe', 'This is also just a test recipe, but another one!',
    'https://amp.businessinsider.com/images/5a7dc169d03072af008b4bf2-750-562.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
