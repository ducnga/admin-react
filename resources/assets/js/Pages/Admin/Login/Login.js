import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { Helmet } from "react-helmet";
import { Redirect } from 'react-router-dom';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import '../../../../css/styles.css';
import Axios from 'axios';
const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    div: {
        margin: '79px',
    }
});


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            Password: '',
            open: false,
            Msg: null,
            errorEmail: null,
            errorPassword: null
        }
    }
    onChange(event) {
        var target = event.target;
        var name = target.name;
        var errorName = `error${name}`;
        var value = target.value;
        this.setState({
            [name]: value,
            [errorName]: null
        });
    }
    async onSubmit(event) {
        event.preventDefault();
        var { Email, Password } = this.state;
        if (Email === "") {
            this.setState({ errorEmail: 'Vui lòng nhập Email' });
        }
        else if (Password === "") {
            this.setState({ errorPassword: 'Vui lòng nhập mật khẩu' });
        }
        else {
            await this.props.sendLogin(Email, Password)
                .catch(e => {
                    console.error(e);
                    // if (e.response.data.Email) { this.setState({ errorEmail: e.response.data.Email }) }
                    // if (e.response.data.Password) { this.setState({ errorPassword: e.response.data.Password }) }
                    // if (e.response.data.Msg) { this.setState({ Msg: e.response.data.Msg, open: true }) }
                });
        }
    }
    handleOpen() {
        this.setState({ open: true });
    };

    handleClose() {
        this.setState({ open: false });
    };
    render() {
        const actions = [
            <Button variant="raised" color="primary" onClick={this.handleClose.bind(this)} >
                Ok
            </Button>
        ];
        if(this.props.Login.isLogin === true){
            return <Redirect to='/xjk-system'/>
        }
        return (
            <div className='container'>
                <Helmet>
                    <title>Đăng nhập vào quản trị website</title>
                </Helmet>
                <div className="login-container container">
                    <div className="loginbox bg-white">
                        <form onSubmit={this.onSubmit.bind(this)} >
                            <h6 className="loginbox-title">ĐĂNG NHẬP QUẢN TRỊ WEBSITE</h6>
                            <TextField
                                placeholder="Email đăng nhập"
                                label="Email đăng nhập website"
                                name="Email"
                                defaultValue={this.state.Email}
                                onChange={this.onChange.bind(this)}
                                error={this.state.errorEmail !== null ? true : false}
                                helperText={this.state.errorEmail}
                                fullWidth
                            /><br />
                            <TextField
                                placeholder="Mật khẩu"
                                label="Mật khẩu"
                                type="password"
                                name="Password"
                                defaultValue={this.state.Password}
                                onChange={this.onChange.bind(this)}
                                error={this.state.errorPassword !== null ? true : false}
                                helperText={this.state.errorPassword}
                                fullWidth
                            />
                            {/* className={classes.button} */}
                            <div className="loginbox-submit">
                                <Button type="submit" variant="raised" color="primary" >
                                    Đăng nhập
                                </Button>
                            </div>
                        </form >
                    </div>
                </div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose.bind(this)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Thông báo"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {this.state.Msg}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose.bind(this)} color="primary">
                            ok
                        </Button>
                    </DialogActions>
                </Dialog>

            </div>
        );
    }

}
export default (Login)