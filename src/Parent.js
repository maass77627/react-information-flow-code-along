import React from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'
import { useState } from 'react'

//class Parent extends Component {
  function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);

  function handleChangeColor() {
    const newRandomColor = getRandomColor()
    setColor(newRandomColor);
  }

 // constructor() {
 //   super()
  //  this.state = {
   //   color: getRandomColor()
   // }
 // }

  
    return (
      <div className="parent" style={{backgroundColor: color}}>
        <Child onChangeColor={handleChangeColor} />
        <Child onChangeColor={handleChangeColor} />
      </div>
    )
  }


export default Parent
