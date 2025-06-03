import '../../styles/connexion/InscriptionStepTwo.css' 
import illustration from '../../images/HomeIlustration.svg'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

const InscriptionStepTwo = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className='InscriptionStepOneContainer'>
      <div className='InscriptionStepOneContainerIllustration'>
        <img src={illustration} alt="Image illustation inscription" />
      </div>

      <div className='InscriptionStepOneContainerForm'>
        <div className='InscriptionStepOneContainerFormHeader'>
          <div>Inscription</div>
          <div>Etape 2 sur 2</div>
        </div>

        <div className='InscriptionStepOneContainerFormBody'>
          <div className='InscriptionStepOneContainerFormBodyFirstChild'>
            <div>
              <Label>Adresse e-mail</Label>
            </div>
            <div>
              <Input type='text' placeholder='exemple@gmail.com' />
            </div>
          </div>

          <div className='InscriptionStepOneContainerFormBodySecondChild'>
            <div>
              <Label>Mot de passe</Label>
            </div>

            <div className='PasswordContainer'>
              <Input type={showPassword ? 'text' : 'password'} placeholder='********' />
              <div className='PasswordContainerEye' onClick={togglePasswordVisibility}>
                {showPassword ? <EyeOff className='PasswordEyeIcon'/> : <Eye className='PasswordEyeIcon'/>}
              </div>
            </div>
          </div>

          <div className='InscriptionStepOneContainerFormBodyLastChild'>
            <div>
              <Label>Confirmer le mot de passe</Label>
            </div>
            <div className='PasswordContainer'>
              <Input type={showConfirmPassword ? 'text' : 'password'} placeholder='********' />
              <div className='PasswordContainerEye' onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? <EyeOff className='PasswordEyeIcon'/> : <Eye className='PasswordEyeIcon'/>}
              </div>
            </div>
          </div>
        </div>

        <div className='InscriptionStepOneFormFooterContainer'>
          <div>
              <Input type="submit" value="S'inscrire" />
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

export default InscriptionStepTwo