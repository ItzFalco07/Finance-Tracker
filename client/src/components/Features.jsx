import React from 'react'

const Features = () => {
  return (
<div className="container px-4 py-5" id="hanging-icons">
    <h2 className="pb-2 border-bottom">Our Features:</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"><use xlinkHref="#toggles2"></use></svg>
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">Expense Tracking</h3>
          <p>Keep a detailed record of all your expenses with our intuitive expense tracking tool. Categorize and monitor your spending to gain insights into where your money goes.
          </p>
          <a href="#" className="btn btn-primary">
            Primary button
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"><use xlinkHref="#cpu-fill"></use></svg>
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">Budget Planning</h3>
          <p>Set and manage budgets for various categories to ensure you stay on top of your financial goals. Our app provides visual tools to help you plan and adjust your spending effectively.</p>
          <a href="#" className="btn btn-primary">
            Primary button
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"><use xlinkHref="#tools"></use></svg>
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">Financial Reports</h3>
          <p>Generate comprehensive financial reports that give you a clear overview of your financial health. Analyze trends and make informed decisions based on detailed insights into your spending and savings.</p>
          <a href="#" className="btn btn-primary">
            Primary button
          </a>
        </div>
      </div>
    </div>
  </div>  )
}

export default Features