import React, { Component } from 'react';
import './css/Form.min.css';

import ContactForm from './component/Form/ContactForm';

class Form extends Component {

  render(){
    return(
      <div className="reactForm">
        <div className="Form">
          <h3>お問い合わせ</h3>
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default Form;
