import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

console.log(AlexaImage);
console.log(SiriImage);

function App(){
    return(
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>
            {/* <img src = {AlexaImage} image ={AlexaImage}/>
            <img src = {SiriImage} image={CortanaImage}/>
            <img src =  {CortanaImage} image={SiriImage}/> */}
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                        <ProfileCard 
                          title ="Alexa" 
                          handle="@alexa99"
                          image={AlexaImage}
                          description ="Alexa was created by amazon and helps you buy things"
                          />

                        </div>
                        <div className="column is-4">
                        <ProfileCard 
                            title = "Cortana"
                            handle="@cortana32" 
                            image={CortanaImage}
                            description ="Cortana was made by Mircorsoft who knows what it does?"
                            />
  
                        </div>
                        <div className="column is-4">
                        <ProfileCard 
                            title = "Siri"  
                            handle="@Siri01"
                            image={SiriImage}
                            description="Siri was made by apple and is phasing out"
                            />

                        </div>
                
                    </div>

                </section>

            </div>
        </div>

    )
}
export default App;