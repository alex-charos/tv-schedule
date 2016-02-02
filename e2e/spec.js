'use strict';
 



describe('Index Tests', function() {
	beforeEach(function(){
		browser.get('http://localhost:9001/');

 

	});



  it('should change the channel selected', function() {
 
    browser.addMockModule('scheduleService', undefined);

    element(by.model('chal')).sendKeys('OTE CINEMA 1');

    element.all(by.repeater('list in chal.listing')).then(function(elements){
      expect(elements.length).toBe(15);
    });
    
  });
 



});  