import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Ingrediente {
  nombre  : string;
  cantidad: number;
  medida  : string;
}
interface Foto {
  url         : string; // URL de la foto
  descripcion?: string; // Descripción opcional
}
interface Receta {
  titulo        : string;
  ingredientes  : Ingrediente[];
  porciones     : number;
  instrucciones : string;
  duracion      : number;
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
  ingredientes  : Ingrediente[] = [];
  nombre        : string = '';
  cantidad      : number = 0;
  medida        : string = '';

  agregarIngrediente(){
    const ingrediente : Ingrediente= {
      nombre: this.nombre,
      cantidad: this.cantidad,
      medida: this.medida
    };
    
    this.ingredientes.push(ingrediente);
    // Limpiar inputs de Ingredientes
    this.nombre = '';
    this.cantidad = 0;
    this.medida = '';
    // Limpiar inputs de Receta
    console.log(ingrediente);
  }
}
