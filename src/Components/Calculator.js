import React from 'react';

export default class Calculator extends React.Component {

    render() {
        /**
         * Variable Constants
         */
        const N=this.props.Calculator.N;
        const I=this.props.Calculator.I;
        const PV=this.props.Calculator.PV;
        const PMT=this.props.Calculator.PMT;
        const FV=this.props.Calculator.FV;
        const PY=this.props.Calculator.PY;
        const CY=this.props.Calculator.CY;

        return (
            <div className="calculator">
                {/* Title */}
                <h2><span style={{color:"#FD263B"}}>c</span>asio 9750gii</h2>

                {/* Calculator begins */}
                <form>
                    <div className="block">
                      <label>Periods</label>
                      <input onChange={this.props.handleChangeN} placeholder="N" value={N}></input>
                    </div>

                    <div className="block">
                      <label>Interest %</label>
                      <input onChange={this.props.handleChangeI} placeholder="I%" value={I}></input>
                    </div>

                    <div className="block">
                      <label>PV</label>
                      <input onChange={this.props.handleChangePV} placeholder="PV" value={PV}></input>
                    </div>

                    <div className="block">
                      <label>Payments $</label>
                      <input onChange={this.props.handleChangePMT} placeholder="PMT" value={PMT}></input>
                    </div>

                    <div className="block">
                      <label>FV</label>
                      <input onChange={this.props.handleChangeFV} placeholder="FV" value={FV}></input>
                    </div>

                    <div className="block">
                      <label>P/Y</label>
                      <input onChange={this.props.handleChangePY} placeholder="P/Y" value={PY}></input>
                    </div>

                    <div className="block">
                      <label>C/Y</label>
                      <input onChange={this.props.handleChangeCY} placeholder="C/Y" value={CY}></input>
                    </div>

                    {/* Answer Output */}
                    <h1 className="answer">{this.props.answer}</h1>

                    {/* Submit Button */}
                    <div className="block">
                      <button onClick={this.props.handleSubmit} style={{color:"#55AA55"}}>Calc</button>
                      <button onClick={this.props.handleClear} style={{color: "#D46A6A"}}>Clear</button>
                    </div>

                </form>
            </div>
        );

    }
}
