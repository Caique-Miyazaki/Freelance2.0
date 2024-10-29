import React from 'react'

const VagasPage = () => {

const serviços = [{
    id: 1,
    name: "Guilherme",
    title: "loewm ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat velit corrupti repellat, iusto .",
    price: 1.900
},
{
    id: 2,
    name: "LUiz",
    title: "loewm ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat velit corrupti repellat, iusto .",
    price: 1.900
},{
    id: 3,
    name: "Kadu",
    title: "loewm ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat velit corrupti repellat, iusto .",
    price: 1.900
},{
    id: 4,
    name: "Juan",
    title: "loewm ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat velit corrupti repellat, iusto .",
    price: 1.900
}



]

  return (
    <div className='container'>
    <div className='serviços'>

        {serviços.map(servico => {
            return (
                <div key={servico.id}>
                    <h2>{servico.title}</h2>
                    <p>{servico.desc}</p>
                    
                </div>
            
            
            
        )
        }
            

        )}

    </div>

    </div>
  )
}

export default VagasPage