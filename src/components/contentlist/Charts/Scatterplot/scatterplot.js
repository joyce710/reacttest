import React, { Component } from 'react';
import MyTemplete  from '../../../templete/index.js';
import CodeBlock from '../../../CodeBlock.js';
import ReactMarkdown from 'react-markdown';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, MarkSeries} from 'react-vis';


class MyScatterplot extends Component
{

  renderScatterplot()
  {
    const data = [
      {x: 0, y: 8, size: 12},
      {x: 1, y: 5, size: 10},
      {x: 2, y: 4, size: 5},
      {x: 2, y: 1, size: 10},
      {x: 3, y: 9, size: 5},
      {x: 4, y: 1, size: 10},
      {x: 4, y: 4, size: 15},
      {x: 5, y: 7, size: 10},
      {x: 6, y: 6, size: 10},
      {x: 7, y: 3, size: 5},
      {x: 8, y: 2, size: 10},
      {x: 8, y: 6, size: 5},
      {x: 9, y: 8, size: 12},
      {x: 10, y: 0, size: 5},
      {x: 10, y: 5, size: 10},
      {x: 3, y: 3, size: 5},
      {x: 6, y: 10, size: 15},
      {x: 0, y: 2, size: 5}
    ];
    return (
      <div className = "scatterplot-display">
        <XYPlot margin={{Bottom: 20, top: 30}} height={500} width= {500}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <MarkSeries data={data} sizeRange={[5, 15]}/>
        </XYPlot>
      </div>
    );
  }
  render()
  {
    let output = this.renderScatterplot();
    let myName = "Scatterplot";
    let string = `
    import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, MarkSeries} from 'react-vis';

    const data = [
      {x: 0, y: 8, size: 15},
      {x: 1, y: 5, size: 10},
      {x: 2, y: 4, size: 5},
      {x: 3, y: 9, size: 5},
      {x: 4, y: 1, size: 10},
      {x: 5, y: 7, size: 10},
      {x: 6, y: 6, size: 10},
      {x: 7, y: 3, size: 5},
    ];
    return (
      <div>
        <XYPlot height={500} width= {500}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <MarkSeries data={data} sizeRange={[5, 15]}/>
        </XYPlot>
      </div>
    ); `;
    let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);
    return(
      <div>
      <MyTemplete content = {output} name = {myName} sampleUsage = {code}/>
      </div>
    );
  }
}

export default MyScatterplot;
