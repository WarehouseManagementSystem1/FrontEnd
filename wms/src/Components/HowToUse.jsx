import React from 'react';
import '../Css/HowItworks.css';


function HowToUse() {
  return (
    <>
      <div className='mainwork'>
        <div className='hiw1'>
          <h1>How To use WMS System</h1>
          <p>
            Our Warehouse Management System is designed with user-friendliness and easy-to-use nature in mind. It's an intuitive platform that empowers warehouse personnel to efficiently manage items, transfers, and inventory. By following these steps and utilizing the various functionalities, you can streamline warehouse operations, enhance transparency, and optimize overall efficiency.

          </p>
        </div>

        <br></br>
        <div className='hiw2'>
          <h2>New User Registration</h2>
          <br></br>
          <p>If you are a new user and want to register your warehouse Signup Tile. Add your login ID and create a password for login.</p>
        </div>
        <br>
        </br>
        <div className='hiw3'>
          <h2>Login And User Authentication</h2>
          <br></br>
          <p>
            Existing users can log in using their credentials like user id and password.
          </p>
        </div>
        <br></br>
        <div className='hiw4'>
          <h2>Dashboard Overview</h2>
          <br></br>
          <p>
            Upon logging in, you'll be directed to the system dashboard. This dashboard serves as the central hub for all system functionalities.
          </p>
        </div>
        <br></br>
        <div className='hiw5'>
          <h2>In Bound Functionality (Can be accessed by User & Owner)</h2>
          <br></br>
          <p>
            Click on the "InBound" tab on the dashboard to process the inbound request.
            Enter the dimensions of the incoming item. The system's refined algorithms will calculate the volume after taking dimension input from the user.
            The system will suggest the most suitable storage location based on the available space and existing inventory.
            If the suggestion is acceptable, confirm the storage location and the system will update the inventory.
          </p>
        </div>
        <br></br>
        <div className='hiw6'>
          <h2>OutBound Functionality (Can be accessed by User & Owner) </h2>
          <br></br>
          <p>

            Click on the 'Outbound' tab on the dashboard to process outbound requests.
            Select the items to be delivered from the inventory and provide the item details.
            The system will update the inventory status after outbound is processed and maintain a log of the transaction.
          </p>
        </div>
        <br></br>
        <div className='hiw4'>
          <h2>Audit and Internal Transfers </h2>
          <br></br>
          <p>
            Access the "Audit" tab for internal transfers and audits.
            Choose the items to be transferred and specify the destination location within the warehouse.
            The system will manage the transfer, update the inventory, and generate a transfer log.
          </p>
        </div>
        <br></br>
        <div className='hiw4'>
          <h2>User Management</h2>
          <br></br>
          <p>
            If you're a warehouse owner/admin, you can add a new warehouse.
            Add new users by providing their details and assigning roles (admin, auditor).

          </p>
        </div>
        <br></br>
        <div className='hiw4'>
          <h2>Real-Time Visibility and Reporting</h2>
          <br></br>
          <p>
            Explore the "Inventory" section on the dashboard.
            View the current inventory status, and stock levels in real time.
            Use this information for making informed restocking decisions and transfers.

          </p>
        </div>
        <br></br>
        <div className='hiw4'>
          <h2>Comprehensive Logs and Reports</h2>
          <br></br>
          <p>
            Check the "Logs and Reports" section to review all the transaction history.
            Generate comprehensive reports for auditing, and transaction history.

          </p>
        </div>
        <br></br>
        <div className='hiw4'>
          <h2>Logging Out</h2>
          <br></br>
          <p>
            Always remember to log out when you're done using the system to ensure security.


          </p>
        </div>


        <br></br>
        <br></br>
      </div>
    </>
  )
}

export default HowToUse;