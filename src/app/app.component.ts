import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'TastyRepository';
  isPage1Checked = false;
  isCoverChecked= false; // Variable para el checkbox de page1
  titulo='';

  constructor(private router: Router) {}

  navigateToRecipeList() {
    this.isPage1Checked = true; // Cambia el estado del checkbox
    this.titulo='Explorar Recetas';
    this.router.navigate(['/recipelist']); // Navega a la lista de recetas
  }
  navigateToAddRecipes() {
    this.isPage1Checked = true; // Cambia el estado del checkbox
    this.titulo='Nueva receta';
    this.router.navigate(['/recipeform']); // Navega a la lista de recetas
  }
  navigateToFavoriteRecipes() {
    this.isPage1Checked = true; // Cambia el estado del checkbox
    this.titulo='Mis recetas favoritas';
    this.router.navigate(['/favoriterecipes']); // Navega a la lista de recetas
  }
  toggleCheckbokes() {
    this.isCoverChecked = !this.isCoverChecked;
    if(this.isPage1Checked){
      this.isPage1Checked = false;
    }
  }
}
