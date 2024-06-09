const gallery = document.getElementsByClassName('image_interaction')
const link = document.querySelector('a')
gallery.addEventListener('mouseover',
    function(){
        link.hidden = false
        console.log('mouse');
    }
)


