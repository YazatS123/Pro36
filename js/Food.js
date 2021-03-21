var show = "show"
class Food{
    
    constructor(){
        var foodStock, lastFed;
        this.image = loadImage("images/Milk.png");
    }
    getFoodStock(){
        foodStock = foodStock + 1;
    }
    updateFoodStock(){
        
    }
    deductFood(){

    }
    hide(){
        show = "hide"
    }
    showAgain(){
        show = "show";
    }
    display(x, y){
        if(show === "show"){
        var img = loadImage(this.image);
        Image(img, x, y);
        }
    }
}