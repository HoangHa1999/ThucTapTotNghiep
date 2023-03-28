import React from 'react'
import Footer from '../../components/Footer/footer';
import Nav from '../../components/Nav/nav';


class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="container-scroller">
                    <Nav />

                    <div className="container-fluid page-body-wrapper">
                        <div className="main-panel">
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>



        );
    }
}
export default Home