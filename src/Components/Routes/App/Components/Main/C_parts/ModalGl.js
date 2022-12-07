import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Image } from '@material-ui/icons';

import ico_addContrato from '../../../../../../Assets/Imgs/icos/ico_addContrato.png';
import { FormGroup, Grid, Input, TextField, IconButton } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    alingItems: 'center',

};
class ModalGl extends Component {

    constructor(props) {
        super(props);
        this.handleClose = this.props.handleClose //funcion cerrar modal
        this.ws = this.props.ws
        this.titles = this.props.titles
    }

    SendAddLocalidad = () => {
        let datos = {
            
        }
        try {
            this.ws.onopen = () => {
                console.log('solicitando datos iniciales')
                this.ws.send(JSON.stringify(datos))
            }
            this.ws.onerror = () => {
                console.log('Error de conexion, cierre la aplicación y verifique su conexión, o contacte a soporte técnico')
            }
        } catch (error) {
            console.log('error enviando datos al servidor, revise su conexion: ', error)
        }
    }

    render() {
        if (this.props.dataModal === 'add_localidad') {
            return (
                <Modal
                    open={this.props.openModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Box style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' , width:'100%', backgroundColor: ''}}>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <img alt='ico_add_folder' style={{ width: '50px' }} src={ico_addContrato} />
                                {this.titles.add_localidad}
                            </Typography>
                            <IconButton aria-label="cerrarModal" color='error'  onClick={this.handleClose}>
                                cerrar
                            </IconButton>
                        </Box>
                       
                        <br />
                        <form onSubmit={() => alert('e')}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField fullWidth placeholder='Ingrese el nombre' />
                                </Grid>
                                <Grid item xs={3}  >
                                    <TextField fullWidth placeholder='centro de costo' />
                                </Grid>
                                <Grid item xs={9} >
                                    <TextField fullWidth placeholder='' />
                                </Grid>
                                <Grid item xs={6} lg={6} >
                                    <TextField fullWidth placeholder='Pais de ubicación' />
                                </Grid>
                                <Grid item xs={6} lg={6} >
                                    <TextField fullWidth placeholder='Dpto. geográfico' />
                                </Grid>
                                <Grid item xs={6} lg={6} >
                                    <TextField fullWidth placeholder='Ingrese la ciudad ' />
                                </Grid>
                                <Grid item xs={6} lg={6} >
                                    <TextField fullWidth placeholder='Dirección física' />
                                </Grid>
                                <Grid item xs={12} lg={12} >Almacene las sedes desde archivo excel</Grid>
                                <Grid item xs={12} md={7} lg={6}>
                                    <input
                                        type="file"
                                        name="fileInput"
                                        id="fileInput"
                                        className=" form-control input_text_index"
                                        autoComplete="off"
                                        placeholder="Almacene las sedes desde archivo excel"
                                    />
                                </Grid>
                                <Grid item xs={12} md={5} lg={6} >
                                    <Input
                                        style={{ color: 'white' }}
                                        fullWidth
                                        className="btn btn-info"
                                        type="submit"
                                        value="ENVIAR"
                                    />
                                </Grid>
                                <br />
                            </Grid>
                        </form>
                    </Box>
                </Modal >
            );
        }
        if (this.props.dataModal === 'edit_localidad') {
            return (
                <Modal
                    open={this.props.openModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Box style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' , width:'100%', backgroundColor: ''}}>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <img alt='ico_add_folder' style={{ width: '50px' }} src={ico_addContrato} />
                                {this.titles.edit_localidad}
                            </Typography>
                            <IconButton aria-label="cerrarModal" color='error'  onClick={this.handleClose}>
                                cerrar
                            </IconButton>
                        </Box>
                        <br />
                        <form onSubmit={() => alert('e')}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField fullWidth placeholder='Ingrese el nombre' />
                                </Grid>
                                <Grid item xs={3}  >
                                    <TextField fullWidth placeholder='Tipo ident.' />
                                </Grid>
                                <Grid item xs={9} >
                                    <TextField fullWidth placeholder='N. de Identificación' />
                                </Grid>
                                <Grid item xs={6} lg={6} >
                                    <TextField fullWidth placeholder='Pais de ubicación' />
                                </Grid>
                                <Grid item xs={6} lg={6} >
                                    <TextField fullWidth placeholder='Dpto. geográfico' />
                                </Grid>
                                <Grid item xs={6} lg={6} >
                                    <TextField fullWidth placeholder='Ingrese la ciudad ' />
                                </Grid>
                                <Grid item xs={6} lg={6} >
                                    <TextField fullWidth placeholder='Dirección física' />
                                </Grid>
                                <Grid item xs={12} lg={12} >Almacene las sedes desde archivo excel</Grid>
                                <Grid item xs={12} md={7} lg={6}>
                                    <input
                                        type="file"
                                        name="fileInput"
                                        id="fileInput"
                                        className=" form-control input_text_index"
                                        autoComplete="off"
                                        placeholder="Almacene las sedes desde archivo excel"
                                    />
                                </Grid>
                                <Grid item xs={12} md={5} lg={6} >
                                    <Input
                                        style={{ color: 'white' }}
                                        fullWidth
                                        className="btn btn-info"
                                        type="submit"
                                        value="ENVIAR"
                                    />
                                </Grid>
                                <br />
                            </Grid>
                        </form>
                    </Box>
                </Modal >
            );
        }
        if (this.props.dataModal === 'print_localidades') {
            return (
                <Modal
                    open={this.props.openModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Box style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' , width:'100%', backgroundColor: ''}}>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <img alt='ico_add_folder' style={{ width: '50px' }} src={ico_addContrato} />
                                {this.titles.print_localidades}
                            </Typography>
                            <IconButton aria-label="cerrarModal" color='error'  onClick={this.handleClose}>
                                cerrar
                            </IconButton>
                        </Box>
                        <br />
                        <form onSubmit={() => alert('e')}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField fullWidth placeholder='Ingrese el nombre' />
                                </Grid>
                                <Grid item xs={3}  >
                                    <TextField fullWidth placeholder='Tipo ident.' />
                                </Grid>
                                <Grid item xs={9} >
                                    <TextField fullWidth placeholder='N. de Identificación' />
                                </Grid>
                                <Grid item xs={6} lg={6} >
                                    <TextField fullWidth placeholder='Pais de ubicación' />
                                </Grid>
                                <Grid item xs={6} lg={6} >
                                    <TextField fullWidth placeholder='Dpto. geográfico' />
                                </Grid>
                                <Grid item xs={6} lg={6} >
                                    <TextField fullWidth placeholder='Ingrese la ciudad ' />
                                </Grid>
                                <Grid item xs={6} lg={6} >
                                    <TextField fullWidth placeholder='Dirección física' />
                                </Grid>
                                <Grid item xs={12} lg={12} >Almacene las sedes desde archivo excel</Grid>
                                <Grid item xs={12} md={7} lg={6}>
                                    <input
                                        type="file"
                                        name="fileInput"
                                        id="fileInput"
                                        className=" form-control input_text_index"
                                        autoComplete="off"
                                        placeholder="Almacene las sedes desde archivo excel"
                                    />
                                </Grid>
                                <Grid item xs={12} md={5} lg={6} >
                                    <Input
                                        style={{ color: 'white' }}
                                        fullWidth
                                        className="btn btn-info"
                                        type="submit"
                                        value="ENVIAR"
                                    />
                                </Grid>
                                <br />
                            </Grid>
                        </form>
                    </Box>
                </Modal >
            );
        }
        if (this.props.dataModal === 'del_localidades') {
            return (
                <Modal
                    open={this.props.openModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Box style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' , width:'100%', backgroundColor: ''}}>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <img alt='ico_add_folder' style={{ width: '50px' }} src={ico_addContrato} />
                                {this.titles.del_localidades}
                            </Typography>
                            <IconButton aria-label="cerrarModal" color='error'  onClick={this.handleClose}>
                                cerrar
                            </IconButton>
                        </Box>
                        <br />
                        <form onSubmit={() => alert('e')}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField fullWidth placeholder='Ingrese el nombre' />
                                </Grid>
                                <Grid item xs={3}  >
                                    <TextField fullWidth placeholder='Tipo ident.' />
                                </Grid>
                                <Grid item xs={9} >
                                    <TextField fullWidth placeholder='N. de Identificación' />
                                </Grid>
                                <Grid item xs={6} lg={6} >
                                    <TextField fullWidth placeholder='Pais de ubicación' />
                                </Grid>
                                <Grid item xs={6} lg={6} >
                                    <TextField fullWidth placeholder='Dpto. geográfico' />
                                </Grid>
                                <Grid item xs={6} lg={6} >
                                    <TextField fullWidth placeholder='Ingrese la ciudad ' />
                                </Grid>
                                <Grid item xs={6} lg={6} >
                                    <TextField fullWidth placeholder='Dirección física' />
                                </Grid>
                                <Grid item xs={12} lg={12} >Almacene las sedes desde archivo excel</Grid>
                                <Grid item xs={12} md={7} lg={6}>
                                    <input
                                        type="file"
                                        name="fileInput"
                                        id="fileInput"
                                        className=" form-control input_text_index"
                                        autoComplete="off"
                                        placeholder="Almacene las sedes desde archivo excel"
                                    />
                                </Grid>
                                <Grid item xs={12} md={5} lg={6} >
                                    <Input
                                        style={{ color: 'white' }}
                                        fullWidth
                                        className="btn btn-info"
                                        type="submit"
                                        value="ENVIAR"
                                    />
                                </Grid>
                                <br />
                            </Grid>
                        </form>
                    </Box>
                </Modal >
            );
        }
        else {
            return (
                <div>
                    nadaa
                </div>
            )
        }
    }
}

export default ModalGl;
