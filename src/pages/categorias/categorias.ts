import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaDto } from '../../models/categoria.dto';
import { CategoriaService } from '../../services/domain/categoria.service';
import { API_CONFIG } from '../../config/api.config';

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  items: CategoriaDto[];

  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public categoriaService: CategoriaService) {
  }

  ionViewDidLoad() {
    this.categoriaService.findAll()
    .subscribe(response => {
      this.items = response;
    },
    error => {});
  }
}
