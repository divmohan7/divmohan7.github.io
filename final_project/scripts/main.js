new fullpage('#fullpage', {
    menu: '#timeline',
    navigation: true,
    navigationPosition: 'left',
	lockAnchors: true,
	anchors:['early90s', 'late90s', 'early00s', 'late00s', 'today'],
	autoScrolling:true,
    scrollHorizontally: true,
    verticalCentered: true,
    sectionsColor: ['transparent', 'beige', 'lavender', 'teal', 'transparent'],
    dragAndMove: true,
    fixedElements: ['#moveSectionDown','#moveSectionUp'],
    paddingTop: '50px',
    paddingBottom: '50px',
});
document.querySelector('#moveSectionUp').addEventListener('click', function(e){
    e.preventDefault();
    fullpage_api.moveSectionUp();
});
document.querySelector('#moveSectionDown').addEventListener('click', function(e){
		e.preventDefault();
		fullpage_api.moveSectionDown();
    });
$(document).on('click', '#destroy', function(){
        //default is 700. 
        fullpage_api.destroy('all');
      });