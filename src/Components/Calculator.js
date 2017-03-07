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
                <h2><span>c</span>asio 9750gii</h2>
                <form>

                    <div className="block">
                      <label>Number of Years</label>
                      <input onChange={this.props.handleChangeN} placeholder="N" value={N}></input>
                    </div>

                    <div className="block">
                      <label>Interest Rate %</label>
                      <input onChange={this.props.handleChangeI} placeholder="I%" value={I}></input>
                    </div>

                    <div className="block">
                      <label>Present Value</label>
                      <input onChange={this.props.handleChangePV} placeholder="PV" value={PV}></input>
                    </div>

                    <div className="block">
                      <label>Payments $</label>
                      <input onChange={this.props.handleChangePMT} placeholder="PMT" value={PMT}></input>
                    </div>

                    <div className="block">
                      <label>Future Value</label>
                      <input onChange={this.props.handleChangeFV} placeholder="FV" value={FV}></input>
                    </div>

                    <div className="block">
                      <label>Payments per Year</label>
                      <input onChange={this.props.handleChangePY} placeholder="P/Y" value={PY}></input>
                    </div>

                    <div className="block">
                      <label>Compounding per Year</label>
                      <input onChange={this.props.handleChangeCY} placeholder="C/Y" value={CY}></input>
                    </div>
    {/* Answer Output */}
    <h1 className="answer">{this.props.answer}</h1>

                    {/* Submit Button */}
                    <div className="block">
                      <button onClick={this.props.handleSubmit}>Calculate</button>
                      <button onClick={this.props.handleClear}>Clear</button>
                    </div>

                </form>
            </div>
        );

    }
}
