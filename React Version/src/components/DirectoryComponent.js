import React, { Component } from 'react';

class Directory extends Component {
    constructor (props) {
        super(props);
        this.state = {
            salon: [
                {
                    id: 0,
                    name: 'Glamour',
                    image: 'assets/images/salon_image1.jpg',
                },
                {
                    id: 1,
                    name: 'Style',
                    image: 'assets/images/salon_image2.jpg',
                },
                {
                    id: 2,
                    name: 'Unique',
                    image: 'assets/images/salon_image3.jpg',
                }
            ],
        };
    }

    render() {
        const directory = this.state.salons.map(salon => {
            return (
                <div key={ salon.id }className="col">
                    <img src={ salon.image } alt={ salon.name } />
                    <h2>{ salon.name }</h2>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    { directory }
                </div>
            </div>
        );
    }
}

export default Directory;