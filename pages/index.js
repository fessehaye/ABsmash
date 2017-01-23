import React from 'react'
import Page from '../layout/layout'
import {Carousel} from 'react-bootstrap'

export default class extends React.Component {
    render(){
        return (
            <Page>
                <Carousel>
                    <Carousel.Item>
                        <img width={1200} height={500} alt="900x500" src="/static/blank.png"/>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1200} height={500} alt="900x500" src="/static/blank.png"/>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1200} height={500} alt="900x500" src="/static/blank.png"/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Page>
            )
    }
}