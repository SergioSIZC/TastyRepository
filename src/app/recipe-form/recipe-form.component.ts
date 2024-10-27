import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Ingrediente {
  nombre    : string;
  cantidad? : number;
  medida    : string;
}
interface Foto {
  url         : string; // URL de la foto
  descripcion?: string; // Descripción opcional
}
interface Receta {
  titulo        : string;
  ingredientes  : Ingrediente[];
  porciones?     : number;
  instrucciones : string;
  duracion?      : number;
  fotos         : Foto[];
}
@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent {
  // Datos receta
  recipeTitle     : string = '';
  ingredientes    : Ingrediente[] = [];
  recipePortions? : number ;
  recipeDuration? : number;
  recipeSteps     : string = '';
  urlFoto         : string | ArrayBuffer | null = null; 
  photos          : Foto[] = [];
  // Datos Ingredientes
  nombre          : string = '';
  cantidad?       : number;
  medida          : string = '';



  agregarIngrediente(){
    if (this.nombre && this.cantidad! > 0 && this.medida) {
      const ingrediente : Ingrediente= {
        nombre: this.nombre,
        cantidad: this.cantidad,
        medida: this.medida
      };
      
      this.ingredientes.push(ingrediente);

      console.log(ingrediente);
      // Limpiar inputs de Ingredientes
      this.nombre = '';
      this.cantidad = undefined;
      this.medida = '';
    }else{
      alert('Debe rellenar todos los campos de Ingredientes')
    }
    
    
  }
  onFileSelected( event :Event){
    const file = (event.target as HTMLInputElement).files?.[0];
    if(file){
      const reader = new FileReader();
      reader.onload = ()=>{
        if(reader.result){
          this.photos.push({url:reader.result.toString()});
        }
      };
      reader.readAsDataURL(file);

      
    }
  }
  agregarReceta(){

    

    const receta : Receta = {
      titulo        : this.recipeTitle,
      ingredientes  : this.ingredientes,
      porciones     : this.recipePortions,
      instrucciones : this.recipeSteps,
      duracion      : this.recipeDuration,
      fotos         : this.photos,
    };

    localStorage.setItem('recetas', JSON.stringify(receta));
    console.log(receta);
  }
}
