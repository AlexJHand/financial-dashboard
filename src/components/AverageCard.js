import React from 'react'

export default class AverageCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            close: "",
            difference: ""
        }
    }

    render() {
        return (
            <div className="averageCard">
                <div className="averageTitle">{this.props.title}</div>
                <div className="averageData">
                    {this.props.difference > 0 ?
                        <div className="homeDataDiv positiveChange">{`${this.props.close} `}   
                            <span className="averageArrow">{`\u25B2`}</span>
                        {this.props.difference}</div> :
                        <div className="homeDataDiv negativeChange">{`${this.props.close} `}
                            <span className="averageArrow">{`\u25BC`}</span>
                        {this.props.difference}</div>
                    }
                </div>
            </div>
        )
    }
}
