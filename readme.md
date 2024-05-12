# tupicode todos 
making request of POST and DELETE using fetch 

Notes:
1. todos?_limit20 => makes request to get 20 todos objects (this is functionality given by json placholder api) 

2. dark background means completed: true
  we update it on server and on DOM it gets background to grey by adding a class in javascript

3. we can make a post request by clicking on "add" button and get response back and get on the DOM

4. we can make a delete request by double clicking item ...which delete on server and as well as on the DOM it get deleted 

5.























# Code Notes 

1.  fetch(apiUrl+'?_limit=25'):
     => this will return us a Promise so we can use .then syntax to handle our promise

    .then(res=>res.json())
    .then(data=>console.log(data[0].title));

     => we'll get a array of objects in response so we can access its items which are object having properties which we can access using . syntax

     =>we can put this data on our DOM inside our div
     as here we got an array so we can loop through it using a forEach loop


     => after creating and getting todo add a custom attribute to each item that has an id so we can access it later on when we wanna remove it..
     
     div.setAttribute();
     when we add custom attribute (which are not standard markup attributes) we should prefix it with "data-" so when we need to access it we can use a property data set
     
