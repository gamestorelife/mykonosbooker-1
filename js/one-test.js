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
  
    const hallkids = hotelform.elements['hotel-allkids'].value;
    const hallrooms = hotelform.elements['hotel-allrooms'].value;
    const halladult = hotelform.elements['hotel-alladult'].value;
    const hotelkid1 = hotelform.elements['hotel-kid1-age'].value;
    const hotelkid2 = hotelform.elements['hotel-kid2-age'].value;
    const hotelkid3 = hotelform.elements['hotel-kid3-age'].value;
    const hotelkid4 = hotelform.elements['hotel-kid4-age'].value;
    const hotelkid5 = hotelform.elements['hotel-kid5-age'].value;
    const hotelkid6 = hotelform.elements['hotel-kid6-age'].value;
  
    console.log(`allkids: ${hallkids}`);
    console.log(`allrooms: ${hallrooms}`);
    console.log(`alladult: ${halladult}`);
    window.location.href = `https://bookings.mykonosbooker.com/#/search/2023~2F03~2F11/2023~2F03~2F25/Athens%20Center,%20Athens/OT-LOC-GEO-9186/(nationality:75,rooms:!(('$$hashKey':'object:51',adults:${halladult},children:${hallkids},childrenAges:!(${hotelkid1},${hotelkid2},${hotelkid3},${hotelkid3},${hotelkid4},${hotelkid5},${hotelkid6}),quantity:1)),searchOnRequestRooms:!f,stars:(max:5,min:0))`;
  

});







