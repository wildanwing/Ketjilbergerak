import React, { Component, useState } from 'react';
import NavbarProfile from "../components/NavbarProfile";
import landingPage from '../json/landingPage.json';

export default class HistoryDonationPage extends Component {

    render() {
        //const [selectedDate, setSelectedDate] = useState(null);
        return (
            <>
                <div class="container container-profile mt-5 mb-5" >
                    <div className="row ">
                        <NavbarProfile {...this.props} />
                        <div className="col-sm-9">
                            <h4 className="mb-5 mt-4" style={{ color: '#f43b31' }}>Riwayat Donasi</h4>
                            <div className="card" style={{ height: 110 }} >
                                <div className="card-body card-activity">
                                    <div className="row">
                                        <div className="col">
                                            <h6 className="card-title">Rabu, 10 Juni 2020</h6>
                                            <div className="card-text">lorem</div>
                                            <div className="card-text">lorem</div>
                                        </div>
                                        <div className="col text-right " >
                                            <h4 className="card-title py-4" >Rp. 1000000</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
