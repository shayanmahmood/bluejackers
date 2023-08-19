import React from 'react';
import { Tag } from '../../ui/msc.js';
import Blocks from './Blocks.js';

const Matches = () => {
    return (
        <div className="home_matches_wrapper">
            <div className="container">
                <Tag bck='#0e1731'
                    size='50px'
                    color='#ffff' >
                    Matches
                </Tag>


                <Blocks />

                <Tag
                    bck="#ffffff"
                    size="22px"
                    color="#0e1731"
                    link={true}
                    linkto="/the_team"
                >
                    See more matches
                </Tag>
            </div>
        </div>
    );
};

export default Matches;