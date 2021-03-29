import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  cardDetails = [
    {
      userName: 'vivek kumar',
      usePicUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      uploadTime: '20 mint ago',
      postImage: 'assets/challenge1/image1.jpeg',
      title: 'Top Winter Location',
      subTitle: 'More than 200 location',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis fuga quia minus veritatis, nesciunt quibusdam labore optio quidem. Neque commodi quaerat aliquam eius nostrum aut illum nulla sequi dicta porro!',
    },
    {
      userName: 'kunal kumar',
      usePicUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      uploadTime: '20 mint ago',
      postImage: 'assets/challenge1/image2.jpg',
      title: 'Top Winter Location',
      subTitle: 'More than 200 location',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis fuga quia minus veritatis, nesciunt quibusdam labore optio quidem. Neque commodi quaerat aliquam eius nostrum aut illum nulla sequi dicta porro!',
    },
    {
      userName: 'Vikash kumar',
      usePicUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      uploadTime: '20 mint ago',
      postImage: 'assets/challenge1/image3.jpg',
      title: 'Top Winter Location',
      subTitle: 'More than 200 location',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis fuga quia minus veritatis, nesciunt quibusdam labore optio quidem. Neque commodi quaerat aliquam eius nostrum aut illum nulla sequi dicta porro!',
    }, {
      userName: 'Vikash kumar',
      usePicUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      uploadTime: '20 mint ago',
      postImage: 'assets/challenge1/image4.jpg',
      title: 'Top Winter Location',
      subTitle: 'More than 200 location',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis fuga quia minus veritatis, nesciunt quibusdam labore optio quidem. Neque commodi quaerat aliquam eius nostrum aut illum nulla sequi dicta porro!',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
