import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    //data:object;
    ngOnChanges():void {
        this.starWidth = this.rating * 86/5;
        console.log('EWntro al puto ');
    }
    @Output() gritar: EventEmitter<string> = new EventEmitter<string>();
    
    lanzarGrito(){
        this.gritar.emit('desde la estrellas '+ this.rating)
    }
}