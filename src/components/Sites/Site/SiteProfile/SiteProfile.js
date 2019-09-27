import React, { Component } from 'react';
import { Card, CardContent, CardHeader, Typography, Avatar } from '@material-ui/core';


class Site extends Component {
    state = {
        forms: [{id: 'sfgysv', form: 'https://docs.google.com/forms/d/e/1FAIpQLSdoe0_npYGuUBFyaRa9MQ7z1pm96IbiSTQmc7Kq9hpYnr7HDw/viewform?usp=send_form' },
        {id: 'gewygu', form: 'https://docs.google.com/forms/d/e/1FAIpQLSdoe0_npYGuUBFyaRa9MQ7z1pm96IbiSTQmc7Kq9hpYnr7HDw/viewform?usp=send_form' },
        {id: 'ghfgug', form: 'https://docs.google.com/forms/d/e/1FAIpQLSdoe0_npYGuUBFyaRa9MQ7z1pm96IbiSTQmc7Kq9hpYnr7HDw/viewform?usp=send_form' }]
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
                        title="Site number 1001.."
                        subheader="Some random adrress string"/>
                    <Typography variant="h6">Address</Typography>
                    <Typography variant="body1">address</Typography>   
                    <Typography variant="h6">Contact</Typography>
                    <Typography variant="body1">12345.....</Typography>
                    {link}  
                </CardContent>   
            </Card>
        );
    
    }
}

export default Site;