import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'



export default function Tracker() {
    const habbits = useSelector((state) => state.habbits);
    const dispatch = useDispatch();
    const [dates, setDates] = useState([])
    
    useEffect(() => {
        if(habbits && habbits.length){
            habbits[0]?.track?.map(date=>(setDates([...dates, date])))
        }
    
      
    }, [dispatch])
    
    return (
    <div>
        {/* 7 days */}
        {dates.map(date=>(
            <span>{date}</span>
        ))}
        {habbits.map((habbit, i)=>(
            <>
                <p>{habbit.name}</p>
                {
                    habbit.tracks.map(track=>(
                        <>
                            <label>{track.status}</label>
                            <input type="checkbox" value={track.status}/>
                        </>
                        
                    ))
                }
            </>
        ))}
    </div>
    )
}
