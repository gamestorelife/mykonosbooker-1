const form = document.getElementById('villa-Form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from submitting
  
    const datein = form.elements['villas-in-date'].value;
    const dateout = form.elements['villas-out-date'].value;
    const bedrooms = form.elements['villas-bedrooms'].value;
  
    console.log(`In: ${datein}`);
    console.log(`out: ${dateout}`);
    console.log(`room: ${bedrooms}`);
    window.location.href = "https://bookings.mykonosbooker.com/#/search/2023~2F03~2F11/2023~2F03~2F25/Athens%20Center,%20Athens/OT-LOC-GEO-9186/(nationality:75,rooms:!(('$$hashKey':'object:51',adults:2,children:0,childrenAges:!(),quantity:1)),searchOnRequestRooms:!f,stars:(max:5,min:0))";
  });



const myUrl = new URL("https://bookings.mykonosbooker.com");
console.log(myUrl.href);