import React from 'react'
import { useState, useEffect } from 'react'

const Clock = () => {
  const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
    }, []);

  return (
    <div className='clock'>
            <p>
                {' '}
                {dateState.toLocaleDateString('en-GB', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                })}
            </p>
            <p id='time'>
                {dateState.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                })}
            </p>
    </div>
  )
}

export default Clock;
