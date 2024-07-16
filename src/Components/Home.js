import React from "react";
import Navb from "./Navb";
import { UncontrolledCarousel } from "reactstrap";



const items = [

  {

    src: "https://play-lh.googleusercontent.com/GNgo1XbMUJ8ba66p-9IdpIBEkhnDWtrVLAafDyRAmbeCpAbD6pCy88mvmVeWcKRDu18=w526-h296-rw",

    altText: 'Arch',

    caption: '1',

    header: 'Arch',

    key: '1'

  },

  {

    src: "https://play-lh.googleusercontent.com/GNgo1XbMUJ8ba66p-9IdpIBEkhnDWtrVLAafDyRAmbeCpAbD6pCy88mvmVeWcKRDu18=w526-h296-rw",

    altText: 'Slide 2',

    caption: '2',

    header: 'Tulip',

    key: '2'

  },

  {

    src: "https://play-lh.googleusercontent.com/GNgo1XbMUJ8ba66p-9IdpIBEkhnDWtrVLAafDyRAmbeCpAbD6pCy88mvmVeWcKRDu18=w526-h296-rw",

    altText: 'Slide 3',

    caption: '3',

    header: 'Lion',

    key: '3'

  }

];

function Home(){
  return(
    <>
      <Navb/>
      <UncontrolledCarousel items={items} />

    </>
  );
}
export default Home;