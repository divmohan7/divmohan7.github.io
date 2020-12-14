//fullpage js settings to create timeline/anchors

new fullpage('#fullpage', {
    licenseKey: 'null',
    menu: '#timeline',
    navigation: true,
    navigationPosition: 'left',
    anchors:['early-90s', 'late-90s', 'early-00s', 'late-00s', 'present'],
    scrollOverflow: true,
	autoScrolling:true,
    scrollHorizontally: true,
    verticalCentered: true,
    dragAndMove: true,
    fixedElements: ['#moveSectionDown','#moveSectionUp'],
    paddingTop: '50px',
    paddingBottom: '50px',
    fitToSection: true,
    navigationTooltips: ['Home', 'The Early 1990s', 'The Late 1990s', 'The Early 2000s', 'The Late 2000s', 'The Web Today'],
    showActiveTooltip: true,
});

//up and down arrows

document.querySelector('#moveSectionUp').addEventListener('click', function(e){
    e.preventDefault();
    fullpage_api.moveSectionUp();
});
document.querySelector('#moveSectionDown').addEventListener('click', function(e){
		e.preventDefault();
		fullpage_api.moveSectionDown();
    });

//destroy all CSS and JS to leave basic scroll
$(document).on('click', '#destroy', function(){
        //default is 700. 
        fullpage_api.destroy('all');
      });