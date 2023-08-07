import React, {useState, useEffect} from 'react';

function Gallery() {

  const [id, setId] = useState(0);

  let GalleryData = [
    "https://media.istockphoto.com/id/1450095848/photo/closeup-of-car-sale-and-buyer-shaking-hands-car-salesman-gives-keys-to-buyer-close-up-of-car.webp?b=1&s=170667a&w=0&k=20&c=REHcLhiN2I7jgW974RLHl7LoLRRGKKJnifE4vbtfmxE=",
    "https://media.istockphoto.com/id/912785590/photo/couple-is-buying-new-car-and-signing-the-contract.webp?b=1&s=170667a&w=0&k=20&c=-PAP5rQBntE8dnDNuzcdp1P7Af34LFg51ivD575FxxQ=",
    "https://media.istockphoto.com/id/873965064/photo/find-your-new-car-online.jpg?s=612x612&w=0&k=20&c=n4y97ytiTeC1ywY2eT-wd5syCLI7r9hmEdkHN-XzvXI=",
    "https://media.istockphoto.com/id/978525302/photo/blue-car-on-laptop-keypad.webp?b=1&s=170667a&w=0&k=20&c=G71qQaXjRNTQqfi24xNmW9fibHaq0mhdtEYwXNsG1vE=",
    "https://media.istockphoto.com/id/1134326407/photo/hand-with-a-car-key.jpg?s=612x612&w=0&k=20&c=FTp8pBrF9pUBbeLTip42Mjr_Xy_W6_r5Xc_VZRLvow0=",
    "https://media.istockphoto.com/id/1127285020/photo/young-smiling-couple-holding-hands-and-connecting-with-a-computer-late-at-night-they-are.jpg?s=612x612&w=0&k=20&c=XE3q2E_wSkp2W38XM7DB9NeTqeHjR2O48albbrdQ6VY=",
    "https://media.istockphoto.com/id/467103541/photo/car-rental-sign.webp?b=1&s=170667a&w=0&k=20&c=bTulLElNltgY6BlufWi_4kkaAbhl1QVw9I4biujk69w=",
    "https://media.istockphoto.com/id/1412842971/photo/finally-at-the-destination.jpg?s=612x612&w=0&k=20&c=WV60DF-mQ4tRT9Mqn1QlPGXehPb2jTNPghDQ6PPUyDw=",
    "https://media.istockphoto.com/id/1325588832/photo/pouring-motor-oil-for-motor-vehicles-from-a-gray-bottle-into-the-engine.jpg?s=612x612&w=0&k=20&c=8El-cOoOpGSDz-dOjozJn5ijlFOuE1WGQA1hsZvyyMk=",
    "https://media.istockphoto.com/id/1165311626/photo/mechanic-using-a-ratchet-wrench.jpg?s=612x612&w=0&k=20&c=D4XCHr8BeR44hdJXS_Tp-9djQ7jWDKKkBWSKaqhuqK8=",
    "https://media.istockphoto.com/id/575132103/photo/mechanic-under-car-in-auto-repair-shop.jpg?s=612x612&w=0&k=20&c=eBsTuTY_oRaL43CM0dd1rFzZ9E1b7kzrUo5g9L-dDoo="
  ]

  useEffect(() => {
    setTimeout(() => {
      if (id < GalleryData.length - 1){
        // alert("yo")
        setId(prevId => prevId + 1);
        // setId(id => setId(id++))
      } else {
        setId(0);
      }
    }, 5000);
  }, [id])

  return (
    <>
      <div className='w-full h-60 bg-red-400'>
        <img src={GalleryData[id]} alt="ola" className='w-full h-full m-2 mx-auto' />
        <div></div>
      </div>
     
    </>
  )
}

export default Gallery