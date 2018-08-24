'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Animated, ART, View} from 'react-native';
const { Surface } = ART;

import Circle from 'react-native-loader/src/animated/Circle';

export default class BubblesLoader extends Component {
    static propTypes = {
        size: PropTypes.number,
        color: PropTypes.string,
        spaceBetween: PropTypes.number
    };

    static defaultProps = {
        spaceBetween: 3,
        size: 11,
        color: '#000'
    };

    state = {
        circles: [
            new Animated.Value(0),
            new Animated.Value(0.1),
            new Animated.Value(0.2),
            new Animated.Value(0.3),
            new Animated.Value(0.4),
            new Animated.Value(0.5),
            new Animated.Value(0.6),
            new Animated.Value(0.7),
            new Animated.Value(0.8)
        ]
    };

    componentDidMount() {
        this.state.circles.forEach((val, index) => {
            const timer = setTimeout(() => this.animate(index), index * 100);
            this.timers.push(timer);
        });
    }

    componentWillUnmount() {
        this.timers.forEach((timer) => {
            clearTimeout(timer);
        });

        this.unmounted = true;
    }

    timers = [];

    animate(index) {
        Animated
            .sequence([
                Animated.timing(this.state.circles[index], {
                    toValue: 1,
                    duration: 600
                }),
                Animated.timing(this.state.circles[index], {
                    toValue: 0.5,
                    duration: 600
                })
            ])
            .start(() => {
                if (!this.unmounted) {
                    this.animate(index);
                }
            });
    }

    renderBubble(index) {
        const { size, spaceBetween, color } = this.props;
        const scale = this.state.circles[index];
        const offset = {
            x: size + (index % 3) * (size * 2 + spaceBetween),
            y: size
        };

        return (<Circle
            fill={color}
            radius={size}
            scale={scale}
            {...offset}
        />);
    }

    render() {
        const { size, spaceBetween } = this.props;
        const width = size * 6 + spaceBetween * 2;
        const height = size * 2;

        return (
            <View style={{backgroundColor:'rgba(0,0,0,0)', paddingLeft:15, paddingRight:15,paddingTop:15, paddingBottom:15, borderRadius:15}}>
                <Surface width={width} height={height} style={{marginBottom:3}}>
                    {this.renderBubble(0)}
                    {this.renderBubble(1)}
                    {this.renderBubble(2)}
                </Surface>
                <Surface width={width} height={height} style={{marginBottom:3}}>
                    {this.renderBubble(3)}
                    {this.renderBubble(4)}
                    {this.renderBubble(5)}
                </Surface>
                <Surface width={width} height={height}>
                    {this.renderBubble(6)}
                    {this.renderBubble(7)}
                    {this.renderBubble(8)}
                </Surface>
            </View>
        );
    }
}