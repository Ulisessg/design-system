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
  border-radius: 8px;
  padding: 10px;
  border: 1px solid ${theme.colors.dark1};
  margin: 20px 0px;
  width: 90%;
`

const LabelContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 300px;
  padding: 10px;
  border-radius: 20px;
  justify-content: space-between;
  width: 100%;
`

const LabelText = styled.Text`
  margin-left: 8px;
`

const ArrowContainer = styled.View`
  align-items: center;
  width: 25px;
  height: 25px;
  justify-content: center;
  border-radius: 20px;
  padding: 8px;
  margin-right: 8px;
`

const ArrowStyles = styled(Image)`
  width: 20px;
  height: 20px;
`
const ContentContainer = styled.ScrollView<{isOpen: boolean}>`
  display: ${({isOpen}) => isOpen ? 'flex': 'none'};
  width: 100%;
  padding: 10px;
`

export interface DetailsNativeProps {
  label: string
  children: ReactNode
}

export default DetailsNative