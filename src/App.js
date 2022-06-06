import React from 'react';
import Button from './components/Button'
import OutputScreen from './components/OutputScreen'
import './App.css';


class Calculator extends React.Component { 
  render()
    {
        return (
            <div className="frame" style={{width:"400px"}}>
                <div className="mainCalc">
                    <OutputScreen /> 
                    <table cellPadding={0} cellSpacing={0}>
                    <tr>
                        <td><Button className="btn" label={'AC'}/></td>
                        <td><Button className="btn" label={'+/-'}/></td>
                        <td><Button className="btn" label={'%'}/></td>
                        <td><Button className="btnaction" label={'÷'}/></td>
                    </tr>
                    <tr>
                        <td><Button className="btnaction1" label={'7'} /></td>
                        <td><Button className="btnaction1" label={'8'} /></td>
                        <td><Button className="btnaction1" label={'9'} /></td>
                        <td><Button className="btnaction" label={'x'} /></td>
                    </tr>
                    <tr>
                        <td><Button className="btnaction1" label={'4'} /></td>   
                        <td><Button className="btnaction1" label={'5'} /></td>
                        <td><Button className="btnaction1" label={'6'} /></td>
                        <td><Button className="btnaction" label={'-'} /></td>
                    </tr>
                    <tr>
                        <td><Button className="btnaction1" label={'1'} /></td>
                        <td><Button className="btnaction1" label={'2'} /></td>
                        <td><Button className="btnaction1" label={'3'} /></td>
                        <td><Button className="btnaction" label={'+'} /></td>
                    </tr>
                    
                    <tr>
                        <td colSpan={2}><Button className="btnaction2" label={'0'} /></td>
                        

                        <td><Button className="btnaction1" label={','} /></td>
                        <td><Button className="btnaction" label={'='}/></td>
                    </tr>
                    </table>
                </div>
            </div>
        );
  }
}

export default Calculator;
