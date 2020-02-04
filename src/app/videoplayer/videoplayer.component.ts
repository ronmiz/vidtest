import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VideoDataService } from '../service/video-data.service';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoPlayerComponent implements OnInit {
  videoSource:string;
  videoId:string = '4d79041e-f25f-421d-9e5f-3462459b9934'
  textSource:Object;

  constructor(private vidService:VideoDataService) { }

  ngOnInit() {
    this.vidService.getText().subscribe(textData => {
      this.textSource = textData;
      this.textSource = this.sortByKey(this.textSource, 'time');
    })

  this.videoSource = `https://static.chorus.ai/api/${this.videoId}.mp4`
  }
  sortByKey(array, key){
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }
}




