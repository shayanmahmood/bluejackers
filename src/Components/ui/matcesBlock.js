import React from 'react';


export default function MatcesBlock({ match }) {
    let img = `../../Components/images/team_icons/burnley.png`
    console.log(match)
    return (
        match ?
            <div className="match_block" >
                <div className="match_date">
                    {match.final ? match.date : `Match not played yet: ${match.date}`}
                </div>
                <div className="match_wrapper">
                    <div className="match_top">
                        <div className="left">
                            <div className="icon" style={{backgroundImage:`url(${img})` }}></div>
                            <div className="team_name">{match.local}</div>
                        </div>
                        <div className="right">
                            {match.final ? match.resultLocal : '-'}
                        </div>
                    </div>
                    <div className="match_bottom">
                        <div className="left">
                            <div className="icon" style={{ background: `url(../../Components/images/team_icons/${match.away}.png)` }}></div>
                            <div className="team_name">{match.awayThmb}</div>
                        </div>
                        <div className="right">
                            {match.final ? match.resultAway : '-'}
                        </div>
                    </div>

                </div>
            </div> : <div className="">Not found</div>
    )
}


