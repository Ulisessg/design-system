import type { Meta, StoryObj } from '@storybook/react';
import TableComponent, { TableProps } from './Table';
import React, { FC } from 'react'
import Td from '../../atoms/Td'
import Th from '../../atoms/Th'

const Table: FC<TableProps> = () => <TableComponent caption='Comidas agrupadas por tipo'>
  <thead>
    <tr>
      <Th>Tipo de comida</Th>
      <Th>Comida</Th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <Td rowSpan={3}>
        Vegetarianas
      </Td>
      <Td>
        Tacos de hongos al pastor
      </Td>
    </tr>
    <tr>
      <Td>
        Caldo de verduras
      </Td>
    </tr>   
    <tr>
      <Td>
        Caldo de verduras 2, ahora es personal.
      </Td>
    </tr>
    <tr>
      <Td rowSpan={5}>
        Mexicana
      </Td>
      <Td>
        Gorditas
      </Td>
    </tr>
    <tr>
      <Td>Tlacoyos</Td>
    </tr>
    <tr><Td>Tlayuda</Td></tr>
    <tr><Td>Tamales</Td></tr>
    <tr><Td>Zacahuil</Td></tr>
  </tbody>
</TableComponent>

const meta: TMeta = {
  component: Table
}

export default meta

export const Primary: Story = {

}

type TTable = typeof Table
type TMeta = Meta<TTable>
type Story = StoryObj<TTable>