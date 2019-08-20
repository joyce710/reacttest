import React, { Component } from 'react';
import MyTemplete  from '../../../templete/index.js';
import CodeBlock from '../../../CodeBlock.js';
import ReactMarkdown from 'react-markdown';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines,VerticalBarSeries} from 'react-vis';


class MyStackedBar extends Component
{

  renderStackedBar()
  {
    const data1 = [
      {x: 'Apple', y: 20},
      {x: 'Banana', y: 10},
      {x: 'Orange', y: 5},
      {x: 'peach', y: 8},
      {x: 'Lime', y: 15},
      {x: 'blueberry', y: 3},
      {x: 'cherry', y: 13},
      {x: 'strawberry', y: 6}
    ];

    const data2 = [
      {x: 'Apple', y: 10},
      {x: 'Banana', y: 20},
      {x: 'Orange', y: 10},
      {x: 'peach', y: 20},
      {x: 'Lime', y: 5},
      {x: 'blueberry', y: 9},
      {x: 'cherry', y: 5},
      {x: 'strawberry', y: 20}
    ];

    const data3 = [
      {x: 'Apple', y: 20},
      {x: 'Banana', y: 16},
      {x: 'Orange', y: 10},
      {x: 'peach', y: 12},
      {x: 'Lime', y: 5},
      {x: 'blueberry', y: 14},
      {x: 'cherry', y: 8},
      {x: 'strawberry', y: 17}

    ];

    return (
      <div className = "stack-display">
        <XYPlot margin={{Bottom: 70, top: 30}} xType="ordinal" width={500} height={600} stackBy="y" yDomain={[0, 50]}>
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
          <VerticalBarSeries
            data={data3}
          />
        </XYPlot>
      </div>
    );
  }
  render()
  {
    let output = this.renderStackedBar();
    let myName = "Stacked Bar";
    let string = `
    import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines,VerticalBarSeries} from 'react-vis';

    const data1 = [
      {x: 'Apple', y: 20},
      {x: 'Banana', y: 10},
      {x: 'Orange', y: 5}
    ];

    const data2 = [
      {x: 'Apple', y: 10},
      {x: 'Banana', y: 20},
      {x: 'Orange', y: 10}
    ];

    const data3 = [
      {x: 'Apple', y: 20},
      {x: 'Banana', y: 10},
      {x: 'Orange', y: 10}
    ];

    return (
      <XYPlot margin={{Bottom: 70}} xType="ordinal" width={500} height={500} stackBy="y">
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
        <VerticalBarSeries
          data={data3}
        />
      </XYPlot>
    );`;
    let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);
    return(
      <div>
      <MyTemplete content = {output} name = {myName} sampleUsage = {code}/>
      </div>
    );
  }
}

export default MyStackedBar;
