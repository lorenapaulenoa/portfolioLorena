import React from 'react'

export interface tablaProps {
  cabeceras?: CabeceraInterface [];
  filas?: any [];
}

export interface CabeceraInterface {
  id: string,
  text?: string,
}

export const Tablayo: React.FC<tablaProps>  = ({cabeceras = []}, {filas = []}) => {
  return (
    <div>
      <table className='border border-separate border-blue-950'>
        <thead>
          <tr> {
                cabeceras.map((item) => (
                  <th className='border border-2 border-black text-center' key={item.id}> {item.text}</th>
                ))
                }

         </tr>
        </thead>
        <tbody>
            {
                filas.map((fila,index) => (
                    <tr key={index}>
                      {
                        cabeceras.map((item, index) => (
                          <td className='border border-2 border-black text-center' key={`${item.id}-${index}`} > {row}[item.id]</td>
                        ))
                      }
          
          </tr>
        </tbody>
      </table>
    </div>
  )
}
