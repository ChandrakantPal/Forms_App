import React, { Component } from 'react';
import { Card, CardContent, CardHeader, Typography, Avatar } from '@material-ui/core';
import firebase from '../../../../Firebase';

class Site extends Component {
    state = {
        forms: [{id: 'sfgysv', form: 'https://docs.google.com/forms/d/e/1FAIpQLSdoe0_npYGuUBFyaRa9MQ7z1pm96IbiSTQmc7Kq9hpYnr7HDw/viewform?usp=send_form' },
        {id: 'gewygu', form: 'https://docs.google.com/forms/d/e/1FAIpQLSdoe0_npYGuUBFyaRa9MQ7z1pm96IbiSTQmc7Kq9hpYnr7HDw/viewform?usp=send_form' },
        {id: 'ghfgug', form: 'https://docs.google.com/forms/d/e/1FAIpQLSdoe0_npYGuUBFyaRa9MQ7z1pm96IbiSTQmc7Kq9hpYnr7HDw/viewform?usp=send_form' }],
        site: {}
    }

    componentDidMount () {
        firebase
            .firestore()
            .collection('sites')
            .doc(this.props.match.params.id).get().then(doc => {
                console.log(doc.data());
                const data = doc.data();
                this.setState({site: data});
            });
    }

    render () {
        const link = this.state.forms.map(form => (
            <a key={form.id} href={form.form} style={{margin: '10px 0px' ,display: 'flex', flexDirection: 'column'}}>Site From</a>
        ));
        return (
            <Card>
                <CardContent>
                    <CardHeader
                        avatar={<Avatar aria-label="Site">S</Avatar>}
                        title={this.state.site.site_no}
                        subheader={this.state.site.site_address}/>
                    <Typography variant="h6">Address</Typography>
                    <Typography variant="body1">{this.state.site.site_address}</Typography>   
                    <Typography variant="h6">Contact</Typography>
                    <Typography variant="body1">12345.....</Typography>
                    {link}  
                </CardContent>   
            </Card>
        );
    
    }
}

export default Site;