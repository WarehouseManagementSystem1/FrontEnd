import React from 'react';
import './HowItworks.css';
function HowItWorks() {
  return (
    <>
      <div className='mainwork'>
        <div className='hiw1'>
          <h1>What does a WMS system do?</h1>
          <p>
            Any activities flowing into and out of the warehouse, and those that ripple out to the extended supply chain, can be improved with a good WMS – from receiving and storage to picking, packing, and shipping. The core features of a warehouse management system support these activities in the following ways.
          </p>
        </div>

        <br></br>
        <div className='hiw2'>
          <h2>Receiving and put-away process</h2>
          <br></br>
          <p>A WMS can help companies receive, process, and put away items in the most efficient way based on business rules and warehouse flow. Before warehouse management systems, a pen and paper were used to receive items and reconcile them against purchase orders and physical receipts – and some smaller warehouses still use that approach today. In fact, in a 2018 Peerless Research survey, 87% of respondents said they were handling materials manually during the receiving process.



            A WMS system supports using RFID technology and integration with billing and other software so that items can be automatically received, validated, and reconciled against digital purchase orders with the scan of a barcode, and with labels printed for easier storage and retrieval. </p>
        </div>
        <br>
        </br>
        <div className='hiw3'>
          <h2>Inventory management</h2>
          <br></br>
          <p>
            Warehouse management software provides real-time visibility into an organisation’s inventory across any location, including items in transit and in stores. It provides tracking information using automatic identification and data capture (AIDC) technology such as barcodes or RFID. And many systems support cycle counting and demand forecasting using advanced analytics and insights into product and vendor performance. With these insights, companies can adjust inventory levels on the fly to ensure there’s just enough stock to satisfy customer demand, whether in-store or online.



            Accurate inventory tracking and other practices are key to improving order rates – meaning orders that arrive complete, on time, undamaged, and with an accurate invoice. They can also help allocate inventory according to custom workflows and picking logic so that inventory can be moved faster, both into and out of the warehouse.
          </p>
        </div>
        <br></br>
        <div className='hiw4'>
          <h2>Order picking, packing, and fulfilment</h2>
          <br></br>
          <p>
            The most commonly cited place for packing and fulfilment activities is in the warehouse, according to a Logistics Magazine survey. And ResearchGate estimates that the costs related to order picking make up 55% of the total cost of warehousing.



            WMS systems can help lower these costs by guiding the most efficient way to store, retrieve, and pack products. They also support picking technologies that streamline the process, such as radio frequency (RF) with and without scanning verification, pick-to-light and pick-to-voice technology, robotics, and algorithms that can help optimise picking paths.



            Some warehouse management solutions make it easier to fulfil orders using techniques such as single order picking, batch picking, zone picking, cross-docking, wave picking, “put” to order, put-wall systems, and more – all helping to streamline order fulfilment.
          </p>
        </div>
        <br></br>
        <div className='hiw5'>
          <h2>Shipping</h2>
          <br></br>
          <p>
            Many warehouse systems integrate with transportation management and logistics software that allows for myriad ways to expedite the fulfilment process – generating bills of lading, packing lists, and invoices for shipments automatically, for example, as well as sending out automatic shipment notifications.



            With real-time tracking features, companies can keep tabs on whether packages arrive on time and to the correct destination.


            It pays to get this right. Best-in-class warehouse operations get the vast majority of shipments off the dock and in transit to the destination on time.
          </p>
        </div>
        <br></br>
        <div className='hiw6'>
          <h2>Yard and dock management</h2>
          <br></br>
          <p>

            Features for yard and dock management can help truck drivers find the right loading docks quickly. Support for cross-docking, where goods arriving into the warehouse are immediately placed into outgoing shipments without interim storage, is ideal for fresh grocery products. The software helps with this by checking receiving scans against current sales orders, then notifying the receiver if the goods should be placed in a cross-docking location.
          </p>
        </div>
        <br></br>
        <br></br>
      </div>
    </>
  )
}

export default HowItWorks