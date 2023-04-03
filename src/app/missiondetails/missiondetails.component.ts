import { Component, OnInit, Input } from '@angular/core'; // Import Input from @angular/core
import { ActivatedRoute } from '@angular/router';
import { SpacexService } from '../network/spacexapi.service';
import { Launch } from '../models/mission';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
})
export class MissiondetailsComponent implements OnInit {
  @Input() flightNumber: number | null = null;
  selectedMission: Launch | null = null;

  constructor(
    private route: ActivatedRoute,
    private spacexService: SpacexService
  ) {}

  ngOnInit(): void {
    if (this.flightNumber !== null) {
      this.spacexService
        .getLaunchDetails(this.flightNumber)
        .subscribe((mission) => {
          this.selectedMission = mission;
        });
    }
  }
}