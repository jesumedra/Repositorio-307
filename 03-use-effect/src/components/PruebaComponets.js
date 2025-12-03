import React from 'react'

const PruebaComponets = () => {

  return (
    <div>
      <div
        id='caja'
        style={{
          background: hover ? "red" : "blue",
          borderRadius: hover ? "50px" : "10px",
          transform: hover ? "scale(1.1)" : "scale(1)",
          transition: "all 0.3s ease",
        }}

        onMouseEnter={e => setHover(true)}
        onMouseLeave={e => setHover(false)}
      >
        {hover == true ? "haz pasado por encima" : "Pasa por encima"}
      </div>
    </div>
  )
}

export default PruebaComponets
