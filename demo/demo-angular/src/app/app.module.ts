import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListaComprasComponent } from "./home/lista-compras/lista-compras.component";
import { ListaItemsComponent } from "./home/lista-items/lista-items.component";
import { FormCadastroItemComponent } from "./home/form-cadastro-item/form-cadastro-item.component";

@NgModule({
  declarations: [AppComponent, ListaComprasComponent, ListaItemsComponent, FormCadastroItemComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
