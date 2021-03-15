import styled, { keyframes } from 'styled-components';

interface ILegendProps {
    color: string;
}

const animate = keyframes`
    0%{
        transform:translateX(100px);
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
    width:48%;
    min-height:260px;

    margin:10px 0;
    border-radius:7px;

    color:${ props => props.theme.colors.white };
    background-color:${ props => props.theme.colors.secondary };

    display:flex;
    align-items:center;

    animation:${ animate } .5s;

    @media(max-width:1200px){
        width:100%;
        height:0;

        display:flex;
        flex-direction:column;
    }
`;

export const LeftSide = styled.aside`
    padding:30px 20px;

    > h2 {
        padding-left:20px;
        margin-bottom:10px;
    }

    @media(max-width:1200px){
        max-width:100%;

        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }
`;

export const LegendContainer  = styled.ul`
    flex:1;
    height:150px;

    list-style:none;
    padding-right:30px;
    
    overflow-y:scroll;

    ::-webkit-scrollbar{
        width:10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color:${ props => props.theme.colors.secondary };
        border-radius:10px;
    }

    ::-webkit-scrollbar-track{
        background-color:${ props => props.theme.colors.tertiary };
    }

    @media(max-width:1200px){
        width:100%;
        height:auto;

        overflow-y:hidden;
        overflow-x:scroll;

        display:flex;
        height:auto;
    }
`

export const Legend = styled.li<ILegendProps>`
    display:flex;
    align-items:center;

    margin-bottom:7px;
    padding-left:20px;
    
    div{
        width:45px;
        height:45px;

        padding:15px;

        font-size:14px;
        border-radius:5px;

        background-color:${ props => props.color };

        display:flex;
        align-items:center;
        justify-content:center;
    }

    span {
        margin-left:10px;
    }

    @media(max-width:1200px){
        padding-left:0;

        div{
            width:35px;
            height:35px;
            
            font-size:10px;
            line-height:30px;
        }

        span{
            margin-right:10px;
        }
    }
`
export const RightSide = styled.main`
    flex:1;
    height:150px;

    display:flex;
    justify-content:center;
    padding-top:35px;

    @media(max-width:800px){
        width:100%;
        
        height:auto;

        flex:1;
        padding-top:0;
        padding-bottom:50px;
    }
`;