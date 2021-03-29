import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase2',
  templateUrl: './showcase2.component.html',
  styleUrls: ['./showcase2.component.scss']
})
export class Showcase2Component implements OnInit {

  cardDetails = [
    {
      userName: 'Vikash kumar',
      usePicUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      uploadTime: '20 mint ago',
      postImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      title: 'Top Winter Location',
      subTitle: 'More than 200 location',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis fuga quia minus veritatis, nesciunt quibusdam labore optio quidem. Neque commodi quaerat aliquam eius nostrum aut illum nulla sequi dicta porro!',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
