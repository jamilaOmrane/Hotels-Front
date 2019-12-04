import { Component, OnInit, Input } from '@angular/core';
import { HotelsService } from '../../../services/hotels.service'
import { Hotel } from '../../../entities/hotel';

@Component({
  selector: 'ngx-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {

  @Input() hotel: Hotel
  hotelImage: string;

  constructor(private hotelService: HotelsService) {
    this.hotelImage = "camera1.jpg"

  }



  ngOnInit() {
  }

}
