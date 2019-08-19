import React, { Component } from 'react';
import {XYPlot, XAxis, YAxis, MarkSeries, CircularGridLines} from 'react-vis';
import MyTemplete  from '../../../templete/index.js';
import CodeBlock from '../../../CodeBlock.js';
import ReactMarkdown from 'react-markdown';

class MyCircularGridLine extends Component
{

  renderCircular()
  {
    const data = [
      {r: 1, theta: Math.PI / 3, size: 8},
      {r: 2, theta: (2 * Math.PI) / 3, size: 10},
      {r: 2.5, theta: Math.PI, size: 5},
      {r: 3, theta: (9 * Math.PI) / 5, size: 12},
      {r: 4, theta: Math.PI / 4, size: 5},
      {r: 6, theta: (6 * Math.PI) / 4, size: 10},
      {r: 5, theta: Math.PI / 3, size: 5},
      {r: 8, theta: (2 * Math.PI) , size: 15},
      {r: 8.5, theta: Math.PI, size: 15},
      {r: 9.2, theta: (7 * Math.PI) / 4, size: 12},
      {r: 10, theta: Math.PI / 4, size: 5},
      {r: 6, theta: (4 * Math.PI) / 3, size: 15},
      {r: 10, theta: (5 *Math.PI) / 4, size: 15},
      {r: 8, theta: (4 * Math.PI) / 3 , size: 10},
      {r: 7.7, theta: (4 * Math.PI) /5, size: 9},
      {r: 9.5, theta: (3* Math.PI) / 2, size: 12},
      {r: 8, theta: (Math.PI) / 2, size: 15},
    ];

    const margin = {
      top: 20,
      bottom: 20,
      left: 20,
      right: 20
    };

    const WIDTH = 600;
    const HEIGHT = 600;

    return (
      <div className = "circular-display">
        <XYPlot
        margin={margin}
        xDomain={[-10, 10]}
        yDomain={[-10, 10]}
        width={WIDTH}
        height={HEIGHT}
        >
        <CircularGridLines />
        <XAxis top={(HEIGHT - margin.top) / 2} />
        <YAxis left={(WIDTH - margin.left - margin.right) / 2} />
        <MarkSeries
          strokeWidth={2}
          sizeRange={[5, 15]}
          data={data.map(row => ({
            ...row,
            x: Math.cos(row.theta) * row.r,
            y: Math.sin(row.theta) * row.r
          }))}
        />
      </XYPlot>
      </div>
    );
  }
  render()
  {
    let output = this.renderCircular();
    let myName = "Circular Grid Line";
    let string = `
    import {XYPlot, XAxis, YAxis, MarkSeries, CircularGridLines} from 'react-vis';

    renderCircular()
    {
      const data = [
        {r: 1, theta: Math.PI / 2, size: 10},
        {r: 2, theta: (3 * Math.PI) / 2, size: 15},
        {r: 2.5, theta: Math.PI, size: 5},
        {r: 3, theta: (8 * Math.PI) / 5, size: 5},
      ];

      const WIDTH = 300;
      const HEIGHT = 300;

      return (
        <div>
          <XYPlot
          margin={margin}
          xDomain={[-4, 4]}
          yDomain={[-4, 4]}
          width={WIDTH}
          height={HEIGHT}
          >
          <CircularGridLines />
          <XAxis top={(HEIGHT) / 2} />
          <YAxis left={(WIDTH) / 2} />
          <MarkSeries
            strokeWidth={2}
            sizeRange={[5, 15]}
            data={data.map(row => ({
              ...row,
              x: Math.cos(row.theta) * row.r,
              y: Math.sin(row.theta) * row.r
            }))}
          />
        </XYPlot>
        </div>
      );
    }
    `;
    let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);
    return(
      <div>
      <MyTemplete content = {output} name = {myName} sampleUsage = {code}/>
        {console.log(output)}
      </div>
    );
  }
}

export default MyCircularGridLine;
