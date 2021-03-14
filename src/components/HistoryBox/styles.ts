import styled, { keyframes } from 'styled-components';

interface ILegendProps{
    color: string;
}

const animate = keyframes`
    0%{
        transform:translateX(-100px);
        opacity:0;
    }
    50%{
        opacity:.3;
    }
    100%{
        transform:translateX(0px);
        opacity:1;
    }
`;

export const Container = styled.div`
    width:100%;

    color:${ props => props.theme.colors.white };
    background-color:${ props => props.theme.colors.tertiary };

    border-radius:7px;

    margin:10px 0;
    padding:30px 20px;

    display:flex;
    flex-direction:column;

    animation:${ animate } .5s;
`;

export const Header = styled.div`
    width:100%;

    display:flex;
    align-items:center;
    justify-content:space-between;
    
    > h2{
        margin-bottom:20px;
        padding-left:20px;
    }

    @media(max-width:1200px){
        flex-direction:column;
        
        > h2{
            padding-left:0;
        }
    }
`;

export const LegendContainer = styled.ul`
    display:flex;
    
    list-style:none;
`;

export const Legend = styled.li<ILegendProps>`
    display:flex;
    align-items:center;

    padding-right:20px;

    margin-bottom:10px;
    margin-left:10px;

    > div{
        width:40px;
        height:40px;

        font-size:14px;
        border-radius:5px;

        background-color:${ props => props.color };
        
        display:flex;
        align-items:center;
        justify-content:center;
    }

    > span{
        margin-left:7px;
    }

    @media(max-width:1280px){
        div{
            width:30px;
            height:30px;
        }
    }
`

export const ChartContainer = styled.div`
    flex:1;
    height:260px;
`;
