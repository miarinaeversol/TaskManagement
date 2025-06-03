import illustration from '../../images/HomeIlustration.svg'
import '../../styles/connexion/FirstView.css'
import { Input } from '../ui/input'

const FirstView = () => {
  return (
    <div className='FirstViewContainer'>
        <div className='IllustrationContainer'>
            <img src={illustration} alt="Illustration d'image de connexion" />
        </div>

        <div className='FormContainer'>
            {/* <h1>Deuxieme blocks</h1> */}
            <div className='SalutContainer'>
                <p>Bienvenue!</p>
                <h6>Fait vos plaisir!</h6>
            </div>

            <div className='BoutonContainer'>

                <div className=' ConnexionContainer'>
                    <Input type="button" value='Connexion' />
                </div>

                <div className='CreateAcntContainer'>
                    <Input type="button" value='Creer un compte' />
                </div>

            </div>
        </div>
    </div>
  )
}

export default FirstView