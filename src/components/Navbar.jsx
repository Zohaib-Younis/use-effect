import React, {useEffect}  from 'react'

function Navbar({color}) {
  useEffect(() => {
    alert("color was changed")
  }, [color])
  
  return (
    <div>
      i'm navbar of {color} color.
    </div>
  )
}

export default Navbar