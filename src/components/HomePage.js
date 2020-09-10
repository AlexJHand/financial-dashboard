import React from 'react'
import axios from 'axios'

export default class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dia: ""
        }

        this.getDia = this.getDia.bind(this)
        this.getSpy = this.getSpy.bind(this)
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.getDia()
        this.getSpy()
    }

    getDia() {
        const options = {
            method: 'get',
            url: 'https://api.tiingo.com/tiingo/daily/dia/prices',
            headers: {
                authorization: `Token ${process.env.REACT_APP_TIINGO_TOKEN}`
            }
        }
        axios(options)
            .then(results => console.log("results -> ", results))
    }

    getSpy() {
        const options = {
            method: 'get',
            url: 'https://api.tiingo.com/tiingo/daily/spy/prices',
            headers: {
                authorization: `Token ${process.env.REACT_APP_TIINGO_TOKEN}`
            }
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
