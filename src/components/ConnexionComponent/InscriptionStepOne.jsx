import '../../styles/connexion/InscriptionStepOne.css' 
import illustration from '../../images/HomeIlustration.svg'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

const InscriptionStepOne = () => {
  return (
    <div className='InscriptionStepOneContainer'>

      <div className='InscriptionStepOneContainerIllustration'>
        <img src={illustration} alt="Image illustation inscription" />
      </div>

      <div className='InscriptionStepOneContainerForm'>
        <div className='InscriptionStepOneContainerFormHeader'>
          <div>Inscription</div>
          <div>Etape 1 sur 2</div>
        </div>

        <div className='InscriptionStepOneContainerFormBody'>

          <div className='InscriptionStepOneContainerFormBodyFirstChild'>
            <div>
              <Label>Nom</Label>
            </div>
            <div>
              <Input type='text' placeholder='Johnes' />
            </div>
          </div>

          <div className='InscriptionStepOneContainerFormBodySecondChild'>
            <div>
              <Label>Prénoms</Label>
            </div>
            <div>
              <Input type='text' placeholder='Carter' />
            </div>
          </div>

          <div className='InscriptionStepOneContainerFormBodyLastChild'>
            <div>
              <Label>Numéro téléphone</Label>
            </div>
            <div>
              <Input type='text' placeholder='0340100100' />
            </div>
          </div>

        </div>

        <div className='InscriptionStepOneFormFooterContainer'>
          <div>
              <Input type="button" value="Suivant" />
          </div>

          <div className='InscriptionStepOneFormFooterContainerSecondChild'>
            <div>
              <Label>Déjà un compte ?</Label>
              <a href=''>Connectez-vous</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InscriptionStepOne