import React, { Component } from 'react'
import Link from 'next/link'

export class Navrgt extends Component {
  render() {
    return (
      <div>
           <ul className="flex gap-20">
            <li><Link href="/">Schedule</Link></li>
            <li><Link href="/">Tickets</Link></li>
            <li><Link href="/">Contact us</Link></li>
        </ul>
      </div>
    )
  }
}

export default Navrgt