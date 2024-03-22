import { Component } from '@angular/core';
import { Category } from '../../shared/model/category';
import { CategoriesService } from '../services/categories.service';
import { MatCardModule } from '@angular/material/card';
import { NgForOf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Route, Router, RouterModule } from '@angular/router';
import { SelectGameComponent } from '../select-game/select-game.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-select-category',
  standalone: true,
  imports: [MatCardModule,NgForOf,MatButtonModule,RouterModule],
  templateUrl: './select-category.component.html',
  styleUrl: './select-category.component.css'
})



export class SelectCategoryComponent {
  categories:Category[]=[];




constructor(private categoriesService:CategoriesService, private dialogService:MatDialog, private routerService:Router) {
  
}


openSelectGame(category:Category){
  let dialogRef = this.dialogService.open(SelectGameComponent);

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.routerService.navigate(['/matchingGameComponent',category.id])
    }});

}
ngOnInit(){
  this.categories=this.categoriesService.list();
  let today=new Date();
/* this.categories.forEach (category=>{

    
 
let startDate=new Date(today.getFullYear(),today.getMonth(),today.getDate());
 
}) */
}


}


