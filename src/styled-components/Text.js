import styled from 'styled-components/native'

const Heading = styled.Text`
 font-family: Inter_700Bold;
 font-style: normal;
 font-weight: 700;
 font-size: ${({size}) => size ? size : '22px' };
 line-height: ${({ lh }) => lh || '33px'};
 text-align: ${({align}) => align ? align : 'center'};
 color: ${({color}) => color ? color : '#FFF' };
 margin-top: ${({mt}) => mt ? mt : '0'};
 margin-bottom: ${({mb}) => mb ? mb : '0'};
 margin-right: ${({mr}) => mr ? mr : '0'};
`;

const P = styled.Text`
 font-family: Inter_400Regular;
 font-style: normal;
 font-weight: normal;
 font-size: ${({size}) => size ? size : '18px' };
 line-height: ${({ lh }) => lh || '24px'};
 text-align: ${({align}) => align ? align : 'center'};
 color: ${({color}) => color ? color : '#1D1B1C' };
 margin-top: ${({mt}) => mt ? mt : '0'};
 margin-left: ${({ml}) => ml ? ml : '0'};
`;

const Label = styled.Text`
 font-family: Inter_500Medium;
 font-style: normal;
 font-weight: 500;
 font-size: ${({size}) => size ? size : '14px' };
 line-height: ${({ lh }) => lh || '16px'};
 color: ${({color}) => color ? color : 'rgba(255, 255, 255, 0.6)' };
 text-align: ${({align}) => align ? align : 'center'};
 margin-top: ${({mt}) => mt ? mt : '0'};
`;

export {
 P, Heading, Label
}