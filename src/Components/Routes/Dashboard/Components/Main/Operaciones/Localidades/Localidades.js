import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, List, ListItem, Typography } from '@mui/material';
import Collapsible_table from '../../C_parts/Collapsible_table';
import Menu from '../../C_parts/Menu';
import { ListAlt } from '@material-ui/icons';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

class Localidades extends Component {

    constructor(props){
        super(props)
        this.titles = {
            add_localidad: 'Agrega una localidad, o carga el documento de agregación múltiple',
            edit_localidad: 'Edita una localidad',
            print_localidades: 'Imprime la hoja de datos',
            del_localidades: 'Zona de impresión de localidades'
        }
    }
    a = ()=>{
        console.log('aaaaaaaaaaa', this.titles.keys());
    }
   

    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Menu 
                            titles={this.titles}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Item>
                            <Collapsible_table />
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <Typography component="h5" variant="h6" >
                                Detalles
                            </Typography>
                            <ListItem>
                                <Typography component="h7" variant="h8" >
                                    Detalles: 
                                </Typography>
                                <Typography component="h7" variant="h8" >
                                    Detalles
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography component="h7" variant="h8" >
                                    Detalles: 
                                </Typography>
                                <Typography component="h7" variant="h8" >
                                    Detalles
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography component="h7" variant="h8" >
                                    Detalles: 
                                </Typography>
                                <Typography component="h7" variant="h8" >
                                    Detalles
                                </Typography>
                            </ListItem>
                        </Item>
                    </Grid>
                </Grid >
            </Box >
        );
    }
}

export default Localidades;
