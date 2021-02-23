var controller = new ScrollMagic.Controller();

var HelloScene = new ScrollMagic.Scene({
    triggerElement: '.hello',
    
})
.setClassToggle('.hello', 'show')
.addTo(controller)