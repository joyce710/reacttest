import React, { Component } from 'react';
import MyTemplete  from '../../../templete/index.js';
import CodeBlock from '../../../CodeBlock.js';
import ReactMarkdown from 'react-markdown';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineMarkSeries, VerticalGridLines} from 'react-vis';


class MyLineMark extends Component
{

  renderLineMark()
  {
    const data1 = [
      {x: 0, y: 4},
      {x: 1, y: 15},
      {x: 2, y: 7},
      {x: 3, y: 5},
      {x: 4, y: 3},
      {x: 5, y: 9},
      {x: 6, y: 18},
      {x: 7, y: 13},
      {x: 8, y: 10},
      {x: 9, y: 4},
      {x: 10, y: 0},
      {x: 11, y: 17},
      {x: 12, y: 22},
      {x: 13, y: 25},
      {x: 14, y: 20},
      {x: 15, y: 12}
    ];
    const data2 = [
      {x: 0, y: 10},
      {x: 1, y: 11},
      {x: 2, y: 8},
      {x: 3, y: 9},
      {x: 4, y: 6},
      {x: 5, y: 18},
      {x: 6, y: 8},
      {x: 7, y: 20},
      {x: 8, y: 6},
      {x: 9, y: 0},
      {x: 10, y: 22},
      {x: 11, y: 11},
      {x: 12, y: 25},
      {x: 13, y: 16},
      {x: 14, y: 15},
      {x: 15, y: 14}
    ];
    return (
      <div className = "lineMark-display">
        <XYPlot margin={{Bottom: 20, top: 30}} xDomain={[0, 16]} yDomain={[0, 26]} width={700} height={700}>
        <VerticalGridLines/>
        <HorizontalGridLines/>
        <XAxis />
        <YAxis />
        <LineMarkSeries
          className="linemark-series-example"
          style={{
            strokeWidth: '3px'
          }}
          lineStyle={{stroke: 'lightgreen'}}
          markStyle={{stroke: 'grey'}}
          data={data1}
          curve={'curveMonotoneX'}
        />
        <LineMarkSeries
          className="linemark-series-example-2"
          style={{
            strokeWidth: '3px'
          }}
          lineStyle={{stroke: 'yellow'}}
          markStyle={{stroke: 'pink'}}
          curve={'curveMonotoneX'}
          data={data2}
        />
      </XYPlot>
    </div>
    );
  }
  render()
  {
    let output = this.renderLineMark();
    let myName = "LineMark";
    let string = `
    import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineMarkSeries, VerticalGridLines} from 'react-vis';

    renderLineMark()
    {
      const data1 = [
        {x: 0, y: 4},
        {x: 1, y: 18},
        {x: 2, y: 2},
        {x: 3, y: 9},
      ];
      const data2 = [
        {x: 0, y: 10},
        {x: 1, y: 6},
        {x: 2, y: 2},
        {x: 3, y: 0},
      ];
      return (
        <div>
          <XYPlot width={300} height={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineMarkSeries
            className="linemark-series-example"
            data={data1}
          />
          <LineMarkSeries
            className="linemark-series-example-2"
            data={data2}
          />
        </XYPlot>
      <div>
      );`;
    let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);
    return(
      <div>
      <MyTemplete content = {output} name = {myName} sampleUsage = {code}/>
      </div>
    );
  }
}

export default MyLineMark;
