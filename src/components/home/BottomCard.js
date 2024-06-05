import React from 'react'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BottomCard = (props) => {
    return (
        <Card style={{ background: props.bg, padding: '1rem', borderRadius: '2px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', paddingTop: '1rem', paddingBottom: '.1rem' }}>
            <Card.Body
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'around',
                    justifyContent: 'center',
                    gap: '1rem',
                    // padding: '1rem'
                }}
            >
                <FontAwesomeIcon
                    icon={props.icon}
                    style={{
                        fontSize: '2rem',
                        color: props.color
                    }}
                />

                <Card.Title>
                    <h4
                        style={{
                            color: props.color,
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            // fontSize: '0.8rem',
                            fontFamily: `'Montserrat', sans-serif`
                        }}
                    >
                        {props.title}
                    </h4>
                </Card.Title>

                <h1
                    style={{
                        fontWeight: '300',
                        fontSize: '1.5rem',
                        color: props.bodyColor,
                        fontFamily: `'Montserrat', sans-serif`
                    }}
                >
                    {props.body}
                </h1>
            </Card.Body>
        </Card>
    )
}

export default BottomCard