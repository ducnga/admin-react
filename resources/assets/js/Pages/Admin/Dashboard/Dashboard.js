import React, { Component } from 'react';
import Header from '../../../Layouts/Header';
import Sidebar from '../../../Layouts/Sidebar';
import Axios from 'axios';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import '../../../../css/styles.css';

class Dashboard extends Component {
    render() {
        return (
            <div>
                 <Grid container spacing={24}>
                    <Grid item xs={4}>
                         <Card className='card'>
                            <CardContent>
                                <Typography component='h1'>
                                   Người dùng
                                </Typography>
                                <Typography color="textSecondary" component='h1'>
                                    30
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                         <Card className='card'>
                            <CardContent>
                                <Typography component='h1'>
                                   Người dùng
                                </Typography>
                                <Typography color="textSecondary" component='h1'>
                                    30
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                         <Card className='card'>
                            <CardContent>
                                <Typography component='h1'>
                                   Người dùng
                                </Typography>
                                <Typography color="textSecondary" component='h1'>
                                    30
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                         <Card className='card'>
                            <CardContent>
                                <Typography component='h1'>
                                   Người dùng
                                </Typography>
                                <Typography color="textSecondary" component='h1'>
                                    30
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                 </Grid>
            </div>
        );
    }
}

export default Dashboard;