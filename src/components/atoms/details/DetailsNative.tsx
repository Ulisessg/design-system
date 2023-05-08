import React, {FC, ReactNode, useState} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native'
import theme from '../../theme'
const arrowUp = require('./up-arrow.png')
const arrowDown = require('./down-arrow.png')

const DetailsNative: FC<DetailsNativeProps> = ({label, children}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOnPess = () => {
    setIsOpen(!isOpen)
  }
  return <DetailsContainer>
    <TouchableOpacity onPress={handleOnPess}>
      <LabelContainer>
        <LabelText>
          {label}
        </LabelText>
        <ArrowContainer>
          <ArrowStyles
            alt='Arrow open or close details'
            source={isOpen ? arrowUp : arrowDown }
          />
        </ArrowContainer>
      </LabelContainer>
    </TouchableOpacity>
      <ContentContainer isOpen={isOpen} style={{borderTopWidth: 0}}>
        {children}
      </ContentContainer>
  </DetailsContainer>
}

const DetailsContainer = styled.View`
  border-radius: ${theme.spacing}px;
  padding: ${theme.spacing}px;
  border: 1px solid ${theme.colors.dark1};
  margin: ${theme.spacing * 3}px 0px;
  width: 90%;
`

const LabelContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${theme.spacing * 2}px;
  border-radius: 20px;
  justify-content: space-between;
  width: 100%;
`

const LabelText = styled.Text`
  margin-left: ${theme.spacing}px;
`

const ArrowContainer = styled.View`
  align-items: center;
  width: ${theme.spacing * 3}px;
  height: ${theme.spacing * 3}px;
  justify-content: center;
  border-radius: 20px;
  padding: ${theme.spacing}px;
  margin-right: ${theme.spacing}px;
`

const ArrowStyles = styled(Image)`
  width: ${theme.spacing * 3}px;
  height: ${theme.spacing * 3}px;
`
const ContentContainer = styled.ScrollView<{isOpen: boolean}>`
  display: ${({isOpen}) => isOpen ? 'flex': 'none'};
  width: 100%;
  padding: ${theme.spacing}px;
`

export interface DetailsNativeProps {
  label: string
  children: ReactNode
}

export default DetailsNative