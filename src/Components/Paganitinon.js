import React from 'react'
import './Paganition.scss'

export const Paganitinon = ({nPage, curenPage, setcurenPage}) => {
  const pageNumber = [...Array(nPage + 1).keys()].slice(1);
  return (
    <ul className='character-paganition'>
      {pageNumber.map((pgNumber) => (
        <li key={pgNumber}>
          <a
          className={`page-button ${curenPage == pgNumber ? "active" : ''}`}
           onClick={() => setcurenPage(pgNumber)}>{pgNumber}</a>
        </li>
      ))}
    </ul>
  )
}

export default Paganitinon