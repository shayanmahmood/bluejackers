import React, { Component } from 'react'
import { easePolyOut } from 'd3-ease'
import Animate from 'react-move/Animate'
import featuredPlayer from '../../../Resources/images/featured_player.png'

export default class Text extends Component {


    createContext = () => (
        <Animate
            show={true}

            start={{
                opacity: 0,
                rotate: 0
            }}

            enter={{
                opacity: [1],
                rotate: [360],
                timing: { duration: 1000, ease: easePolyOut }
            }}
        >
            {({ opacity, rotate }) => {
                return (
                    <div className="featured_number" style={{ opacity, transform: `translate(260px, 90px) rotateY(${rotate}deg)` }}>
                        3
                    </div>
                )
            }}
        </Animate>
    )


    createFirst = () => (
        <Animate
            show={true}
            start={{
                opacity: 0,
                x: 503,
                y: 370
            }}

            enter={{
                opacity: [1],
                x: [273],
                y: [370],
                timing: { duration: 500, ease: easePolyOut }
            }}
        >
            {({ opacity, x, y }) => {
                return (
                    <div className="featured_first" style={{ opacity, transform: `translate(${x}px, ${y}px)` }}>
                        League
                    </div>
                )
            }}
        </Animate>
    )


    createSecond = () => (
        <Animate
            show={true}
            start={{
                opacity: 0,
                x: 503,
                y: 500
            }}

            enter={{
                opacity: [1],
                x: [273],
                y: [500],
                timing: { delay: 300, duration: 500, ease: easePolyOut }
            }}
        >
            {({ opacity, x, y }) => {
                return (
                    <div className="featured_second" style={{ opacity, transform: `translate(${x}px, ${y}px)` }}>
                        ChampionShips
                    </div>
                )
            }}
        </Animate>
    )

    createPlayer = () => (
        <Animate
            show={true}
            start={{
                opacity: 0,
            }}

            enter={{
                opacity: [1],
                timing: { delay: 800, duration: 500, ease: easePolyOut }
            }}
        >
            {({ opacity }) => {
                return (
                    <div className="featured_player" style={{ opacity, transform: `translate(550px, 101px)`, backgroundImage: `url(${featuredPlayer})` }}>
                    </div>
                )
            }}
        </Animate>
    )


    render() {
        return (
            <div className="featured_text">
                {this.createPlayer()}
                {this.createContext()}
                {this.createFirst()}
                {this.createSecond()}
            </div>
        )
    }
}
