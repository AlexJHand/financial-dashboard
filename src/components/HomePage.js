import React from 'react'
import axios from 'axios'
require('dotenv').config()

export default class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dia: ""
        }

        this.getDia = this.getDia.bind(this)
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.getDia()
    }

    getDia() {
        console.log(`getDia ${process.env.REACT_APP_TIINGO_TOKEN}`)
        const options = {
            method: 'get',
            url: 'https://api.tiingo.com/tiingo/daily/dia/prices',
            authorization: `Token ${process.env.REACT_APP_TIINGO_TOKEN}`
        }
        axios(options)
            .then(results => console.log("results -> ", results))
    }

    render () {
        return (
            <div>

            </div>
        )
    }
}
