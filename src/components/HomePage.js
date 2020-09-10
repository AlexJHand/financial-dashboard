import React from 'react'
import axios from 'axios'

export default class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dia: "",
            qqq: "",
            spy: ""
        }

        this.getDia = this.getDia.bind(this)
        this.getQQQ = this.getQQQ.bind(this)
        this.getSpy = this.getSpy.bind(this)
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.getDia()
        this.getQQQ()
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
            .then(results => this.setState({ dia: results }))
    }

    getQQQ() {
        const options = {
            method: 'get',
            url: 'https://api.tiingo.com/tiingo/daily/qqq/prices',
            headers: {
                authorization: `Token ${process.env.REACT_APP_TIINGO_TOKEN}`
            }
        }
        axios(options)
            .then(results => this.setState({ qqq: results }))
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
            .then(results => this.setState({ spy: results }))
    }

    render () {
        console.log('this.state', this.state)
        return (
            <div>

            </div>
        )
    }
}
