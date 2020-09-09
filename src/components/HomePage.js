import React from 'react'
import axios from 'axios'

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
        const options = {
            method: 'get',
            url: 'https://api.tiingo.com/tiingo/daily/dia/prices',
            authorization: `Token ${process.env.TIINGO_TOKEN}`
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
