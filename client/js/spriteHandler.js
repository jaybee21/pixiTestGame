//create prototype object
var spriteHandler = function(){
    this.info = "Sprite Master Object!!";
};

//Reference collection of all gamesprites
spriteHandler.prototype.spriteList = [];
spriteHandler.prototype.issuedIds = 0;


/**
*    This method checks all sprites for any particular task
*    @param {function} method - An object method based actions to take
*    @return {bool} - true if items in the sprite List have been traversed
*/
spriteHandler.prototype.spriteTraverse = function(method = false) {
    var sprNum = this.spriteList.length;
    var canTraverse = sprNum > 0;
    var useMethod = method && typeof method === "string";
    /*
    *  Sprite method string keys are: "init", "create", "update",
    */
    var curSpr;

    if (canTraverse){
        for(var x = 0; x < sprNum; x++){
            curSpr = this.spriteList[x];
            //Evoke an action of the current sprite
            useMethod ? curSpr[method]() : console.log(curSpr);
        }
    }

    return canTraverse;
}


/**
*    This method adds a new sprite to the sprite collection and issues it an ID
*    @param {object} spr - The sprite to be added to collection
*    @return {number} - an id to reference the sprite with
*/
spriteHandler.prototype.initGameSprite = function(spr) {


    //TODO write a better method for issuing ids
    spr.id = this.issuedIds++
    this.spriteList.push(spr);

    return spr.id;
}


var sprMaster = new spriteHandler;
var frosty = new gameObject;
// frosty.update = function() {
//     console.log("its me frosty!!");
// }
