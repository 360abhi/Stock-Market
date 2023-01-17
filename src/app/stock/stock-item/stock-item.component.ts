import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public stocks: Array<Stock>;
  // public stockClasses: Object ;
  // public stockStyles: Object;

  constructor() {}
   
   ngOnInit() {
    
    // this.stock  = new Stock('Tesla','TSLA',87,80);
    this.stocks=[
      new Stock('Tesla','TSLA',85,80),
      new Stock('Crude Oil','OIL',112,117),
      new Stock('Gold','XAUUSD',85,90),
      new Stock('Silver','XAGUSD',120,90)
    ];
    // let diff = (this.stock.price/this.stock.previousPrice) -1;
    // let largeChange = Math.abs(diff) > 0.05;
    // this.stockClasses = {
    //   "text-green-600" : this.stock.isPositiveChange(),
    //   "text-red-700" : !this.stock.isPositiveChange(),
    //   "text-3xl" : largeChange,
    //   "text-2xl" : !largeChange
    // }
    // this.stockStyles ={
    //   "color" : this.stock.isPositiveChange() ? "green" : "red",
    //   "font-size" : largeChange ? "1.2em" : "0.8em"
    // };
   }

   toggleFavorite(event: Event,index: number){
    console.log("We are toggling the favorite state for this stock", index , event);
    this.stocks[index].favorite = !this.stocks[index].favorite;
    
   }

  
}
