document.body.onload = function() {
  chrome.storage.sync.get("usermsg", function(items) {
    if (!chrome.runtime.error) {
      console.log(items);
      document.getElementById("message").value = items.usermsg;
    
    }
  });
  chrome.storage.sync.get("userNumber", function(items) {
    if (!chrome.runtime.error) {
      console.log(items);
      document.getElementById("phone").value = items.userNumber;
    }
  });
}


document.addEventListener('DOMContentLoaded',function(){
	var checkPageClick = document.getElementById("dataSave");
	checkPageClick.addEventListener("click", function() {
		
		var usermessage = document.getElementById("message").value;
  		var number = document.getElementById("phone").value;
		chrome.storage.sync.set({ "usermsg" : usermessage }, function() {
		    if (chrome.runtime.error) {
		      console.log("Runtime error.");
		    }
		});
	  chrome.storage.sync.set({ "userNumber" : number }, function() {
	    if (chrome.runtime.error) {
	      console.log("Runtime error.");
	    }
	  });

  		window.close();

	});
});
