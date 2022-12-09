import React, { Component } from 'react'

import './Main.css'
import Fondo_ControllerTest from '../../../../../Assets/Imgs/fondos/tecnologia_126283-1691_.png'

import { Box, Typography } from '@mui/material'

export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Box className="main_inicio"
                    sx={{
                        height: 480,
                        padding: '60px 30px',
                    }}
                >
                    <Typography
                        sx={{
                            marginLeft: '20px',
                            font: 700,
                            textShadow: '0 1px 1px black',
                        }}
                    >
                        Optimice
                        <Typography
                            marginRight={1} marginLeft={1}
                            variant="solid" color="primary">
                            costos y presupuestos
                        </Typography>
                        para la toma de decisones.
                    </Typography>
                    <Box
                        marginLeft={2}
                        marginTop={10}
                    >
                        <Typography
                            variant='h3'
                            sx={{
                                font: 700,
                                textShadow: ' gray 0px 1px 1px solid'
                            }}
                        >
                            Software inteligente para controllers
                        </Typography>
                        <Typography
                            variant='h5'
                        >
                            Basada en la nube
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            marginTop: 5,
                            backgroundImage: `url(${Fondo_ControllerTest})`,
                            backgroundPositionY: '-60px',
                            backgroundPositionX: 'center',
                            width: '100%',
                            height: '120px',
                        }}
                    >
                    </Box>

                </Box>

            </React.Fragment>
        )
    }
}
