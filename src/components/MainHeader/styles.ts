import styled from 'styled-components';

export const Container = styled.header`
    grid-area:MH;
    
    padding:0 30px;
    background-color:${ props => props.theme.colors.secondary };

    display:flex;
    align-items:center;
    justify-content:flex-end;

    @media(max-width:800px){
        
        input{
            display:none;
        }
    } 
`;

export const Profile = styled.div`
    display:flex;
    align-items:center;

    button{
        background:transparent;
        margin-right:15px;
    }

    img{
        width:40px;
        height:40px;
        border-radius:20px;
    }
    
    color:${ props => props.theme.colors.white };
    
    @media(max-width:800px){
        
        position:absolute;
        right:50px;
    }
`;