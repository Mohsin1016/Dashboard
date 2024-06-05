import React from 'react'
import Card from 'react-bootstrap/Card';

const TopCard = (props) => {
    return (
        <Card
            className='card'
            style={{
                padding: '1rem',
                borderRadius: '2px',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                background: props.bg
            }}
        >
            <Card.Body>
                <Card.Title>
                    <h4
                        style={{
                            fontWeight: 'bold',
                            color: 'white',
                            fontFamily: `'Montserrat', sans-serif`
                        }}
                    >
                        {props.title}
                    </h4>
                </Card.Title>

                <Card.Body
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2rem',
                    }}
                >
                    <h2
                        style={{
                            color: props.color,
                            fontWeight: 'bolder',
                            fontFamily: `'Montserrat', sans-serif`
                        }}
                    >
                        {props.body}
                    </h2>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <p
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '.8rem',
                                fontFamily: `'Montserrat', sans-serif`
                            }}
                        >
                            Impression - {props.impression}%
                        </p>
                    </div>
                </Card.Body>
            </Card.Body>
        </Card>

    )
}

export default TopCard