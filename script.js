//your JS code here. If required.
var ageElement= documents.querySelector("#age");
var nameElement= documents.querySelector("#name");
var btnElement= documents.querySelector("#btn");


		 const promise = new Promise((resolve, reject) => {
      
        setTimeout(() => {
			var age=ageElement.value;
		var name=nameElement.value;
		if(!(age && name)){
			alert("please enter a valid details");
		}
			return;
			if(age>18){
          resolve(`Welcome, ${name}. You can vote.`);
        }, 4000);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    });

    function callPromise(){
		return promise;
	}
	
}