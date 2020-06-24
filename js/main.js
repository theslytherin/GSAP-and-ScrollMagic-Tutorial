var tlFirstScroll = new TimelineMax();

tlFirstScroll
.set('.iphone-image-wrapper', {scale: 4, transformOrigin:"center top"})
.to('.iphone-image-wrapper', 3, {scale: 2.2, y:'-40%'})
.to('.iphone-image-wrapper', 3, {scale: 1, y:'0%'})

var controller = new ScrollMagic.Controller();

//Scene 1

var scene1 = new ScrollMagic.Scene({
triggerElement : '.trigger1',
triggerHook:0,
duration:"100%"
})

.setTween(tlFirstScroll)
.addIndicators()
.addTo(controller);