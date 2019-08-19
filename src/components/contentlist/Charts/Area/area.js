import React, { Component } from 'react';
import MyTemplete  from '../../../templete/index.js';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, AreaSeries} from 'react-vis';
import CodeBlock from '../../../CodeBlock.js';
import ReactMarkdown from 'react-markdown';

class MyArea extends Component
{

    renderArea()
    {
        const data = [
            {x: 0, y: 15},
            {x: 1, y: 2},
            {x: 2, y: 4},
            {x: 3, y: 7},
            {x: 4, y: 10},
            {x: 5, y: 4},
            {x: 6, y: 9},
            {x: 7, y: 5},
            {x: 8, y: 10},
            {x: 9, y: 9},
            {x: 10, y: 14},
            {x: 11, y: 11},
            {x: 12, y: 12},
            {x: 13, y: 8},
            {x: 14, y: 3},
            {x: 15, y: 1}
        ];
        return (
            <div className = "area-display">
                <XYPlot margin={{ Bottom: 40, top: 20}} height={600} width= {600} yDomain={[0, 18]}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <AreaSeries curve="curveMonotoneX" data={data} color="#90A5E9"/>
                </XYPlot>
            </div>
        );
    }
    render()
    {
        let output = this.renderArea();
        let myName = "Area";
        let string = `
    import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines,AreaSeries} from 'react-vis';

    const data = [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0}
    ];
    return (
      <div>
        <XYPlot height={500} width= {500}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <AreaSeries data={data} color="#cd3b54"/>
        </XYPlot>
      </div>
    );

    `;
        let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);
        return(
            <div>
                <MyTemplete content = {output} name = {myName} sampleUsage = {code}/>
            </div>
        );
    }
}

export default MyArea;
