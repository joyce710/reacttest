import React, { Component } from 'react';
import MyTemplete  from '../../../templete/index.js';
import CodeBlock from '../../../CodeBlock.js';
import ReactMarkdown from 'react-markdown';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines,VerticalBarSeries} from 'react-vis';

class MyVerticalBar extends Component
{

  renderBar()
  {
    const data1 = [
      {x: 'blueberry', y: 14},
      {x: 'cherry', y: 8},
      {x: 'strawberry', y: 17},
      {x: 'Apple', y: 12},
      {x: 'Banana', y: 11},
      {x: 'Orange', y: 19},
      {x: 'Peach', y: 9},
      {x: 'Lime', y: 15}
    ];

    const data2 = [
      {x: 'blueberry', y: 9},
      {x: 'cherry', y: 12},
      {x: 'strawberry', y: 10},
      {x: 'Apple', y: 20},
      {x: 'Banana', y: 18},
      {x: 'Orange', y: 6},
      {x: 'Peach', y: 15},
      {x: 'Lime', y: 19}
    ];

    return (
      <div className = "bar-display">
        <XYPlot margin={{left: 70, top: 20}} xType="ordinal" width={500} height={500} yDomain={[0, 30]}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis  />
          <YAxis />
          <VerticalBarSeries
            data={data1}
          />
          <VerticalBarSeries
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
    import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines,VerticalBarSeries} from 'react-vis';

    const data1 = [
      {x: 'Apple', y: 10},
      {x: 'Banana', y: 12},
      {x: 'Orange', y: 4},
    ];

    const data2 = [
      {x: 'Apple', y: 18},
      {x: 'Banana', y: 15},
      {x: 'Orange', y: 7},
    ];

    return (
      <XYPlot margin={{left: 70}} xType="ordinal" width={500} height={500} yDomain={[0, 30]}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis  />
        <YAxis />
        <VerticalBarSeries
          data={data1}
        />
        <VerticalBarSeries
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

export default MyVerticalBar;
