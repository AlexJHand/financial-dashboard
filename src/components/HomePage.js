import React from 'react'
import axios from 'axios'
import AverageCard from './AverageCard'

export default class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dia: "",
            qqq: "",
            spy: ""
        }

        this.formatCloseInfo = this.formatCloseInfo.bind(this)
        this.getDia = this.getDia.bind(this)
        this.getQqq = this.getQqq.bind(this)
        this.getSpy = this.getSpy.bind(this)
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.getDia()
        this.getQqq()
        this.getSpy()
    }

    formatCloseInfo(info) {
        console.log(`formatCloseInfo ${info}`)
        let returnFormat = {
            close: "",
            difference: ""
        }
        if (info !== "") {
            returnFormat = {
                close: info.close,
                difference: Math.round((info.close - info.open) * 100) / 100
            }
        }
        return returnFormat
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
            .then(results => this.setState({ dia: results.data[0] }))
    }

    getQqq() {
        const options = {
            method: 'get',
            url: 'https://api.tiingo.com/tiingo/daily/qqq/prices',
            headers: {
                authorization: `Token ${process.env.REACT_APP_TIINGO_TOKEN}`
            }
        }
        axios(options)
            .then(results => this.setState({ qqq: results.data[0] }))
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
            .then(results => this.setState({ spy: results.data[0] }))
    }

    render () {
        console.log('this.state', this.state)
        let diaData = this.formatCloseInfo(this.state.dia)
        let qqqData = this.formatCloseInfo(this.state.qqq)
        let spyData = this.formatCloseInfo(this.state.spy)

        console.log(`diaData ${diaData.close} ${diaData.difference}`)
        return (
            <div className='homePage'>
                <AverageCard title="DIA" close={diaData.close} difference={diaData.difference} />
                <AverageCard title="QQQ" close={qqqData.close} difference={qqqData.difference} />
                <AverageCard title="SPY" close={spyData.close} difference={spyData.difference} />
            </div>
        )
    }
}
