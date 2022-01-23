import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1px;
    background-color: #fff;
`;
export const TitleInput = styled.TextInput`
    font-size: 20px;
    font-weight: bold;
    color: #000;
    padding: 15px;
`;
export const BodyInput = styled.TextInput`
    flex: 1px;
    padding: 15px;
    font-size: 15px;
    color: #000;
    background-color: #fff;
`;
export const SaveButton = styled.TouchableHighlight`
    margin-right: 15px;
`;
export const SaveButtonImage = styled.Image`
    width: 24px;
    height: 24px;
`;
export const CloseButton = styled.TouchableHighlight`
    margin-left: 15px;
`
export const CloseButtonImage = styled.Image`
    width: 19px;
    height: 19px;
`
export const DeleteButton = styled.TouchableHighlight`
    height: 80px;
    background-color: #ff3333;
    justify-content: center;
    align-items: center;
`
export const DeleteButtonText = styled.Text`
    margin-bottom: 20px;
    font-size: 14px;
    color: #fff;
`