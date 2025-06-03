import { Eye } from 'lucide-react'
import illustration from '../../images/HomeIlustration.svg'
import '../../styles/connexion/CreateAcount.css'
import { Form } from '../ui/form'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

const CreateAcount = () => {
  return (
    <div className='CreateAcountContainer'>

      <div className='IllustrationContainer'>
        <img src={illustration} alt="Illustration d'image de connexion" />
      </div>
      
      <div className='GlobalsContainer'>

        <div className='GlobalContainerHeader'>
          <h1>Connexion</h1>
        </div>
      
        <Form action="" className='FormContainer'>

          <div className='FormContainerBody'>
            <div className='FormContainerBodyFirstChild'>
              <div className='FormContainerBodyFirstChildLabel'>
                <Label>Adresse e-mail</Label>
              </div>
              <div className='FormContainerBodyFirstChildText'>
                <Input type="text" placeholder='exemple@gmail.com' />
              </div>
            </div>

            <div className='FormContainerBodySecondChild'>
              <div className='FormContainerBodySecondChildText'>
                <Label>Mot de passe</Label>
                <a href=''>Mot de passe oublie ?</a>
              </div>
              <div className='FormContainerBodySecondChildPassword'>
                <div className='PasswordInputContainer'>
                  <Input type="password" placeholder='********' />
                  <Eye className='PasswordEyeIcon'/>
                </div>
              </div>
            </div>
          </div>

          <div className='FormContainerFooter'>
            
            <div className='FormContainerFooterFirstChild'>
              <Input type="submit" value="Se connecter" />
            </div>

            <div className='FormContainerFooterSecondChild'>
              <div className='FormContainerFooterSecondChildText'>
                <Label>Vous n avez pas de compte ?</Label>
                <a href=''>Inscrivez-vous</a>
              </div>
            </div>

          </div>

        </Form>


      </div>

    </div>
  )
}

export default CreateAcount