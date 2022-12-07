import React from 'react';
import PropTypes from 'prop-types';
import Fade from '@mui/material/Fade';
import { withStyles } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from "@mui/material/Typography";

import "./Loading.css";

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20%'
    },
    button: {
        margin: theme.spacing(2),
        background: '#FA5',
    },
    placeholder: {
        height: 100,
    },
});

class DelayingAppearance extends React.Component {
    state = {
        loading: true
    };

    render() {
        const { classes } = this.props;
        const { loading } = this.state;

        return (
            <div className='loading'>
                <div className={classes.root}>
                    <div className={classes.placeholder}>
                        <Fade
                            in={loading}
                            style={{
                                transitionDelay: loading ? '500ms' : '0ms',
                            }}
                            unmountOnExit
                        >
                            <CircularProgress />
                        </Fade>

                    </div>
                    <Typography
                        align='center'
                        variant='h4' >
                        Cargando datos.. espere porfavor
                    </Typography>
                </div>
            </div >

        );
    }
}

DelayingAppearance.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DelayingAppearance);