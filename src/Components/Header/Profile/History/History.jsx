import React from 'react'
import PathTrace from '../../../../SharedComponents/PathTrace/PathTrace'


export default function History() {
  return (
    <div>
           <PathTrace
                  title="HISTORY"
                  nextitle="Best of your choice"
                 breadcrumbs={[{ name: "Home", to: "/" }, { name: "Profile" },{name:"Book History"}]}
                />
    </div>
  )
}
