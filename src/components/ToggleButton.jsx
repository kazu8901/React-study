import React, {useEffect, useState} from 'react';

const ToggleButton = () => {
  const[open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(prevState => !prevState)
  }

  useEffect( () => {
    console.log("デュフフ", open)
    if(open) {
      console.log("ﾃﾞｭﾌﾌﾌﾌ")
    }
    return () => {
      console.log("ｺﾎﾟｫ")
    }
  })

  return (
    <button onClick={toggle}>
      {open ? 'OPEN' : 'CLOSE'}
    </button>
  )
}

export default ToggleButton;