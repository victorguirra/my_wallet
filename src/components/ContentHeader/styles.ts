import styled from 'styled-components';

interface ITitleContainerProps{
    lineColor:string
}

export const Container = styled.div`
    width:100%;
    
    margin-bottom:25px;

    display:flex;
    align-items:center;
    justify-content:space-between;

    @media(max-width:500px){
        flex-direction:column;
    }
`;

export const TitleContainer = styled.div<ITitleContainerProps>`
    > p{
        
        font-size:25px;
        color:${ props => props.theme.colors.white };

        &::after{
            content:'';
            display:block;
            width:55px;
            border-bottom:5px solid ${ props => props.lineColor };
            border-radius:10px;
        }
    }

    @media(max-width:500px){
        p{
            font-size:18px;
            
            &::after{
                border-bottom:5px solid ${ props => props.lineColor };
            }
        }
    }
`;

export const Controllers = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    @media(max-width:500px){
        width:100%;
        justify-content:space-around;
        
        margin-top:20px;
    }
`;