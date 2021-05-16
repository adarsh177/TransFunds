import styled from 'styled-components';
import {useState} from 'react';

export default function OTPDialog(props){
    const [text, setText] = useState('0');
    if(props.show)
        return(
            <MainContainer>
                <Dialog>
                    <p>
                        Please enter otp sent to {props.email}
                    </p>
                    <br />
                    <input onChange={(ev) => setText(ev.target.value)} value={text} type="number" style={{width: "calc(100% - 20px)", padding: "10px"}}/>
                    <button onClick={() => props.onOtp(text)} style={{backgroundColor: "var(--main-color)", color: "white", width: "calc(100%)", padding: "10px"}}>Verify</button>
                </Dialog>
            </MainContainer>
        );
    else return null;
}

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0, 0.35);
    z-index: 50;
`;

const Dialog = styled.div`
    width: calc(80% - 40px);
    height: auto;
    padding: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;