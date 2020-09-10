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
        this.getQqq = this.getQqq.bind(this)
        this.getSpy = this.getSpy.bind(this)
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.getDia()
        this.getQqq()
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
        let diaData = this.state.dia
        let qqqData = this.state.qqq
        let spyData = this.state.spy
        if (this.state.dia !== "") {
            diaData = this.state.dia.close
        }
        if (this.state.qqq !== "") {
            qqqData = this.state.qqq.close
        }
        if (this.state.spy !== "") {
            spyData = this.state.spy.close
        }

        return (
            <div>
                <div className="diaDiv">{diaData}</div>
                <div className="qqqDiv">{qqqData}</div>
                <div className="spyDiv">{spyData}</div>
            </div>
        )
    }
}
