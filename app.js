const body = document.querySelector('body');
const btn = document.getElementById('btn');
const signs = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexColor = document.getElementById('hexColor')

btn.addEventListener('click', function(){
    let hex = '#';
        for(let i = 0; i < 6; i++){
            let index = Math.floor(Math.random() * signs.length);
            hex = hex + signs[index];
        }
    body.style.backgroundColor = hex;
    body.style.transition = '1s'
    hexColor.innerHTML = hex;
});

