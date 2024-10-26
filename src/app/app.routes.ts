import { Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FavoriteRecipesComponent } from './favorite-recipes/favorite-recipes.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';

export const routes: Routes = [
    {path: 'recipelist', component: RecipeListComponent},
    {path: 'favoriterecipes', component: FavoriteRecipesComponent},
    {path: 'recipeform', component: RecipeFormComponent}
];
