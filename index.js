
window.addEventListener('load', () => {
    feed.loadImage();
});


const feed = {
    url : 'https://source.unsplash.com/random/',
    loadImage :function (){
    let col = 300;
    for(let i = 0; i < col; i++){
        var body = document.querySelector('.app-body')
        let img = document.createElement('img');
        img.className = 'img';
        img.src = `${this.url}${this.randomSize()}`;
        body.appendChild(img);
    }
    
},
randomSize: function(){
    return `${this.randomNum()}x${this.randomNum()}`
},
randomNum : function(){
    return Math.floor(Math.random() * 10) + 300;
},
}