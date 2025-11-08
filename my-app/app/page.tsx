import React from 'react'
import { Button } from "@/components/ui/button"
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <h2 className='text-2xl'>Home</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt officiis,
         quae consequatur eum nobis laboriosam atque itaque rem corrupti sunt repellendus 
         ab voluptatem? Tempore perspiciatis ex consectetur debitis nulla. Dolore!</p>
      <Button>Aceptar</Button>
      <Footer/>          
    </div>
  )
}

export default Home