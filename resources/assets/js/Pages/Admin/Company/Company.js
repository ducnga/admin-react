import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 330,
        marginBottom:10,
    },
});

class Company extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <TextField
                    label="Tên công ty"
                    id="margin-none"
                    defaultValue="Công ty TNHH XJK"
                    className={classes.textField}
                    helperText=""
                />
                <TextField
                    label="Hotline"
                    id="margin-dense"
                    defaultValue="028 7308 2839"
                    className={classes.textField}
                    helperText=""
                />
                <TextField
                    label="Điện thoại"
                    id="Phone"
                    defaultValue="0909 7309 999"
                    className={classes.textField}
                    helperText=""
                />
                <br />
                <TextField
                    label="Mã số thuế"
                    id="margin-none"
                    defaultValue="010 1010 010"
                    className={classes.textField}
                    helperText=""
                />
                <TextField
                    label="Email"
                    id="margin-dense"
                    defaultValue="lienhe@xjk.vn"
                    className={classes.textField}
                    helperText=""
                />
                <TextField
                    label="Địa chỉ"
                    id="margin-normal"
                    defaultValue="54/5 Tô Ngọc Vân, Phường Thạnh Xuân, Quận 12, HCM"
                    className={classes.textField}
                    helperText=""
                />
                <hr />
                <TextField
                    label="Facebook"
                    id="margin-none"
                    defaultValue="https://facebook.com/xjk.vn"
                    className={classes.textField}
                    helperText=""
                />
                <TextField
                    label="Google Plus"
                    id="margin-dense"
                    defaultValue="https://plus.google.com/3243242"
                    className={classes.textField}
                    helperText=""
                />
                <TextField
                    label="Youtube"
                    id="margin-normal"
                    defaultValue="https://youtube.com"
                    className={classes.textField}
                    helperText=""
                />
                <TextField
                    label="Skype"
                    id="margin-none"
                    defaultValue="Skype"
                    className={classes.textField}
                    helperText=""
                />
                <TextField
                    label="Zalo"
                    id="margin-dense"
                    defaultValue="028 7308 2839"
                    className={classes.textField}
                    helperText=""
                />
                <TextField
                    label="Địa chỉ"
                    id="margin-normal"
                    defaultValue="54/5 Tô Ngọc Vân, Phường Thạnh Xuân, Quận 12, HCM"
                    className={classes.textField}
                    helperText=""
                />
                <TextField
                    label="Tên công ty"
                    id="margin-none"
                    defaultValue="Công ty TNHH XJK"
                    className={classes.textField}
                    helperText=""
                />
                <TextField
                    label="Hotline"
                    id="margin-dense"
                    defaultValue="028 7308 2839"
                    className={classes.textField}
                    helperText=""
                />
                <TextField
                    label="Địa chỉ"
                    id="margin-normal"
                    defaultValue="54/5 Tô Ngọc Vân, Phường Thạnh Xuân, Quận 12, HCM"
                    className={classes.textField}
                    helperText=""
                />
                <TextField
                    label="Tên công ty"
                    id="margin-none"
                    defaultValue="Công ty TNHH XJK"
                    className={classes.textField}
                    helperText=""
                />
                <TextField
                    label="Hotline"
                    id="margin-dense"
                    defaultValue="028 7308 2839"
                    className={classes.textField}
                    helperText=""
                />
                <TextField
                    label="Địa chỉ"
                    id="margin-normal"
                    defaultValue="54/5 Tô Ngọc Vân, Phường Thạnh Xuân, Quận 12, HCM"
                    className={classes.textField}
                    helperText=""
                />
            </div>
        );
    }
}
Company.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(Company);