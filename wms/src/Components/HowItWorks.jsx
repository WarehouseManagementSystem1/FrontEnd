import React from 'react';
import './HowItworks.css';
function HowItWorks() {
    return (
        <>
            <div className='mainwork'>
                <div className='hiw1'>
                    <h1>How WMS Works</h1>
                    <p>
                        The Spring-Boot and React-based Warehouse Management System offers an innovative approach to optimizing storage, tracking, and overall inventory management. Functionalities provided by the WMS application are as follows:

                    </p>
                </div>

               
                <div className='hiw2'>
                    <h2>In Bound Functionality</h2>
                    
                    <p>
                        When a new item arrives at the warehouse, the system's "InBound" functionality takes charge. Using refined algorithms, the system calculates the volume of the incoming item after the user feeds the dimensions. Using the provided information along with existing inventory data, the system then suggests the most optimal storage location. Users can simply input the new item's details, and the system seamlessly guides them to its designated storage area.

                    </p>
                </div>
                
                <div className='hiw3'>
                    <h2>OutBound Functionality</h2>
                    
                    <p>
                        Efficient outbound processes are essential for the warehouse. The "OutBound" feature manages this aspect seamlessly. When an item needs to be delivered or an outbound request comes, the system not only updates the inventory status in real-time but also maintains a comprehensive log or transaction history. This ensures accurate record-keeping and reduces the risk of errors in fulfilling orders. By integrating with the inventory data, the system guarantees that items leaving the warehouse are properly documented.
                    </p>
                </div>
                
                <div className='hiw4'>
                    <h2>Dashboard Overview</h2>
                    
                    <p>
                        Upon logging in, you'll be directed to the system dashboard. This dashboard serves as the central hub for all system functionalities.
                    </p>
                </div>
                
                <div className='hiw5'>
                    <h2>In Bound Functionality (Can be accessed by User & Owner)</h2>
                    
                    <p>
                        Click on the "InBound" tab on the dashboard to process the inbound request.
                        Enter the dimensions of the incoming item. The system's refined algorithms will calculate the volume after taking dimension input from the user.
                        The system will suggest the most suitable storage location based on the available space and existing inventory.
                        If the suggestion is acceptable, confirm the storage location and the system will update the inventory.
                    </p>
                </div>
                
                <div className='hiw6'>
                    <h2>OutBound Functionality (Can be accessed by User & Owner) </h2>
                    
                    <p>

                        Click on the 'Outbound' tab on the dashboard to process outbound requests.
                        Select the items to be delivered from the inventory and provide the item details.
                        The system will update the inventory status after outbound is processed and maintain a log of the transaction.
                    </p>
                </div>
                
                <div className='hiw4'>
                    <h2>Audit and Internal Transfers</h2>
                    
                    <p>
                        The system's "Audit" functionality is a useful tool for internal transfers and inventory audits. When items need to be moved from one section of the warehouse to another, this feature comes in handy and facilitates the process. The system manages every transfer for the movement of items. This level of accountability minimizes discrepancies and enhances transparency within the warehouse's internal processes.
                    </p>
                </div>
                
                <div className='hiw4'>
                    <h2>User Management</h2>
                    
                    <p>
                        Collaboration and workload distribution are key aspects of efficient warehouse management. The system allows warehouse owners to add and manage users. This feature enables the distribution of responsibilities and tasks among staff members. Warehouse managers can assign roles to users and assign particular tasks. By centralizing user management, the system enhances collaboration and ensures that each team member contributes effectively to the overall operational success of the warehouse.

                    </p>
                </div>
                
                <div className='hiw4'>
                    <h2>Real-Time Visibility and Reporting</h2>
                    
                    <p>

                        The system's dashboard provides real-time visibility into the warehouse's inventory status. This feature empowers warehouse managers (owners/users/auditors) with accurate and up-to-date insights. Monitoring stock levels, making informed restocking decisions and transfers can be easily done with the data available in real-time. Detailed reports generated by the system offer valuable insights into operational efficiency, helping the management team in strategic decision-making and smooth handling of the warehouse.
                    </p>
                </div>
                
                <div className='hiw4'>
                    <h2>Comprehensive Logs and Reports</h2>
                    
                    <p>
                        Every action within the system is precisely recorded in comprehensive logs and reports. This includes InBound, OutBound, and Audit activities. These logs serve as an important resource for auditing purposes and activity tracking. By maintaining a detailed record of each transaction and event, the system ensures that warehouse operations are transparent and well-documented.

                    </p>
                </div>
                
                <div className='hiw4'>
                    <h2>Summary</h2>
                    
                    <p>

                        In summary, the Spring-Boot and React-based warehouse management system provides a practical and user-friendly solution for optimizing every aspect of warehouse operations. From efficient item storage suggestions and accurate tracking to seamless internal transfers, real-time visibility, and comprehensive logs, the system empowers warehouses to operate at peak efficiency while ensuring transparency and accountability universally.


                    </p>
                </div>


                <br></br>
                <br></br>
            </div>
        </>
    )
}

export default HowItWorks;