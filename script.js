//your JS code here. If required.
// var ageElement= documents.querySelector("#age");
// var nameElement= documents.querySelector("#name");
// var btnElement= documents.querySelector("#btn");

// var age=ageElement.value;
// var name=nameElement.value;

// if(!(age && name)){
// 		alert("please enter a valid details");
		
// 		return;
// }
// 		 const promise = new Promise((resolve, reject) => {
      
//         setTimeout(() => {
			
// 		
	// 		if(age>18){
 //          resolve(`Welcome, ${name}. You can vote.`);
 //        }, 4000);
 //      } else {
 //        reject(`Oh sorry ${name}. You aren't old enough.`);
 //      }
 //    });

 //    function callPromise(){
	// 	return promise;
	// }
	
// }



  const form = document.querySelector('form');
  const ageInput = document.querySelector('#age');
  const nameInput = document.querySelector('#name');
  const btn = document.querySelector('#btn');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!ageInput.value || !nameInput.value) {
      alert('Please enter valid details');
      return;
    }

    const promise = new Promise((resolve, reject) => {
      if (ageInput.value >= 18) {
        setTimeout(() => {
          resolve(`Welcome, ${nameInput.value}. You can vote.`);
        }, 4000);
      } else {
        reject(`Oh sorry ${nameInput.value}. You aren't old enough.`);
      }
    });

    promise
      .then((message) => alert(message))
      .catch((error) => alert(error));
  });