import { Component } from '@angular/core';

import { GaugeSegment } from 'ng-gauge/dist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = {
    indigo: '#14143e',
    pink: '#fd1c49',
    orange: '#ff6e00',
    yellow: '#f0c800',
    mint: '#00efab',
    cyan: '#05d1ff',
    purple: '#841386',
    white: '#fff'
  };

  pieGraph = {
    bgRadius: 100,
    bgColor: this.colors.indigo,
    rounded: false,
    reverse: false,
    animationSecs: 3,
    borderWidth: 100,
    segments: [
      new GaugeSegment({
        value: 4,
        goal: 42,
        color: this.colors.pink
      }),
      new GaugeSegment({
        value: 8,
        goal: 42,
        color: this.colors.orange
      }),
      new GaugeSegment({
        value: 15,
        goal: 42,
        color: this.colors.yellow
      }),
      new GaugeSegment({
        value: 16,
        goal: 42,
        color: this.colors.cyan
      }),
      new GaugeSegment({
        value: 23,
        goal: 42,
        color: this.colors.purple
      }),
      new GaugeSegment({
        value: 42,
        goal: 42,
        color: this.colors.mint
      })
    ]
  };
}
