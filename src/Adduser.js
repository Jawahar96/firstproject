import React, { Component } from 'react'
import Header from './Header'
import './AddUser.css'
export class AddUser extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: '',
      phone: ''
    }
  }

  render() {
    return (
      <div>
        <Header heading="Add User"></Header>
        <div className='component-body-container'>
          <button className='custom-btn'>Back</button>
          <form className='user-form'>
            <label htmlFor='name' className='label-control'>Name: </label><br />
            <input id="name" type="text" className="input-control" name="name"></input><br /><br />
            <label htmlFor='phone' className='label-control'>Phone: </label><br />
            <input id="phone" type="text" className="input-control" name="phone"></input><br /><br />
            <div className='user-info-container'>
              <span className='user-to-add-heading'>User to be added:</span><br />
              <span className='user-info'>Name:</span><br />
              <span className='user-info'>Phone:</span>
            </div>
            <button type="submit" className='custom-btn add-btn'>Add</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddUser