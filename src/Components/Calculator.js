import React from 'react';

export default class Calculator extends React.Component {

/**
 * Constructor States for the calculator
 */
constructor(){
  super();
  this.state={N: "120",
              I: "5",
              PV: "",
              PMT: "1000",
              FV: "0",
              PY: "12",
              CY: "1",
              Ans: ""}
}
/**
 * Handles and records Changes in the Input Boxes
 */
handleChangeN(event){
  let numb = event.target.value;
  this.setState({N: numb});
}
handleChangeI(event){
  let numb = event.target.value;
  this.setState({I: numb});
}
handleChangePV(event){
  let numb = event.target.value;
  this.setState({PV: numb});
}
handleChangePMT(event){
  let numb = event.target.value;
  this.setState({PMT: numb});
}
handleChangeFV(event){
  let numb = event.target.value;
  this.setState({FV: numb});
}
handleChangePY(event){
  let numb = event.target.value;
  this.setState({PY: numb});
}
handleChangeCY(event){
  let numb = event.target.value;
  this.setState({CY: numb});
}
handleClear(event){
  event.preventDefault();
  this.setState({N: ""});
  this.setState({I: ""});
  this.setState({PV: ""});
  this.setState({PMT: ""});
  this.setState({FV: ""});
  this.setState({PY: 1});
  this.setState({CY: 1});
  this.setState({Ans: ""});
}
//Submit button
handleSubmit(event){
    event.preventDefault();
  //Changes into a Number before caclulations
    const N=parseFloat(this.state.N)
    const I=parseFloat(this.state.I*.01)
    const PV=parseFloat(this.state.PV)
    const PMT=parseFloat(this.state.PMT)
    const FV=parseFloat(this.state.FV)
    const PY=parseFloat(this.state.PY)
    const CY=parseFloat(this.state.CY)
    const R=parseFloat((PY*(Math.pow((1+I/CY),CY/PY)-1))/PY)
    console.log(R)

/**
 * Formulas Begin here.
 */

 //Present Value Annuity End of the Year
    if(this.state.PV===""){
      const presentValue = (FV/Math.pow((1+R),N) + PMT*(1 - Math.pow((1+R),-N))/R)*(-1)
      this.setState({Ans: presentValue.toFixed(4)})
      }

//Future Value Annuity End of the Year
    else if(this.state.FV===""){
      const futureValue = (PV * Math.pow((1+R),N) + PMT*(Math.pow((1+R),N)-1)/R)*(-1)
      this.setState({Ans: futureValue.toFixed(4)})
      }

//Payments
    else if(this.state.PMT===""){
      const paymentAmount = (PV/((1 - Math.pow((1+R),-N))/R) + FV/((Math.pow((1+R),N)-1)/R))*(-1)
      this.setState({Ans: paymentAmount.toFixed(4)})

      }
//Years
    else if(this.state.N===""){
      const numberYears = Math.log(((-1)*FV*R)/(PV*I))/(Math.log(1+R))
      this.setState({Ans: numberYears.toFixed(4)})
      }

//Interest for PV&FV
    else if(this.state.I===""){
      const interestRate =  Math.pow((FV/PV),(1/N)) - 1
      this.setState({Ans:interestRate.toFixed(4)})
      console.log(interestRate)
      }
}


    render() {
        /**
         * Variable Constants
         */
        const N=this.state.N;
        const I=this.state.I;
        const PV=this.state.PV;
        const PMT=this.state.PMT;
        const FV=this.state.FV;
        const PY=this.state.PY;
        const CY=this.state.CY;

        return (
            <div className="calculator">
                {/* Title */}
                <h2><span style={{color:"#FD263B"}}>c</span>asio 9750gii</h2>

                {/* Calculator begins */}
                <form>
                    <div className="block">
                      <label>Periods</label>
                      <input onChange={this.handleChangeN.bind(this)} placeholder="N" value={N}></input>
                    </div>

                    <div className="block">
                      <label>Interest %</label>
                      <input onChange={this.handleChangeI.bind(this)} placeholder="I%" value={I}></input>
                    </div>

                    <div className="block">
                      <label>PV</label>
                      <input onChange={this.handleChangePV.bind(this)} placeholder="PV" value={PV}></input>
                    </div>

                    <div className="block">
                      <label>Payments $</label>
                      <input onChange={this.handleChangePMT.bind(this)} placeholder="PMT" value={PMT}></input>
                    </div>

                    <div className="block">
                      <label>FV</label>
                      <input onChange={this.handleChangeFV.bind(this)} placeholder="FV" value={FV}></input>
                    </div>

                    <div className="block">
                      <label>P/Y</label>
                      <input onChange={this.handleChangePY.bind(this)} placeholder="P/Y" value={PY}></input>
                    </div>

                    <div className="block">
                      <label>C/Y</label>
                      <input onChange={this.handleChangeCY.bind(this)} placeholder="C/Y" value={CY}></input>
                    </div>

                    {/* Answer Output */}
                    <h1 className="answer">{this.state.Ans}</h1>

                    {/* Submit Button */}
                    <div className="block">
                      <button className="buttonCalc" onClick={this.handleSubmit.bind(this)} style={{color:"rgba(85, 170, 85, 1)", borderColor:"rgba(85, 170, 85, 1)", borderStyle:"solid"}}>Calc</button>
                      <button className="buttonClear" onClick={this.handleClear.bind(this)} style={{color: "rgba(212, 106, 106, 1)", borderColor:"rgba(212, 106, 106, 1)", borderStyle:"solid"}}>Clear</button>
                    </div>

                </form>
            </div>
        );

    }
}
