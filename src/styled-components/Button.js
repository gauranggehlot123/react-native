import styled from 'styled-components/native'

const PrimaryButton = styled.TouchableOpacity`
 width: ${({ width }) => width || '100px'};
 height: ${({ height }) => height || '64px'};
 background: ${({ disabled }) => disabled ? "rgba(211,106,73,0.5)" : '#70e4bb'};
 border-radius: ${({br}) => br || '12px'};
 color:white;
 display:flex;
 flex-direction:column;
 justify-content: center;
 margin-top: ${({mt}) => mt || '0px'};
`;

export {
 PrimaryButton
}