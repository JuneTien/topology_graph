import React, { Component } from 'react';
import * as d3 from 'd3';

class TopologyGraph extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount = () => {

    const data = {
      "nodes": [
        {"name": "ROOT", "group": 1},
        {"name": "Device_1", "group": 2},
        {"name": "Device_2", "group": 2},
        {"name": "Device_3", "group": 2},
        {"name": "Device_4", "group": 2},
        {"name": "Device_21", "group": 3},
        {"name": "Device_22", "group": 3}
      ],
      "links": [
        {"source": 0, "target": 1},
        {"source": 0, "target": 2},
        {"source": 0, "target": 3},
        {"source": 0, "target": 4},
        {"source": 2, "target": 5},
        {"source": 2, "target": 6}
      ]
    };

    let height = document.body.clientHeight;
    let width = document.body.clientWidth;

    const force = d3.layout.force()
      .charge(-500) // power of repel
      .linkDistance(100)
      .size([width, height])
      // .size([400, 400])
      .nodes(data.nodes)
      .links(data.links);

    const svg = d3.select(this.refs.mountPoint)
      .append('svg')
      // .attr('width', '100%')
      .attr('width', width)
      // .attr('height', '100%');
      .attr('height', height);

    const link = svg.selectAll('line')
      .data(data.links)
      .enter()
      .append('line')
      .style('stroke', '#999999')
      .style('stroke-opacty', 0.6)
      .style('stroke-width', 1.5); // wide of line

    const color = d3.scale.category20();
    const node = svg.selectAll('circle')
      .data(data.nodes)
      .enter()
      .append('g')
      .style('cursor', 'pointer')
      .call(force.drag);

    node.append('circle') 
      .attr('r', 10) // radius
      .style('stroke', '#FFFFFF')
      .style('stroke-width', 1.5) // wide of edge-line
      .style('fill', (d) => color(d.group));

    node.append('text')
      .style("font-size", "12px")
      .text((d) => d.name);

    force.on('tick', () => {
      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y);

      node
        .attr('transform', (d) => { return 'translate(' + d.x + ',' + d.y + ')'; });
    });


    force.start();

  }

  render() {
    return (
      <div>
        <div ref="mountPoint"/>
      </div>
    );
  }
}

export default TopologyGraph;
