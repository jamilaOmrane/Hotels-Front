import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../services/hotels.service';
import { Hotel } from '../../entities/hotel';

@Component({
  selector: 'ngx-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  hotelsList: Hotel[] = []

  constructor(private hotelService: HotelsService) {
    this.getAllHotels()
  }

  ngOnInit() {
  }

  getAllHotels() {
    this.hotelService.getAllHotels().subscribe(response => {
      this.hotelsList = response.slice(0, 10)
    })
  }


}
