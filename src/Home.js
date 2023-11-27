import { useState } from "react";
import { data } from "./data";
import Buttons from "./Buttons";
import Clothes from "./Clothes";

function Home(){
    const [clothes, setCothes]=useState(data)
    const chosenClothes=(searchTerm)=>{
      const newClothes=data.filter(element=>element.searchTerm===searchTerm);
      setCothes(newClothes);
    }
    
     return(
      <div>
        <div className='cont'>
          <h2 className='back'>Free Standart Shipping</h2>
        </div>
        <Buttons filteredClothes={chosenClothes}/>
    <Clothes itemsForSale={clothes}/>
      </div>
     )
}
export default Home;