import React from 'react';

export default function NewsSorter() {

    return (
        <div className="container mt-3 mb-4">
            <div className="row">
                <div className="col">
                    <h6 style={{ textAlign: 'right' }}>Lokasi</h6>
                    <div className="dropdown">
                        <button className="btn btn-outline-secondary dropdown-toggle float-right " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sortir Menurut
                     </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
