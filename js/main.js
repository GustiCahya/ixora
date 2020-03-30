import '../css/style.scss'
import Typed from '../library/typed.min.js'

//navbar effect
window.addEventListener('scroll', function(){    
    if(this.scrollY > 0){
        document.querySelector('#navbar').classList.add('show-navbar')
    }else{
        document.querySelector('#navbar').classList.remove('show-navbar')
    }
})

//typed effect
var options = {
    stringsElement: '#typed-strings',
    typeSpeed: 40,
    loop: true
}

new Typed('#typed', options)

//slider
import Glide from '@glidejs/glide'

const config = {
    type: 'carousel',
    perView: 1
}
new Glide('.glide', config).mount()