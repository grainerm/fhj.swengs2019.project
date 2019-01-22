import 'core-js/shim';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldHigh from "@amcharts/amcharts4-geodata/worldHigh";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {Component, OnInit} from '@angular/core';
import {CountryService} from '../service/country.service';
import {Country} from '../api/country';
import {ActivatedRoute} from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';
import {of} from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  band_countries: Array<Country>;
  band_event_countries: Array<Country>;
  event_countries: Array<Country>;

  constructor(private countryService: CountryService, private route: ActivatedRoute,) {

  }

  ngOnInit(): void {

    // array for including the different countries in legend and different series
    var country_ids_bands: string[] = new Array();
    var country_ids_events: string[] = new Array();
    var country_ids_bands_events: string[] = new Array();

    // get it from resolver
    const data = this.route.snapshot.data;
    this.band_countries = data.band_countries;
    this.event_countries = data.event_countries;
    this.band_event_countries = data.event_band_countries;

    // assign id to arrays
    this.band_countries.forEach( function (c) {
      if(!country_ids_bands.includes(c.nameCode)){
        country_ids_bands.push(c.nameCode.toUpperCase());
      }});
    this.band_event_countries.forEach( function (c) {
      if(!country_ids_bands_events.includes(c.nameCode)){
        country_ids_bands_events.push(c.nameCode.toUpperCase());
      }});
    this.event_countries.forEach( function (c) {
      if(!country_ids_events.includes(c.nameCode)){
        country_ids_events.push(c.nameCode.toUpperCase());
      }});
    // for debug
    console.log('band_ids: ' + country_ids_bands);
    console.log('event_ids: ' + country_ids_events);
    console.log('band_event_ids: ' +  country_ids_bands_events);
    //create map
    let map = am4core.create('chartdiv', am4maps.MapChart);
    //global map settings
    map.geodata = am4geodata_worldHigh;
    //map.projection  = new am4maps.projections.Orthographic
    map.projection = new am4maps.projections.Miller();

    /*Bands*/
    const series1 = map.series.push(new am4maps.MapPolygonSeries());
    series1.name = 'Bands';
    series1.useGeodata = true;
    series1.include = country_ids_bands;
    if(this.band_countries.length > 0){
      series1.data = JSON.parse(JSON.stringify(this.band_countries));
    }
    //series1.include = (JSON).parse(this.countries).
    series1.mapPolygons.template.tooltipText = '{name}: {nameCode} \n Bands \n  {bands}';
    series1.mapPolygons.template.fill = am4core.color('#96BDC6');
    series1.fill = am4core.color('#96BDC6');

    /*Events*/
    const series2 = map.series.push(new am4maps.MapPolygonSeries());
    series2.name = 'Events';
    series2.useGeodata = true;
    series2.include = country_ids_events;
    if(this.event_countries.length > 0){
      series2.data = JSON.parse(JSON.stringify(this.event_countries));
    }
    //series1.include = (JSON).parse(this.countries).
    series2.mapPolygons.template.tooltipText = '{name}: {nameCode} \n Events \n  {events}';
    series2.mapPolygons.template.fill = am4core.color('#96BDC6');
    series2.fill = am4core.color('#96BDC6');

    /*Bands and Events*/
    const series3 = map.series.push(new am4maps.MapPolygonSeries());
    series3.name = 'Bands and Events';
    series3.useGeodata = true;
    series3.include = country_ids_bands_events;
    if(this.band_event_countries.length > 0){
      series3.data = JSON.parse(JSON.stringify(this.band_event_countries));
    }
    //series1.include = (JSON).parse(this.countries).
    series3.mapPolygons.template.tooltipText = '{name}: {nameCode} \n Bands \n  {bands} \n Events \n  {events} ';
    series3.mapPolygons.template.fill = am4core.color('#96BDC6');
    series3.fill = am4core.color('#96BDC6');


    /*Without Bands & Events*/
    const series4 = map.series.push(new am4maps.MapPolygonSeries());
    series4.name = 'Other';
    series4.useGeodata = true;
    series4.exclude = ['AQ'].concat(country_ids_bands).concat(country_ids_events).concat(country_ids_bands_events);
    series4.mapPolygons.template.tooltipText = '{name}: {id}';
    series4.mapPolygons.template.fill = am4core.color('#96BDC6');
    series4.fill = am4core.color('#96BDC6');

    // set bands for country
    let polygonTemplate = series1.mapPolygons.template;
    polygonTemplate.fill = am4core.color('#74B266');
    polygonTemplate.propertyFields.fill = 'fill';
// Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create('hover');
    hs.properties.fill = am4core.color('black');



    // legend settings
    map.legend = new am4maps.Legend();
    map.legend.background.fill = am4core.color("#000");
    map.legend.background.fillOpacity = 0.1;
    map.legend.width = 250;
    map.legend.align = "right";
  }
  // https://docs.amcharts.com/3/javascriptmaps/MapData
}


