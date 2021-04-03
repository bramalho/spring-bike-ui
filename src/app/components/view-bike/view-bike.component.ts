import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-bike',
  templateUrl: './view-bike.component.html',
  styleUrls: ['./view-bike.component.scss']
})
export class ViewBikeComponent implements OnInit {
  public bike;

  constructor(private bikeService:BikeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getBike(this.route.snapshot.params.id);
  }

  getBike(id: number) {
    this.bikeService.getBike(id).subscribe(
      data => { this.bike = data },
      err => console.log(err),
      () => console.log('Bike loaded')
    );
  }
}
