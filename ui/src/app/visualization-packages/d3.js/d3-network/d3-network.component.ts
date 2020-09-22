import { Component, OnChanges, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3-network',
  templateUrl: './d3-network.component.html',
  styleUrls: ['./d3-network.component.scss']
})
export class D3NetworkComponent implements OnChanges {

  constructor() { }

  ngOnChanges(): void {
    this.createChart();
  }

  onResize(event) {
    this.createChart();
  }

  createChart() {
    // tslint:disable-next-line: one-variable-per-declaration
    const svg = d3.select('svg'),
      width = +svg.attr('width'),
      height = +svg.attr('height');

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const simulation = d3.forceSimulation()
      // tslint:disable-next-line: only-arrow-functions
      .force('link', d3.forceLink().id(function (d) { return d.id; }))
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(width / 2, height / 2));

    // tslint:disable-next-line: only-arrow-functions
    d3.json('miserables.json', (error, graph) => {
      if (error) { throw error; }

      const link = svg.append('g')
        .attr('class', 'links')
        .selectAll('line')
        .data(graph.links)
        .enter().append('line')
        // tslint:disable-next-line: only-arrow-functions
        .attr('stroke-width', function (d) { return Math.sqrt(d.value); });

      const node = svg.append('g')
        .attr('class', 'nodes')
        .selectAll('g')
        .data(graph.nodes)
        .enter().append('g')

      const circles = node.append('circle')
        .attr('r', 5)
        .attr('fill', function (d) { return color(d.group); })
        .call(d3.drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended));

      const lables = node.append('text')
        .text(function (d) {
          return d.id;
        })
        .attr('x', 6)
        .attr('y', 3);

      node.append('title')
        .text(function (d) { return d.id; });

      simulation
        .nodes(graph.nodes)
        .on('tick', ticked);

      simulation.force('link')
        .links(graph.links);

      function ticked() {
        link
          .attr('x1', function (d) { return d.source.x; })
          .attr('y1', function (d) { return d.source.y; })
          .attr('x2', function (d) { return d.target.x; })
          .attr('y2', function (d) { return d.target.y; });

        node
          .attr('transform', function (d) {
            return 'translate(' + d.x + ',' + d.y + ')';
          })
      }
    });

    function dragstarted(d) {
      if (!d3.event.active) { simulation.alphaTarget(0.3).restart(); }
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) { simulation.alphaTarget(0); }
      d.fx = null;
      d.fy = null;
    }
  }

}