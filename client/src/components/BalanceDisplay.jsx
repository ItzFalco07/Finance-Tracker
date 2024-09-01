import React from 'react'

const BalanceDisplay = ({balance}) => {
  return (
  <div id='balance' className="d-flex align-items-center p-3 text-white rounded shadow-sm">
<i id='wallet' class="fa-solid fa-wallet fa-xl "></i>
    <div className="lh-1">
      <h1 className="h10 mb-0 lh-1">₹{balance}</h1>
    </div>
  </div>
  )
}

export default BalanceDisplay