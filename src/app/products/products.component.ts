import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {Product} from "../Models/Product.model";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  public products:any;
  public keywoard='';

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
   this.http.get("http://localhost:7511/products").subscribe(
      {
        next: (data) => {
          this.products = data;
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      }
  );
}
  searchProduct(keywoard:string) {
    return this.http.get("http://localhost:7511/products?name_like="+keywoard).subscribe(
      {
        next:(data)=>{this.products=data},
        error: err => {console.log(err)}
      }
    )
  }
}
