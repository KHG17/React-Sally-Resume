'use strict';

/* globals ReactDOM */

function App(props) {
    return (
        <div className="container">
            <Header name={props.name} />

            <main>
                <section role='region'>
                    <address role='contact-info'>
                        <img src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg" alt="Picutre of Sally with crossed arms" />
                        <p>Name: {props.name}</p>
                        <p>Email: sallystudent@gmail.com</p>
                        <p>Phone Number: 123-456-7890</p>
                        <p>Address: 5678 Lauv St., Los Angeles, CA 90001</p>
                    </address>
                </section>

                <section role='region'>
                    <h2>Employment History</h2>
                    <ul>
                        <li>
                            <p>Google, Inc</p>
                            <p>Software Engineer</p>
                            <p>2014-Present</p>
                            <p>Work with TechLead and Clement.</p>
                        </li>
                        <li>
                            <p>Chipotle</p>
                            <p>Crew Member</p>
                            <p>2010-2013</p>
                            <p>Did nothing because of the Corona Virus.</p>
                        </li>
                    </ul>
                </section>

                <section role='region'>
                    <h2>Education</h2>
                    <ul>
                        <li>
                            <p>University of California</p>
                            <p>Bachelors of Computer Science</p>
                            <p>2009-2013</p>
                            <p>GPA: 3.69</p>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    )
}

App.defaultProps = {
    name: 'Sally Student'
};


ReactDOM.render(
    <App name="Tuan Nguyen" />,
    document.querySelector('#root')
);