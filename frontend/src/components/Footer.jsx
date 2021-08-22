import React from "react";
import {Link} from 'react-router-dom'
import './Footer.css'
//import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
//import'mdbreact/dist/css/mdb.css';

import GQ1 from '../images/gq-logo2.png'

 

const FooterPage = () => {
  return (

    /*<div className='Footer1'>
      <table border='3px'>
        <td>
          <th id='Fc1'>
            <Link to= '/' className='navbar-log'>
          <img src={GQ1} height='200px' width='400px;' alt="GQ logo" className="gq-logo-footer"/>
          </Link>
          </th>
        </td>

        <td>
          <th id='Fc2'>
          <i className='fab fa-facebook' id='fb' style={{color:"#34b7f1"}} ></i>
            <i className='fab fa-whatsapp' id='fb' style={{color:"#25d366"}}></i>
            <i className='fab fa-viber' id='fb' style={{color:"#B026FF"}}></i>
            <h5 className='GQcontact'>Contact: 072 778 7788</h6><br/>
           <h6 className='GQcontactE'>Email: contactgqintl@gmail.com</h6>
          </th>
        </td>

        <td>
          <th>
          <h6 className='address-1'>231/10 2/3</h6><br/>
        <h6 className='address-2'>Panchikawatta Rd,</h6><br/>
        <h6 className='address-3'>Colombo 10</h6><br/>
          </th>
        </td>

      </table>
       </div>
       */
    <div className='Footer1'><br/>
      <table className='tablefoot'>
        <tr >
          <th> &nbsp; &nbsp;
            <Link to= '/' className='navbar-log'>
              <img src={GQ1} height='170px' width='400px;' alt="GQ logo" className="gq-logo-footer"/>
            </Link>
          </th>
          <th>  </th>
          <th>
            <Link to='#' id='addspace' className='Decoratefooter'>HOME </Link><br/>
            <Link to='#' id='addspace'className='Decoratefooter'>ITEMS</Link><br/>
            <Link to='#' id='addspace'className='Decoratefooter'>CONTACT US</Link><br/>
            <Link to='#' id='addspace'className='Decoratefooter'>ABOUT US</Link><br/>
          </th>
          <th></th>
          <th>
            <i className='fab fa-facebook' id='fb' style={{color:"#34b7f1"}} ></i>
            <i className='fab fa-whatsapp' id='fb' style={{color:"#25d366"}}></i>
            <i className='fab fa-viber' id='fb' style={{color:"#B026FF"}}></i>
            <h5 className='GQcontact'>Contact: 072 778 7788</h5><br/>
            <h5 className='GQcontactE'>Email: contactgqintl@gmail.com</h5>
          </th>
          <th ></th>
          <th >
        <h5 id='addspace1' className='address-1'>231/10 2/3</h5><br/>
        <h5 id='addspace1' className='address-2'>Panchikawatta Rd,</h5><br/>
        <h5 id='addspace1' className='address-3'>Colombo 10</h5><br/>

        </th>
        </tr>    
      </table>
     </div>







   

       );
  
}

 

export default FooterPage;