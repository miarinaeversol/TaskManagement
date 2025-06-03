import Illustration from "../ConnexionComponent/Illustration"
import '../../styles/connexion/ConnexionPage.css'
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Eye, EyeOff} from "lucide-react"
import { useConnexionStore } from "@/ZustandStore/Connexion/ConnexionStore"
import { Button } from "../ui/button"
import { useState } from "react"
import axios from "axios"

const ConnexionPage = () => {

    const {firstDiv, secondDiv, thirdDiv, FirstStepForSubscribe ,SecondStepForSubscribe, paginationTitle} = useConnexionStore()
    const {connexionBlock, createAccountBlock, previewStep, nextStep} = useConnexionStore()

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    };
    
    const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
    };

    const [name, setName] = useState('');
    const [firstname, setFirstName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/task/users', {name, firstname, phone, email, password},
                {
                    headers: {
                        'Content-Type': 'application/json', // Assurez-vous que le backend accepte ce type
                    }
                }
            );

            console.log(response);
            
            setMessage('User created successfully');
            setName('');
            setFirstName('');
            setPhone('');
            setEmail('');
            setPassword('');
        }
        catch (error) {
            console.error(error);
            setMessage('An error occured');
        }
    }

    return (
        <div className="HomePageContainer">
            <div className="HomePageContainerFirstChild">
                <div>
                    <Illustration />
                </div>
            </div>

            <div className='HomePageContainerSecondChild'>



                {/* HOME BLOCK */}

                <div style={{display: firstDiv}} className="HelloContainer border">

                    <div className='SalutContainer'>
                        <p>Bienvenue!</p>
                        <h6>Fait vos plaisir!</h6>
                    </div>

                    <div className='BoutonContainer'>
        
                        <div className=' ConnexionContainer'>
                            {/* <Input type="button" value='Connexion' /> */}
                            <Button className='w-full' onClick={() => (connexionBlock())}>Se connecter</Button>
                        </div>
        
                        <div className='CreateAcntContainer'>
                            {/* <Input type="button" value='Creer un compte' /> */}
                            <Button className='w-full cursor-pointer' onClick={() => (createAccountBlock())}>Créer un compte</Button>
                        </div>
                    </div>

                </div>





                {/* CONNEXION BLOCK */}
                
                <div style={{display: secondDiv}} className="CnxContainer border">

                    <div className='GlobalContainerHeader'>
                        <h1>Connexion</h1>
                    </div>

                    <form action="" method="post" className="CnxBlockContainer">
                            

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

                                <div className='PasswordContainer flex flex-row justify-between items-center'>   

                                    <Input type={showPassword ? 'text' : 'password'} placeholder='********' className="relative"/>
                                    <Eye onClick={togglePasswordVisibility} className="absolute right-[10px]">
                                        {showPassword ? <EyeOff className='PasswordEyeIcon w-5 h-5'/> : <Eye className='PasswordEyeIcon w-5 h-5'/>}
                                    </Eye>

                                </div>
                            </div>
                        </div>

                        <div className='FormContainerFooter'>
                            
                            <div className='FormContainerFooterFirstChild'>
                                <Input type="submit" value="Se connecter" />
                            </div>

                            <div className='FormContainerFooterSecondChild'>
                                <div className='FormContainerFooterSecondChildText'>
                                    <Label>Vous n&apos; avez pas de compte ?</Label>
                                    <Label className='cursor-pointer' onClick={() => (createAccountBlock())}>Inscrivez-vous</Label>
                                </div>
                            </div>

                        </div>


                    </form>

                </div>




                {/* CREATE ACCOUNT BLOCK */}

                    {/* FIRST STEP */}


                <div className='InscriptionStepOneContainerForm border' style={{display: thirdDiv}}>
                    
                    <div className='InscriptionStepOneContainerFormHeader'>
                        <h1>Inscription</h1>
                    </div>

                    <div className="InscriptionNavContainer flex flex-row justify-between items-center mt-0 mb-2">
                        <button className='text-[0.8rem]' onClick={() => (previewStep())}>{(paginationTitle == 2) && 'retour'}</button>
                        <p className='text-xs'>Etape {paginationTitle} sur 2</p> 
                    </div>

                    
                    <form action="" method="post" onSubmit={handleSubmit} className="IscFormContainer">

                        <div className='InscriptionStepOneContainerFormBody mt-5' style={{display: FirstStepForSubscribe}}>

                            <div className='InscriptionStepOneContainerFormBodyFirstChild'>
                                <div>
                                <Label>Nom</Label>
                                </div>
                                <div>
                                    <Input type='text' placeholder='Johnes' value={name} onChange={(e) => setName(e.target.value)} required />
                                </div>
                            </div>

                            <div className='InscriptionStepOneContainerFormBodySecondChild'>
                                <div>
                                    <Label>Prénoms</Label>
                                </div>
                                <div>
                                    <Input type='text' placeholder='Carter' value={firstname} onChange={(e) => setFirstName(e.target.value)} required/>
                                </div>
                            </div>

                            <div className='InscriptionStepOneContainerFormBodyLastChild'>
                                <div>
                                    <Label>Numéro téléphone</Label>
                                </div>
                                <div>
                                    <Input type='text' placeholder='0340100100' value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                                </div>
                            </div>


                            <div className='InscriptionStepOneFormFooterContainer mt-4'>
                                <div>
                                    <Input type="button" value="Suivant" onClick={() => (nextStep())} className='mb-[1%] pt-[4%] pb-[4%] w-full h-[12%] bg-[#C886D3] text-white text-base cursor-pointer'/>
                                </div>

                                <div className='InscriptionStepOneFormFooterContainerSecondChild'>
                                        <Label>Déjà un compte ?</Label>
                                        <Label className='cursor-pointer' onClick={() => (connexionBlock())}>Connectez-vous</Label>
                                    {/* Akour */}
                                </div>
                            </div>


                        </div>




                    {/* </div> */}


                    
                        {/* SECOND STEP */}
                        
                    
                        <div className='InscriptionStepTwoContainerForm' style={{display: SecondStepForSubscribe}}>


                            <div className='InscriptionStepTwoContainerFormBodyFirstChild'>
                                <div>
                                    <Label>Adresse e-mail</Label>
                                </div>
                                <div>
                                    <Input type='text' placeholder='exemple@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                </div>
                            </div>

                            <div className='InscriptionStepTwoContainerFormBodySecondChild'>
                                
                                <div className="Password">
                                    <Label>Mot de passe</Label>
                                </div>

                                <div className="PasswordContainer flex flex-row justify-between items-center">
                                    
                                    <Input type={showPassword ? 'text' : 'password'} placeholder='********' className="relative" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                    <Eye onClick={togglePasswordVisibility} className="absolute right-[10px]">
                                        {showPassword ? <EyeOff className='PasswordEyeIcon w-5 h-5'/> : <Eye className='PasswordEyeIcon w-5 h-5'/>}
                                    </Eye>
                                    
                                    {/* <div className='PasswordContainerEye' onClick={togglePasswordVisibility}>
                                        {showPassword ? <EyeOff className='PasswordEyeIcon'/> : <Eye className='PasswordEyeIcon'/>}
                                    </div> */}

                                </div>

                            </div>

                            <div className='InscriptionStepTwoContainerFormBodyLastChild'>
                                <div>
                                    <Label>Confirmer le mot de passe</Label>
                                </div>

                                <div className="PasswordContainer border-1 flex flex-row justify-between items-center ">
                                    
                                    <Input type={showConfirmPassword ? 'text' : 'password'} placeholder='********' className="relative"/>
                                    <Eye onClick={toggleConfirmPasswordVisibility} className="absolute right-[10px]">
                                        {showConfirmPassword ? <EyeOff className='PasswordEyeIcon w-5 h-5'/> : <Eye className='PasswordEyeIcon w-5 h-5'/>}
                                    </Eye>

                                </div>

                                {/* <div className='PasswordContainer'>
                                    <Input type={showConfirmPassword ? 'text' : 'password'} placeholder='********' />
                                </div>

                                <div className='PasswordContainerEye' onClick={toggleConfirmPasswordVisibility}>
                                    {showConfirmPassword ? <EyeOff className='PasswordEyeIcon'/> : <Eye className='PasswordEyeIcon'/>}
                                </div> */}

                            </div>

        
                            <div className='InscriptionStepTwoFormFooterContainer'>

                                <div>
                                    <Input type="submit" value="S'inscrire" />
                                </div>

                                <div className='InscriptionStepTwoFormFooterContainerSecondChild'>
                                    <div>
                                        <Label>Déjà un compte ?</Label>
                                        <Label className='cursor-pointer' onClick={() => (connexionBlock())}>Connectez-vous</Label>
                                    </div>
                                </div>

                            </div>

                            {message && <p>{message}</p>}

                    
                        </div>

                        {/* <h1>XOXO</h1> */}

                    
                    </form>

                </div>


            </div>
        </div>
    )
}

export default ConnexionPage