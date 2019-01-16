import 'core-js/shim';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldHigh from "@amcharts/amcharts4-geodata/worldHigh";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {Component, OnInit} from '@angular/core';
import {CountryService} from '../service/country.service';
import {Country} from '../api/country';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  countries: Array<Country>;

  constructor(private countryService: CountryService, private route: ActivatedRoute,) {

  }

  ngOnInit(): void {

    let map = am4core.create("chartdiv", am4maps.MapChart);
    map.geodata = am4geodata_worldHigh;
    //map.projection  = new am4maps.projections.Orthographic
    map.projection = new am4maps.projections.Miller();

    const polygonSeries = new am4maps.MapPolygonSeries();
    polygonSeries.useGeodata = true;
    polygonSeries.exclude = ['AQ'];
    const data = this.route.snapshot.data;
    this.countries = data.countries;
    console.log(this.countries);
    polygonSeries.data = JSON.parse(JSON.stringify(this.countries));
    //polygonSeries.data = this.countries;
    //polygonSeries.data = JSON.parse(JSON.stringify(this.countries));



    map.series.push(polygonSeries);
    // Configure series
    let polygonTemplate = polygonSeries.mapPolygons.template;
    //polygonTemplate.tooltip
    console.log(name);
    polygonTemplate.tooltipText = '{name}: {nameCode} \n Bands \n  {bands} \n Events \n  ';


    // set bands for country
    polygonTemplate.propertyFields.fill = "fill";
    polygonTemplate.fill = am4core.color("#74B266");

// Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#367B25");
  }

}


