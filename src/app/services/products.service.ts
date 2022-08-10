import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Iproduct } from '../Models/iproduct';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:any[]=[]
  constructor(private fireStore: FirebaseService) {

    this.fireStore.getproducts().subscribe((products) => {
      let prods: any = [];
      for (let prod of products) {
        prods.push({ id:prod.payload.doc.id,...prod.payload.doc.data()as object })
      }

      this.products = prods;

    });
   }

  getProductsByCategorey(cat: string) {
    if (cat == "all") {
      return this.products
    }
    else {
      return this.products.filter((p) => p.category == cat);;
    }
  }
  getProductsBySellerCode(code:number):Iproduct[]
  {

    return this.products.filter((p) => p.sellerCode == code);

  }






  // addproduct(product:any)
  // {
  //   this.store.collection("Products").add(product);
  // }
}




