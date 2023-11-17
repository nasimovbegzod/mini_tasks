import React, { useState } from 'react'
import Character from './Character'
import Paganitinon from './Paganitinon'
import { useFetchData } from './useFetchData'
import './Main.scss'
const Main = () => {
  const {data} = useFetchData();
  const [curenPage, setcurenPage] = useState(1);
  const [recordsPerPage] = useState(8);

  const indexOfLastRecord = curenPage * recordsPerPage;
  const indexOfFirstRecord =indexOfLastRecord - recordsPerPage ;

  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPage = Math.ceil(data.length / recordsPerPage);
  return (
    <div>
      <div className="character-container">
        {currentRecords.map((character, index) => (
          <Character character={character} key={index}/>
        ))}
      </div>
      <Paganitinon
      nPage={nPage}
      curenPage={curenPage}
      setcurenPage={setcurenPage}
      />

    </div>
  )
}

export default Main