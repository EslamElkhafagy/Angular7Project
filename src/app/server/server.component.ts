import { Component } from '@angular/core';




@Component({
selector:'app-server', // selector to call this component in other html page
templateUrl:'./server.component.html', // to select what is the spacific html for this component 
styleUrls:['./server.component.css'] 
})
export class ServerComponent{


severId : number =4200;
serverStatus :string = 'serverIsOnline'; 

count:number=0;
testArray=['Eslam','Elkhafagy','Ahmed','sasa'];



addName(){
this.count++;
this.testArray.push('newName'+this.count);


}





}   