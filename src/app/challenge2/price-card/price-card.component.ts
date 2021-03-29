import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.scss']
})
export class PriceCardComponent implements OnInit {

  @Input() priceDetails: any;


  constructor() { }

  ngOnInit(): void {
  }

  public buyNow() {
    Swal.fire({
      title: 'Thank you',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'success',
      showCancelButton: false,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Ok',
    }).then((result) => {
    })
  }

}
