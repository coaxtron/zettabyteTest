import { PriceDetail, QuestionAsk } from './../typings/challenge2-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase1',
  templateUrl: './showcase1.component.html',
  styleUrls: ['./showcase1.component.scss']
})
export class Showcase1Component implements OnInit {

  public PriceDetails = PriceDetails;
  public questionAsk = questionAsk;

  constructor() { }

  ngOnInit(): void {
  }

}

const PriceDetails: PriceDetail[] = [
  {
    category: 'BASIC',
    save: '',
    price: 4,
    detailsProject: [
      {
        projects:10,
        pages:10,
        mbDiskSpace: 10
      },
    ]
  },
  {
    category: 'BASIC',
    save: '15%',
    price: 4,
    detailsProject: [
      {
        projects:10,
        pages:10,
        mbDiskSpace: 10
      },
    ]
  },
  {
    category: 'BASIC',
    save: '',
    price: 4,
    detailsProject: [
      {
        projects:10,
        pages:10,
        mbDiskSpace: 10
      },
    ]
  }
]

const questionAsk : QuestionAsk[] = [
  {
    question: 'How does free trial work?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia ipsam molestiae quis aliquam at vel eveniet. Eaque, quidem molestiae nemo ipsam harum excepturi nisi similique cumque, voluptates consectetur non.'
  },
  {
    question: 'How does free trial work?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia ipsam molestiae quis aliquam at vel eveniet. Eaque, quidem molestiae nemo ipsam harum excepturi nisi similique cumque, voluptates consectetur non.'
  }
]
