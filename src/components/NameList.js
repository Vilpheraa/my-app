import React from 'react'

function NameList() {
    const names = [ "seun", "praise", "Anthony", "Festus", "Esther"]
  return (
    <div>NameList
        {
            names.map(name)
        }
    </div>
  )
}

export default NameList