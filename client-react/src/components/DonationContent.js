import React from 'react';
import data from '../data';

export default function DonationContent() {
    return (

        <div className="container mt-5">
            <div className="row">
                {
                    data.donates.map(donate =>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={donate.image} alt="Card image cap" />
                                <div className="card-body">
                                    <h6 className="card-title">{donate.title}</h6>
                                    <p className="card-text"><i class="fas fa-map-marker-alt"></i> {donate.city}</p>
                                    <p className="card-text"><small class="text-muted">{donate.category}</small></p>
                                    <div class="progress mb-2" style={{ height: 8 }}>
                                        <div class="progress-bar bg-indigo" style={{ width: '50%' }}></div>
                                    </div>


                                    <p className="card-text"><small class="text-muted">Terkumpul</small></p>
                                    <div class="d-flex justify-content-between mb-4">
                                        <span>Rp.{donate.currently}</span>
                                        <label class="badge badge-indigo py-2">
                                            <span className="pb-2 align-middle">{donate.dueDay} hari lagi</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}
