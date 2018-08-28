window.addEventListener('DOMContentLoaded', function(){

class option {
	constructor(height, width, bg, fontSize, textAlign){
	this.height = height;
	this.width = width;
	this.bg = bg;
	this.fontSize = fontSize;
	this.textAlign = textAlign;
    }
	
	createBlock(){
		 let createDiv = document.createElement('div');
             createDiv.textContent = prompt('Введите информацию в новосозданный элемент div', '');
             createDiv.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
             return document.body.appendChild(createDiv);
	}
}

let getOption = new option('200px', '600px', 'green', '16px', 'center');
    getOption.createBlock();
});