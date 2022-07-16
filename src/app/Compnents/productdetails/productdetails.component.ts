import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss'],
})
export class ProductdetailsComponent implements OnInit {
  ArrayOfProducts: any[] = [
    {
      brand: 'Cuff Butterfly',
      category: 'womens-jewellery',
      description:
        'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
      discountPercentage: 17.75,
      images: [
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
      ],
      price: 45,
      rating: 4.59,
      sellerCode: 8,
      stock: 9,
      thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
      title: 'Chain Pin Tassel Earrings',
    },
    {
      brand: 'Cuff Butterfly',
      category: 'womens-jewellery',
      description:
        'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
      discountPercentage: 17.75,
      images: [
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
      ],
      price: 45,
      rating: 4.59,
      sellerCode: 8,
      stock: 9,
      thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
      title: 'Chain Pin Tassel Earrings',
    },
    {
      brand: 'Cuff Butterfly',
      category: 'womens-jewellery',
      description:
        'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
      discountPercentage: 17.75,
      images: [
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
      ],
      price: 45,
      rating: 4.59,
      sellerCode: 8,
      stock: 9,
      thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
      title: 'Chain Pin Tassel Earrings',
    },
    {
      brand: 'Cuff Butterfly',
      category: 'womens-jewellery',
      description:
        'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
      discountPercentage: 17.75,
      images: [
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
      ],
      price: 45,
      rating: 4.59,
      sellerCode: 8,
      stock: 9,
      thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
      title: 'Chain Pin Tassel Earrings',
    },
    {
      brand: 'Cuff Butterfly',
      category: 'womens-jewellery',
      description:
        'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
      discountPercentage: 17.75,
      images: [
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
      ],
      price: 45,
      rating: 4.59,
      sellerCode: 8,
      stock: 9,
      thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
      title: 'Chain Pin Tassel Earrings',
    },
    {
      brand: 'Cuff Butterfly',
      category: 'womens-jewellery',
      description:
        'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
      discountPercentage: 17.75,
      images: [
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
      ],
      price: 45,
      rating: 4.59,
      sellerCode: 8,
      stock: 9,
      thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
      title: 'Chain Pin Tassel Earrings',
    },
    {
      brand: 'Cuff Butterfly',
      category: 'womens-jewellery',
      description:
        'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
      discountPercentage: 17.75,
      images: [
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
      ],
      price: 45,
      rating: 4.59,
      sellerCode: 8,
      stock: 9,
      thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
      title: 'Chain Pin Tassel Earrings',
    },
    {
      brand: 'Cuff Butterfly',
      category: 'womens-jewellery',
      description:
        'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
      discountPercentage: 17.75,
      images: [
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
      ],
      price: 45,
      rating: 4.59,
      sellerCode: 8,
      stock: 9,
      thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
      title: 'Chain Pin Tassel Earrings',
    },
  ];
  constructor(private AllProducts: ProductsService) {}

  ngOnInit(): void {
    
    // this.AllProducts.getproducts().subscribe((ArrayOfProducts) => {
      //   let prods: any = [];
      //   for(let pro of ArrayOfProducts){
      //     prods.push({id:pro.payload.doc.id,...pro.payload.doc.data()as object});
      //   }
  
      //   this.ArrayOfProducts = prods;
      // }
      // );
  }
}
