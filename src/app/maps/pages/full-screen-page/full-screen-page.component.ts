import { AfterViewInit, Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

(mapboxgl as any).accessToken = 'pk.eyJ1IjoieW9yMSIsImEiOiJjbHVrb2ZpNDEwcDBxMm1yMGtscm1kZTltIn0.ruVktir9lAmCkWx1z_gSBg';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit {
  ngAfterViewInit(): void {

    const map = new mapboxgl.Map({
      container: 'map', // container ID
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

  }


}
