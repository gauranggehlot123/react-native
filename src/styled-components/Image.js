import styled from 'styled-components/native'

const FgImage = styled.Image`
 width: ${({ width }) => width || '0px'};
 height: ${({ height }) => height  || '0px'};
 margin-top: ${({ mt }) => mt || '0px' };
 margin-bottom: ${({ mb }) => mb || '0px' };
 margin-left: ${({ ml }) => ml || '0px' };
 margin-right: ${({ mr }) => mr || '0px' };
 padding-left: ${({ pl }) => pl || '0%'};
 padding-right: ${({ pr }) => pr || '0%'};
 padding-top: ${({ pt }) => pt || '0px'};
 padding-bottom: ${({ pb }) => pb || '0px'};
`; 

const BgImage = styled.ImageBackground`
 justify-content: center;
 align-items: center;
 width: ${({ width }) => width || 'auto'};
 height: ${({ height }) => height  || 'auto'};
 margin-top: ${({ mt }) => mt || '0px' };
 margin-bottom: ${({ mb }) => mb || '0px' };
 margin-left: ${({ ml }) => ml || '0px' };
 margin-right: ${({ mr }) => mr || '0px' };
 padding-left: ${({ pl }) => pl || '0%'};
 padding-right: ${({ pr }) => pr || '0%'};
 padding-top: ${({ pt }) => pt || '0px'};
 padding-bottom: ${({ pb }) => pb || '0px'};
`

export {
 FgImage,
 BgImage,
}