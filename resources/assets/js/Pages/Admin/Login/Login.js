import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { Helmet } from "react-helmet";
import Dialog from 'material-ui/Dialog';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
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
                .then(res => console.log(res.data))
                .catch(e => {
                    console.error(e);
                    if (e.response.data.Email) { this.setState({ errorEmail: e.response.data.Email }) }
                    if (e.response.data.Password) { this.setState({ errorPassword: e.response.data.Password }) }
                    if (e.response.data.Msg) { this.setState({ Msg: e.response.data.Msg, open: true }) }
                });
            console.log(this.props.Login);
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
        return (
            <div>
                <Helmet>
                    <title>Đăng nhập vào quản trị website</title>
                </Helmet>
                <div className="login-container">
                    <div className="loginbox bg-white">
                        <div className="loginbox-title">SIGN IN</div>
                        <TextField
                            placeholder="Email đăng nhập"
                            label="Email đăng nhập website"
                            name="Email"
                            defaultValue={this.state.Email}
                            onChange={this.onChange.bind(this)}
                            // errorText={this.state.errorEmail}
                        /><br />
                        <TextField
                            placeholder="Mật khẩu"
                            label="Mật khẩu"
                            type="password"
                            name="Password"
                            defaultValue={this.state.Password}
                            onChange={this.onChange.bind(this)}
                            // errorText={this.state.errorPassword}
                        />
                        {/* className={classes.button} */}
                        <div className="loginbox-submit">
                            <Button  variant="raised" color="primary" onClick={this.onSubmit.bind(this)} >
                                Đăng nhập
                            </Button>
                        </div>
                    </div>
                </div>
                {/* <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose.bind(this)}
                >
                    {this.state.Msg}
                </Dialog> */}
            </div>
        );
    }
}
export default (Login)