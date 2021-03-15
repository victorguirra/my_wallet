import styled, { keyframes } from 'styled-components';

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
    width:48%;
    height:260px;

    color:${ props => props.theme.colors.white };
    background-color:${ props => props.theme.colors.secondary };

    border-radius:7px;

    margin:10px 0;
    padding:30px 20px;

    display:flex;
    flex-direction:column;
    justify-content:space-between;

    animation:${ animate } .5s;

    header h1{
        display:flex;
        align-items:center;
    }

    header h1 img{
        width:35px;
        margin-left:15px;
    }

    header p{
        font-size:18px;
    }

    @media(max-width:770px){
        width:100%;

        > header h1{
            font-size:24px;

            img{
                width:30px;
                height:30px;
            }
        }

        > header padding, > footer span{
            font-size:14px;
        }
    }

    @media(max-width:420px){
        height:auto;

        > header p{
            margin-bottom:15px;
        }
    }
`;