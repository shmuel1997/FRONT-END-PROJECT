import { Routes } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { SelectCategoryComponent } from './select-category/select-category.component';
import { SelectGameComponent } from './select-game/select-game.component';
import { MatchingGameComponent } from './matching-game-module/matching-game/matching-game.component';
import { HelpGameComponent } from './help-game/help-game.component';

export const routes: Routes = [
    {path: "", component: CategoriesListComponent},
    {path: "category/:id", component: CategoryFormComponent},
    {path: "newcategory", component: CategoryFormComponent},
    {path: "selectCategoryComponent", component: SelectCategoryComponent},
    {path: "selectGameComponent", component: SelectGameComponent},
    {path: "matchingGameComponent/:idCategory", component: MatchingGameComponent},
    {path: "helpGameComponent", component: HelpGameComponent},


];
