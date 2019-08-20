import React, { Component } from 'react';
import MyTemplete  from '../../../templete/index.js';
import CodeBlock from '../../../CodeBlock.js';
import ReactMarkdown from 'react-markdown';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines,HorizontalBarSeries} from 'react-vis';
class MyHorizontalBar extends Component
{

  renderBar()
  {
    const data1 = [
      {x: 25, y: 'Apple'},
      {x: 10, y: 'Banana'},
      {x: 17, y: 'Orange'},
      {x: 23, y: 'Peach'},
      {x: 15, y: 'Lime'}
    ];

    const data2 = [
      {x: 10, y: 'Apple'},
      {x: 20, y: 'Banana'},
      {x: 5, y: 'Orange'},
      {x: 10, y: 'Peach'},
      {x: 20, y: 'Lime'}
    ];

    return (
      <div className = "bar-display">
        <XYPlot margin={{left: 70, top: 20}} yType="ordinal" width={500} height={500} xDomain={[0, 26]}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis  />
          <YAxis />
          <HorizontalBarSeries
            data={data1}
          />
          <HorizontalBarSeries
            data={data2}
          />
        </XYPlot>
      </div>
    );
  }
  render()
  {
    let output = this.renderBar();
    let myName = "Bar";
    let string = `
    import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines,HorizontalBarSeries} from 'react-vis';

    const data1 = [
      {x: 20, y: 'Apple'},
      {x: 10, y: 'Banana'},
      {x: 15, y: 'Orange'}
    ];

    const data2 = [
      {x: 10, y: 'Apple'},
      {x: 20, y: 'Banana'},
      {x: 5, y: 'Orange'}
    ];

    return (
      <XYPlot margin={{left: 70}} yType="ordinal" width={500} height={500} xDomain={[0, 23]}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis  />
        <YAxis />
        <HorizontalBarSeries
          data={data1}
        />
        <HorizontalBarSeries
          data={data2}
        />
      </XYPlot>
    )
    `;
    let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);
    return(
      <div>
      <MyTemplete content = {output} name = {myName} sampleUsage = {code}/>
      </div>
    );
  }
}

export default MyHorizontalBar;
