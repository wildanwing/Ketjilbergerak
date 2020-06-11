import React from 'react';

import about from '../assets/images/about.png';
import rasa from '../assets/images/rasa.png';
import karsa from '../assets/images/karsa.png';
import ilmu from '../assets/images/ilmu.png';
import pic from '../assets/images/pic.png';
import pic1 from '../assets/images/pic1.png';
import pic2 from '../assets/images/pic2.png';

class About extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="text-center">
                    <img src={about} alt="about.png" className="aboutimg" /><br />
                    <p className="text-center imgcapt ">Siapa saja yang muda, kreatif, berani dan berdikari adalah <b>#ketjilbergerak!</b></p>
                </div>
                
                <div>
                    <h2 className="title"> Tentang Ketjilbergerak</h2>
                    <div className="row">
                        <div className="col">
                        <iframe className="rounded shadow" width="550" height="292" src="https://www.youtube.com/embed/Bvh2ooSoGA4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                        </div>
                        <div className="col">
                            <p className="vidcapt">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="title"> Program Kami </h2>

                    <img src={rasa} className="shadow border1a rasa" alt="sambung rasa.jpg" />
                        <p className="caption1a">Sambung Rasa</p>
                        <p className="caption1ab">Sambung Rasa adalah salah satu dari program kecil bergerak yang membagikan makanan. dilakukan setiap bulan dengan sistem urun dana untuk dibelikan bahan kemudian diolah sendiri dan didistribusikan kepada yang membutuhkan</p>
                    <img src={karsa} className="shadow border1a karsa" alt="sambung karsa.jpg" />
                        <p className="caption2a">Sambung Karsa</p>
                        <p className="caption2ab"> Sambung Rasa adalah salah satu dari program kecil bergerak yang membagikan makanan. dilakukan setiap bulan dengan sistem urun dana untuk dibelikan bahan kemudian diolah sendiri dan didistribusikan kepada yang membutuhkan</p>
                    <img src={ilmu} className="shadow border1a ilmu" alt="sambung ilmu.jpg" />
                        <p className="caption3a">Sambung Ilmu</p>
                        <p className="caption3ab">Sambung Rasa adalah salah satu dari program kecil bergerak yang membagikan makanan. dilakukan setiap bulan dengan sistem urun dana untuk dibelikan bahan kemudian diolah sendiri dan didistribusikan kepada yang membutuhkan</p>
                </div>
                <br />
                <br />
                <div>
                    <h2 className="title"> Anggota Kami </h2> <br />
                    <img src={pic} alt="pic.png" className="pic" />
                        <p className="nama">Siti Khomaria</p>
                        <p className="role">KETUA UMUM</p>
                    <img src={pic1} alt="pic1.png" className="pic" />
                        <p className="nama1">Doremi Teti</p>
                        <p className="role1">SEKRETARIS</p>
                    <img src={pic2} alt="pic2.png" className="pic" /> 
                        <p className="nama2">Mamang</p> 
                        <p className="role2">BENDAHARA</p> <br />
                    <img src={pic} alt="pic.png" className="pic" />
                        <p className="nama3">Siti Khomaria</p>
                        <p className="role3">KOKI</p>
                    <img src={pic1} alt="pic1.png" className="pic" />
                        <p className="nama4">Doremi Teti</p>
                        <p className="role4">PEMBANTU UMUM</p>
                    <img src={pic2} alt="pic2.png" className="pic" /> 
                        <p className="nama5">Mamang</p>
                        <p className="role5">WAKIL KETUA</p>

                </div>
            </div>
        )
    }
}

export default About;