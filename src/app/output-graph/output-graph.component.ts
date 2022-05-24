import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HC_exportingdata from 'highcharts/modules/export-data';
HC_exporting(Highcharts);
HC_exportingdata(Highcharts);

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-output-graph',
  templateUrl: './output-graph.component.html',
  styleUrls: ['./output-graph.component.css']
})
export class OutputGraphComponent implements OnInit {
  public options: any = {
    chart: {
      type: 'column',
      styleMode: true
   },
   title: {
      text: 'Historic World Population by Region'
   },
   legend : {
      layout: 'horizontal',
      align: 'left',
      verticalAlign: 'top',
      x: 40,
      y: 10,
      floating: true,
      borderWidth: 1,
     
      backgroundColor: (
         (Highcharts.theme && Highcharts.theme.legend?.backgroundColor) || 
            '#FFFFFF'), shadow: true
   },
   xAxis:{
      categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'], title: {
         text: null
      } 
   },
   yAxis : {
      min: 0,
      title: {
         text: 'Population (millions)',
      },
      labels: {
         overflow: 'justify'
      }
   },
   tooltip : {
      valueSuffix: ' millions'
   },
   plotOptions : {
      column: {
         dataLabels: {
            enabled: true
         }
      },
      series: {
         stacking: 'normal'
      }
   },
   credits:{
      enabled: true
   },
   series: [
      {
         name: 'Year 1800',
         data: [107, 31, 635, 203, 2]
      }, 
      {
         name: 'Year 1900',
         data: [133, 156, 947, 408, 6]
      }, 
      {
         name: 'Year 2008',
         data: [973, 914, 4054, 732, 34]      
      },
      {
         name: 'Average Population By Region',
         type: 'spline',
         data: [404.33, 367, 1878.67, 447.67, 14]
      }
   ],
   exporting : {
      enabled: true,
      showTable: true,
   }
  }
  constructor() { }

  ngOnInit(){
    Highcharts.chart('container', this.options);
  }
}