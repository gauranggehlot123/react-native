import styled from 'styled-components/native'

const Row = styled.View`
 flex: ${({ flex }) => flex || 1};
 display: flex;
 flex-direction: row;
 align-items: ${({ ai }) => ai || 'center'};
 justify-content: ${({ jc }) => jc || 'center'};
 width: ${({ width }) => width || '100%'};
 height: ${({ height }) => height || 'auto'};
 margin-top: ${({ mt }) => mt || '0px'};
 margin-bottom: ${({ mb }) => mb || '0px'};
 margin-left: ${({ ml }) => ml || '0px'};
 margin-right: ${({ mr }) => mr || '0px'};
 padding-left: ${({ pl }) => pl || '0%'};
 padding-right: ${({ pr }) => pr || '0%'};
 padding-top: ${({ pt }) => pt || '0px'};
 padding-bottom: ${({ pb }) => pb || '0px'};
 background-color: ${({ bg }) => bg || 'transparent'};
 border-radius: ${({ rad }) => rad || '0px'};
`;

const Box = styled.View`
 display:flex;
 flex: ${({ flex }) => flex || 1};
 width: ${({ width }) => width || '100%'};
 align-items: ${({ ai }) => ai || 'center'};
 justify-content: ${({ jc }) => jc || 'center'};
 height: ${({ height }) => height || 'auto'};
 padding-left: ${({ pl }) => pl || '0%'};
 padding-right: ${({ pr }) => pr || '0%'};
 padding-top: ${({ pt }) => pt || '0px'};
 padding-bottom: ${({ pb }) => pb || '0px'};
 margin-top: ${({ mt }) => mt || '0px'};
 margin-bottom: ${({ mb }) => mb || '0px'};
 margin-left: ${({ ml }) => ml || '0px'};
 margin-right: ${({ mr }) => mr || '0px'};
 background-color: ${({ bg }) => bg || 'transparent'};
 border-width: ${({ bw }) => bw || '0px'};
 border-color: ${({ bc }) => bc || 'transparent'};
 border-style: ${({ bs }) => bs || 'solid'};
 border-radius: ${({ br }) => br || '0px'};
`;

export {
 Row, Box
}