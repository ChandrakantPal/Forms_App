import React, { Component } from 'react';

class Site extends Component {
    state = {
        forms: [{id: 'sfgysv', form: 'https://docs.google.com/forms/d/e/1FAIpQLSdoe0_npYGuUBFyaRa9MQ7z1pm96IbiSTQmc7Kq9hpYnr7HDw/viewform?usp=send_form' },
        {id: 'gewygu', form: 'https://docs.google.com/forms/d/e/1FAIpQLSdoe0_npYGuUBFyaRa9MQ7z1pm96IbiSTQmc7Kq9hpYnr7HDw/viewform?usp=send_form' },
        {id: 'ghfgug', form: 'https://docs.google.com/forms/d/e/1FAIpQLSdoe0_npYGuUBFyaRa9MQ7z1pm96IbiSTQmc7Kq9hpYnr7HDw/viewform?usp=send_form' }]
    }

    render () {
        const link = this.state.forms.map(form => (
            <a key={form.id} href={form.form}>Site From</a>
        ));
        return (
            <div>
                <h1>title</h1>
                <p>Some random adrress string</p>
                <h3>Address</h3>
                <p>Address</p>   
                <h3>Contact</h3>
                <p>1234.....</p>
                {link}     
            </div>
        );
    
    }
}

export default Site;