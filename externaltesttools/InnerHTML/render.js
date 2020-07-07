// Here we render text into paragraphs
let render = (template, selector)=> {
    var node = document.querySelector(selector);
    if (!node) return;
    node.innerHTML = template;
};
 
// Here we render text to the lists
let renderList = (selector)=> {
	var list = document.querySelector(selector);
	if (!list) return;
    list.innerHTML = template();
    data.listItems.length=0;
};

let data = {
	listItems: []
};


let template = ()=> {

return  data.listItems.map(function (item) {
    return '<li>' + item + '</li>';
}).join('');

};
