import React from 'react';

export default class Calculator extends React.Component {

/**
 * Constructor States for the calculator
 */
constructor(props){
  super(props);
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
//bind takes the first argument.
inputChangeHandler (name,event) {
    this.setState({ [name]: event.target.value });
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
                    <Input changeHandler={this.inputChangeHandler.bind(this,this.props.N)} name={this.props.N} default={N} />
                    <Input changeHandler={this.inputChangeHandler.bind(this,this.props.I)} name={this.props.I} default={I} />
                    <Input changeHandler={this.inputChangeHandler.bind(this,this.props.PV)} name={this.props.PV} default={PV} />
                    <Input changeHandler={this.inputChangeHandler.bind(this,this.props.PMT)} name={this.props.PMT} default={PMT} />
                    <Input changeHandler={this.inputChangeHandler.bind(this,this.props.FV)} name={this.props.FV}  default={FV} />
                    <Input changeHandler={this.inputChangeHandler.bind(this,this.props.PY)} name={this.props.PY} default={PY} />
                    <Input changeHandler={this.inputChangeHandler.bind(this,this.props.CY)} name={this.props.CY} default={CY} />
{/*
                    <div className="block">
                      <label>C/Y</label>
                      <input onChange={this.handleChangeCY.bind(this)} placeholder="C/Y" value={CY}></input>
                    </div> */}

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

//takes in props
const Input = (props)=>{
  return (
    <div className="block">
      <label>{props.name}</label>
      <input onChange={props.changeHandler} value={props.default}></input>
    </div>
  )
}
Calculator.defaultProps = {
              N:"N",
              I:"I",
              PV:"PV",
              PMT:"PMT",
              FV:"FV",
              PY:"PY",
              CY:"CY",
}
