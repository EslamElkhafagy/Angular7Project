import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
selector :'app-header',
templateUrl:'./header.component.html'
})


export class HeaderComponent{

@Output() viewComponent= new EventEmitter<string>();

onSelect(componantName:string){

this.viewComponent.emit(componantName);
console.log(componantName);

    
}

}