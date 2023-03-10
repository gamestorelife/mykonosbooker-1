const villaform = document.getElementById('villa-Form');
const hotelform = document.getElementById('hotel-Form');


villaform.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from submitting
  
    const datein = villaform.elements['villas-in-date'].value;
    const dateout = villaform.elements['villas-out-date'].value;
    const bedrooms = villaform.elements['villas-bedrooms'].value;
  
    console.log(`In: ${datein}`);
    console.log(`out: ${dateout}`);
    console.log(`rooms: ${bedrooms}`);
    window.location.href = `https://bookings.mykonosbooker.com/#/search/2023~2F03~2F11/2023~2F03~2F25/Athens%20Center,%20Athens/OT-LOC-GEO-9186/(nationality:75,rooms:${bedrooms}!(('$$hashKey':'object:51',adults:2,children:0,childrenAges:!(),quantity:1)),searchOnRequestRooms:!f,stars:(max:5,min:0))`;
  });

  hotelform.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from submitting
  
    const allkids = hotelform.elements['hotel-allkids'].value;
    const allrooms = hotelform.elements['hotel-allrooms'].value;
    const alladult = hotelform.elements['hotel-alladult'].value;
  
    console.log(`allkids: ${allkids}`);
    console.log(`allrooms: ${allrooms}`);
    console.log(`alladult: ${alladult}`);
    window.location.href = "https://bookings.mykonosbooker.com/#/search/2023~2F03~2F11/2023~2F03~2F25/Athens%20Center,%20Athens/OT-LOC-GEO-9186/(nationality:75,rooms:!(('$$hashKey':'object:51',adults:${alladult},children:${allkids},childrenAges:!(),quantity:1)),searchOnRequestRooms:!f,stars:(max:5,min:0))";
  

});







