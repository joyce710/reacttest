import React, { Component } from 'react';
import MyTemplete  from '../../../templete/index.js';
import CodeBlock from '../../../CodeBlock.js';
import ReactMarkdown from 'react-markdown';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines} from 'react-vis';


class MyLine extends Component
{

  renderLine()
  {
    const data = [
      {x: 0, y: 8},
      {x: 1, y: 2},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 6},
      {x: 5, y: 7},
      {x: 6, y: 0},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0},
      {x: 10, y: 3},
      {x: 11, y: 11},
      {x: 12, y: 5},
      {x: 13, y: 7},
      {x: 14, y: 1},
      {x: 15, y: 3}
    ];
    return (
      <div className = "line-display">
        <XYPlot margin={{Bottom: 20, top: 30}} height={700} width= {700} yDomain={[0, 12]} xDomain={[0, 16]}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries data={data} />
        </XYPlot>
      </div>
    );
  }
  render()
  {
    let output = this.renderLine();
    let myName = "Line";
    let string = `
    import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines} from 'react-vis';

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
          <LineSeries data={data} />
        </XYPlot>
      </div>
    );`;
    let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);
    return(
      <div>
      <MyTemplete content = {output} name = {myName} sampleUsage = {code}/>
      </div>
    );
  }
}

export default MyLine;
