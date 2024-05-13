import  styled  from "styled-components"
import img from '../../Perfume-card/images/image-product-desktop.jpg'
import icon from '../../Perfume-card/images/icon-cart.svg'
import { Container, Titulo, Subtitulo,Preco1, Preco2, Img, Button, Text, Box1  } from "./Styles/App"
const App = () => {
    return(
        <>
        <Container> 
            <Img src={img} alt="Foto do perfume CHANEL" />
            <Box1>
            <Subtitulo> PERFUME</Subtitulo>
           <Titulo>Gabrielle Essense Eau De Parfum</Titulo> 
           <Text>A floral, solar and coluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL</Text>
           <Preco1>$149.99</Preco1>
           <Preco2>$169.99</Preco2>
           <Button>Add To Cart</Button>
           </Box1>
        </Container>    
        </>      
    )
}

export default App;