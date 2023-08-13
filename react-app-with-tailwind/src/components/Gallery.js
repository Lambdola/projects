import React, {useState, useEffect} from 'react';

function Gallery() {

  const [id, setId] = useState(0);

  let GalleryData = [
    {"url": "https://media.istockphoto.com/id/1450095848/photo/closeup-of-car-sale-and-buyer-shaking-hands-car-salesman-gives-keys-to-buyer-close-up-of-car.webp?b=1&s=170667a&w=0&k=20&c=REHcLhiN2I7jgW974RLHl7LoLRRGKKJnifE4vbtfmxE=", "text": "Provide you with quality cars for sale"},
    {"url": "https://media.istockphoto.com/id/912785590/photo/couple-is-buying-new-car-and-signing-the-contract.webp?b=1&s=170667a&w=0&k=20&c=-PAP5rQBntE8dnDNuzcdp1P7Af34LFg51ivD575FxxQ=", "text": "Affordable prices giving you the opportunity to spend within your budget "},
    {"url": "https://media.istockphoto.com/id/873965064/photo/find-your-new-car-online.jpg?s=612x612&w=0&k=20&c=n4y97ytiTeC1ywY2eT-wd5syCLI7r9hmEdkHN-XzvXI=", "text": "Provide you with quality cars for sale"},
    {"url": "https://media.istockphoto.com/id/978525302/photo/blue-car-on-laptop-keypad.webp?b=1&s=170667a&w=0&k=20&c=G71qQaXjRNTQqfi24xNmW9fibHaq0mhdtEYwXNsG1vE=","text": "Provide you with quality cars for sale" },
    {"url": "https://media.istockphoto.com/id/1134326407/photo/hand-with-a-car-key.jpg?s=612x612&w=0&k=20&c=FTp8pBrF9pUBbeLTip42Mjr_Xy_W6_r5Xc_VZRLvow0=", "text": "Provide you with quality cars for sale"},
    {"url": "https://media.istockphoto.com/id/1127285020/photo/young-smiling-couple-holding-hands-and-connecting-with-a-computer-late-at-night-they-are.jpg?s=612x612&w=0&k=20&c=XE3q2E_wSkp2W38XM7DB9NeTqeHjR2O48albbrdQ6VY=", "text": "Provide you with quality cars for sale"},
    {"url": "https://media.istockphoto.com/id/467103541/photo/car-rental-sign.webp?b=1&s=170667a&w=0&k=20&c=bTulLElNltgY6BlufWi_4kkaAbhl1QVw9I4biujk69w=", "text": "Provide you with quality cars for sale"},
    {"url": "https://media.istockphoto.com/id/1412842971/photo/finally-at-the-destination.jpg?s=612x612&w=0&k=20&c=WV60DF-mQ4tRT9Mqn1QlPGXehPb2jTNPghDQ6PPUyDw=", "text": "Provide you with quality cars for sale"},
    {"url": "https://media.istockphoto.com/id/1325588832/photo/pouring-motor-oil-for-motor-vehicles-from-a-gray-bottle-into-the-engine.jpg?s=612x612&w=0&k=20&c=8El-cOoOpGSDz-dOjozJn5ijlFOuE1WGQA1hsZvyyMk=", "text": "Provide you with quality cars for sale"},
    {"url": "https://media.istockphoto.com/id/1165311626/photo/mechanic-using-a-ratchet-wrench.jpg?s=612x612&w=0&k=20&c=D4XCHr8BeR44hdJXS_Tp-9djQ7jWDKKkBWSKaqhuqK8=", "text": "Provide you with quality cars for sale"},
    {"url": "https://media.istockphoto.com/id/575132103/photo/mechanic-under-car-in-auto-repair-shop.jpg?s=612x612&w=0&k=20&c=eBsTuTY_oRaL43CM0dd1rFzZ9E1b7kzrUo5g9L-dDoo=", "text": "Provide you with quality cars for sale"}
  ];

  

  function handleGallerySlide(param) {
    let gallery = document.getElementById("gallery");
    let index = GalleryData.indexOf(param);
    gallery.scrollLeft = index*336;

    setId(index);
  }

  function handleScroll() {
    let gallery = document.getElementById("gallery");
    if (id === GalleryData.length-1){
      gallery.scrollLeft = 0;
    } else {
      gallery.scrollLeft = (id+1)*336;
    }
    setId(Math.floor(gallery.scrollLeft / (336) ));
  }


  return (
    <>
      <div className='w-full border bg-slate-200 text-center'>
        <h2 className='text-white text-2xl'>WHAT WE CAN DO FOR YOU </h2>
        <div>
            <div id="gallery" onClick={handleScroll} className='w-[21rem] mx-auto bg-red-300 flex overflow-scroll no-scrollbar '>
              {GalleryData.map((items)=> <img  src={items.url} className='w-[21rem] border-4 odd:border-purple-700 even:bg-purple-500 rounded-xl mx-auto' />)}
          </div>
        </div>
        
       
        <div className='my-2'>
          {GalleryData.map((item)=> <div className={`mr-2 h-4 w-4 rounded-full inline-block border border-black ${GalleryData[id] === item ? "bg-purple-500" : "bg-white"}`} onClick={()=>handleGallerySlide(item)}></div> )}
        </div>
      </div>
     
    </>
  )
}

export default Gallery;