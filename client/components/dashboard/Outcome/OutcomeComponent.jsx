import React from 'react'

function OutcomeComponent() {
  return (
    <div className="p-2 space-y-4">
      <div className="border-[#151a44] border-4 p-4 rounded-lg shadow-md">
        <h6 className="text-xs font-bold mb-2">Surface Temperature Falls Gradually</h6>
        <p className="text-xs">As the surface temperature decreases gradually, it can lead to cooler ground conditions, reducing the heat available for evapotranspiration. This may affect plant growth, as lower surface temperatures can slow down photosynthesis and other biological processes.</p>
      </div>

      <div className="border-[#151a44] border-4 p-4 rounded-lg shadow-md">
        <h3 className="text-xs font-bold mb-2">Temperature at 2 Meters Falls Gradually</h3>
        <p className="text-xs ">As the air temperature at 2 meters drops, the ambient air cools, which can result in lower energy for crop respiration. This change could lead to a reduced rate of crop growth, particularly during night hours when temperatures are lower.</p>
      </div>
      <div className="border-[#151a44] border-4 p-4 rounded-lg shadow-md">
        <h3 className="text-xs font-bold mb-2">Wind Speed at 10 Meters Fluctuates and Eventually Falls</h3>
        <p className="text-xs ">Wind speed at higher altitudes fluctuating and eventually falling can reduce the dispersal of heat and moisture from the surface, leading to higher humidity near the ground. This may create favorable conditions for fungal diseases if moisture levels remain high.</p>
      </div>
    </div>
  )
}

export default OutcomeComponent
