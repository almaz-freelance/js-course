'use strict';
class Option{
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createBlock(){
        let item = document.createElement('div');
        document.body.appendChild(item);
        let param = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}; color: white`;
        item.style.cssText = param;
        item.textContent = "title";
    }
}

const item = new Option(200, 400, 'grey', 16, 'center');

item.createBlock();