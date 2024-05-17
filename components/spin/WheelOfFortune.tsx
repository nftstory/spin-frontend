import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

interface WheelOfFortuneProps {
    segments: { label: string; value: number, color: string }[];
    onSpinEnd?: (winner: string) => void;
}

const WheelOfFortune: React.FC<WheelOfFortuneProps> = ({ segments, onSpinEnd }) => {
    const ref = useRef(null);
    const [isSpinning, setSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        if (!segments) return;
        const svg = d3.select(ref.current);
        svg.selectAll("*").remove();

        const width = 350;
        const height = 350;
        const radius = Math.min(width, height) / 2;

        const pie = d3.pie<{ label: string; value: number, color: string }>()
            .value(d => d.value)(segments);

        const arc = d3.arc<d3.PieArcDatum<{ label: string; value: number, color: string }>>()
            .innerRadius(0)
            .outerRadius(radius);

        const g = svg.attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2}) rotate(${rotation})`);

        g.selectAll('path')
            .data(pie)
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', d => d.data.color)
            .attr('stroke', 'white')
            .style('stroke-width', '2px');

        g.selectAll('text')
            .data(pie)
            .enter()
            .append('text')
            .attr("transform", d => `translate(${arc.centroid(d)})`)
            .attr("text-anchor", "middle")
            .text(d => d.data.label)
            .style("fill", "#fff")
            .style("font-size", "1rem");

    }, [segments, rotation]);

    const spinWheel = () => {
        if (isSpinning) return;

        const duration = 3000;
        const spins = Math.floor(Math.random() * 360) + 360 * 5;

        d3.transition()
            .duration(duration)
            .tween("rotate", () => {
                const interpolate = d3.interpolate(rotation, rotation + spins);
                return t => {
                    setRotation(interpolate(t));
                };
            })
            .on('end', () => {
                setSpinning(false);
                const finalAngle = (rotation + spins) % 360;
                const winningIndex = Math.floor((360 - finalAngle) / (360 / segments.length));
                onSpinEnd && onSpinEnd(segments[winningIndex].label);
            });

        setSpinning(true);
    };

    return (
        <>
            <svg ref={ref}></svg>
            <br />
            <br />
            <button onClick={spinWheel} disabled={isSpinning}>
                Spin the wheel!
            </button>
        </>
    );
};

export default WheelOfFortune;

