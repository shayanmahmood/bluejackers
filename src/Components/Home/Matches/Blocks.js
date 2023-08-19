import React, { useEffect, useState } from 'react'
import { ref, onValue } from 'firebase/database'
import { db } from '../../firebase'
import { reverseArray, limit } from '../../../Components/ui/msc.js'
import MatcesBlock from '../../ui/matcesBlock'
import Slide from 'react-reveal/Slide'


const Blocks = () => {
    const [todoData, settodoData] = useState([])
    useEffect(() => {
        const startCountRef = ref(db, 'matches')
        onValue(startCountRef, (snapshot) => {
            const data = snapshot.val()
            const newMatch = Object.keys(data).map(keys => ({
                id: keys,
                ...data[keys]
            }))
            const dataMatches = newMatch
            settodoData(limit(dataMatches))
        })
    }, [])


  


    const showMatches = (matches) => (
        matches ?
            matches.map((match) => (
                <Slide bottom key={match.id}>
                    <div className="item">
                        <div className="wrapper">
                            <MatcesBlock match={match} />
                        </div>
                    </div>
                </Slide>
            ))
            : null
    )

    return (
        <div className="home_matches">
            {showMatches(todoData)}
        </div>
    )
}

export default Blocks;
